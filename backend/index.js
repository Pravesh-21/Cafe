const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Path to store reservations persistently in case of fallback
const RESERVATIONS_FILE = path.join(__dirname, 'database', 'reservations.json');

// MongoDB Connection URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cafe';

let useMongoDB = false;

// ─── MONGODB SCHEMA & MODEL ───
const reservationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  guests: { type: Number, required: true, min: 1 },
  date: { type: String, required: true },
  time: { type: String, required: true },
  notes: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// Connect to MongoDB
console.log('Connecting to MongoDB...');
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('🎂 Connected to MongoDB database successfully');
    useMongoDB = true;
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    console.log('⚠️ Falling back to file-based database (reservations.json) for safety...');
    useMongoDB = false;
  });

// ─── FILE-BASED DATABASE HELPERS (FALLBACK) ───
const readReservationsFromFile = () => {
  try {
    if (!fs.existsSync(RESERVATIONS_FILE)) {
      return [];
    }
    const data = fs.readFileSync(RESERVATIONS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading reservations file:', error);
    return [];
  }
};

const writeReservationsToFile = (reservations) => {
  try {
    fs.writeFileSync(RESERVATIONS_FILE, JSON.stringify(reservations, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing reservations file:', error);
  }
};

// ─── API ROUTES ───

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'CAFE Backend API is running',
    database: useMongoDB ? 'MongoDB' : 'File-based (Fallback)'
  });
});

// GET endpoint to list reservations
app.get('/api/reservations', async (req, res) => {
  try {
    if (useMongoDB) {
      const reservations = await Reservation.find().sort({ date: 1, time: 1 });
      return res.json({ success: true, count: reservations.length, database: 'MongoDB', data: reservations });
    } else {
      const reservations = readReservationsFromFile();
      return res.json({ success: true, count: reservations.length, database: 'File-based', data: reservations });
    }
  } catch (error) {
    console.error('Error getting reservations:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch reservations' });
  }
});

// POST endpoint to create a reservation
app.post('/api/reservations', async (req, res) => {
  const { name, email, guests, date, time, notes } = req.body;

  if (!name || !email || !guests || !date || !time) {
    return res.status(400).json({ success: false, error: 'Name, email, guests, date, and time are required' });
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address' });
  }

  // Parse guest count
  const guestCount = parseInt(guests, 10);
  if (isNaN(guestCount) || guestCount < 1) {
    return res.status(400).json({ success: false, error: 'Guest count must be a positive number' });
  }

  try {
    const customId = 'RES-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const cleanNotes = notes ? notes.trim() : '';

    if (useMongoDB) {
      // Check if email already has a reservation on the same date and time slot in MongoDB
      const exists = await Reservation.findOne({
        email: email.toLowerCase(),
        date,
        time
      });

      if (exists) {
        return res.status(409).json({ success: false, error: 'You already have a reservation at this time slot' });
      }

      const newReservation = new Reservation({
        id: customId,
        name: name.trim(),
        email: email.toLowerCase(),
        guests: guestCount,
        date,
        time,
        notes: cleanNotes
      });

      await newReservation.save();

      res.status(201).json({
        success: true,
        message: 'Table reservation successfully confirmed via MongoDB',
        data: newReservation
      });
    } else {
      // Fallback file-based database check
      const reservations = readReservationsFromFile();

      const exists = reservations.some(
        r => r.email.toLowerCase() === email.toLowerCase() && r.date === date && r.time === time
      );
      if (exists) {
        return res.status(409).json({ success: false, error: 'You already have a reservation at this time slot' });
      }

      const newReservation = {
        id: customId,
        name: name.trim(),
        email: email.toLowerCase(),
        guests: guestCount,
        date,
        time,
        notes: cleanNotes,
        createdAt: new Date().toISOString()
      };

      reservations.push(newReservation);
      writeReservationsToFile(reservations);

      res.status(201).json({
        success: true,
        message: 'Table reservation successfully confirmed via File Storage',
        data: newReservation
      });
    }
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ success: false, error: 'Failed to save reservation' });
  }
});

// DELETE endpoint to cancel/delete a reservation
app.delete('/api/reservations/:id', async (req, res) => {
  const { id } = req.params;

  try {
    if (useMongoDB) {
      const deleted = await Reservation.findOneAndDelete({ id: id });

      if (!deleted) {
        return res.status(404).json({ success: false, error: 'Reservation not found' });
      }

      res.json({
        success: true,
        message: 'Reservation successfully cancelled from MongoDB',
        data: deleted
      });
    } else {
      // Fallback file-based database deletion
      const reservations = readReservationsFromFile();
      const index = reservations.findIndex(r => r.id === id);

      if (index === -1) {
        return res.status(404).json({ success: false, error: 'Reservation not found' });
      }

      const deleted = reservations.splice(index, 1);
      writeReservationsToFile(reservations);

      res.json({
        success: true,
        message: 'Reservation successfully cancelled from File Storage',
        data: deleted[0]
      });
    }
  } catch (error) {
    console.error('Error deleting reservation:', error);
    res.status(500).json({ success: false, error: 'Failed to cancel reservation' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
