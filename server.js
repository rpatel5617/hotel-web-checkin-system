const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;

// Replace with your MongoDB Atlas connection string
const uri = 'mongodb+srv://rutvik:rutvik@cluster0.9md2u.mongodb.net/hotel_db?retryWrites=true&w=majority';

// Connect to MongoDB using the Atlas connection string
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('MongoDB connection error:', err));

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Reservation schema and model (mockup for demonstration purposes)
const reservationSchema = new mongoose.Schema({
  reservationNumber: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  firstName: String,
  lastName: String,
  roomType: String,
  checkInDate: String,  // Format: YYYY-MM-DD
  checkOutDate: String, // Format: YYYY-MM-DD
  total: String
});

const Reservation = mongoose.model('Reservation', reservationSchema);

// API endpoint for verifying reservation
app.post('/api/verifyReservation', async (req, res) => {
  const { reservationNumber, phoneNumber } = req.body;
  console.log('Received reservationNumber:', reservationNumber);
  console.log('Received phoneNumber:', phoneNumber);

  try {
    // Find the reservation based on reservationNumber and phoneNumber
    const reservation = await Reservation.findOne({ reservationNumber, phoneNumber });

    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found or phone number incorrect.' });
    }

   // Get today's date in YYYY-MM-DD format
   const today = new Date().toISOString().split("T")[0];

   // Compare check-in date
  //  if (reservation.checkInDate !== today) {
  //    return res.json({ message: `Your check-in date is ${reservation.checkInDate}.` });
  //  }

  if (reservation.checkInDate !== today) {
    if (reservation.checkInDate < today) { 
        return res.json({ message: `Your check-in date was on ${reservation.checkInDate}. Please contact the hotel for assistance.` });
    } else {
        return res.json({ message: `Your reservation is made for ${reservation.checkInDate}.` });
    }
}

  


   
    res.json({
      firstName: reservation.firstName,
      lastName: reservation.lastName,
      roomType: reservation.roomType,
      checkInDate: reservation.checkInDate,
      checkOutDate: reservation.checkOutDate,
      total: reservation.total
    });
  } catch (error) {
    console.error('Error verifying reservation:', error);
    res.status(500).json({ message: 'Error verifying reservation.' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
