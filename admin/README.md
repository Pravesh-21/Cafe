# CAFE — Stand-Alone Admin Dashboard

A separate, premium, single-page administrative panel to manage and track all table reservations in real-time. 

---

## 🚀 How to Run the Admin Panel

Since this is a fully self-contained, client-side application, you can run it instantly without compiling any code or installing package dependencies.

### Option 1: Double-Click (Local File)
1. Navigate to the `admin` folder.
2. Double-click the `index.html` file to open it directly in any web browser.

### Option 2: Live Server or Local Static Server
If you want to serve it locally using a static server:
1. Run this command in your terminal inside the `admin` folder:
   ```bash
   npx serve
   ```
2. Open `http://localhost:3000` (or the port specified by serve) in your browser.

---

## 🔒 Passcode Credentials
The dashboard is protected by an administrative lockscreen gate. 
- **Default Passcodes**: `admin123` or `cafe2026`

---

## 🛠️ Integrated Features
- **Real-Time Synchronization**: Connects directly to the Express backend API at `http://localhost:5000/api/reservations`. 
- **Live Status Indicator**: Features a glowing connection status badge. It turns **Green (Active)** when connected successfully to the server, and **Red (Offline)** if the backend is shut down.
- **Database Source Tags**: Shows you whether the backend is pulling data from the live **MongoDB** database or from the fallback **File-based local storage**.
- **Dynamic Capacity Metrics**: Automatically calculates **Total Bookings**, **Today's Bookings**, and **Total Guests Seated** to assist the hosting team in coordinating table arrangements.
- **Reservation Controls**:
  - **Arrive / Check-in**: Toggle guests' attendance. Arrived guests are highlighted in green.
  - **Cancel / Delete**: Sends an API request (`DELETE /api/reservations/:id`) to cancel the booking. On confirmation, the reservation row animates and slides out of the list.
- **Export to CSV**: Click **Export CSV** to download a spreadsheet containing the complete reservation list.
- **Print guest lists**: Click **Print Guest List** (or press `Ctrl+P`) to launch a print dialog. Custom stylesheets automatically hide buttons, search inputs, and headers, formatting the guest table for printing on paper.
