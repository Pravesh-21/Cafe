const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Path to store reservations persistently
const RESERVATIONS_FILE = path.join(__dirname, 'reservations.json');

// Helper to read reservations
const readReservations = () => {
  try {
    if (!fs.existsSync(RESERVATIONS_FILE)) {
      return [];
    }
    const data = fs.readFileSync(RESERVATIONS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading reservations:', error);
    return [];
  }
};

// Helper to write reservations
const writeReservations = (reservations) => {
  try {
    fs.writeFileSync(RESERVATIONS_FILE, JSON.stringify(reservations, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing reservations:', error);
  }
};

app.get('/', (req, res) => {
  res.send('CRAVERS Backend API is running');
});

// GET endpoint to list reservations (optional, for admin/auditing)
app.get('/api/reservations', (req, res) => {
  const reservations = readReservations();
  res.json({ success: true, count: reservations.length, data: reservations });
});

// POST endpoint to request access / create a reservation
app.post('/api/reservations', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, error: 'Email is required' });
  }

  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address' });
  }

  const reservations = readReservations();

  // Check if email already requested access
  const exists = reservations.some(r => r.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return res.status(409).json({ success: false, error: 'This email is already registered on our list' });
  }

  const newReservation = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    email: email.toLowerCase(),
    createdAt: new Date().toISOString()
  };

  reservations.push(newReservation);
  writeReservations(reservations);

  res.status(201).json({
    success: true,
    message: 'Access request successfully received',
    data: newReservation
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
