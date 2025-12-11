// import React, { useState } from 'react';
// import axios from 'axios';
// import './ReservationForm.css';

// function ReservationForm({ setReservationData }) {
//   const [reservationNumber, setReservationNumber] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage(''); // Clear any previous error

//     try {
//       // Send request to backend API
//       const response = await axios.post('http://localhost:5000/api/verifyReservation', {
//         reservationNumber,
//         phoneNumber,
//       });

//       console.log("API Response:", response.data);

//       // If reservation is valid, update the reservationData in the parent component
//       if (response.data && response.data.firstName) {
//         setReservationData(response.data);
//       } else {
//         setErrorMessage('Reservation not found or phone number incorrect.');
//       }
//     } catch (error) {
//       console.error("Error connecting to server:", error);
//       setErrorMessage('Error connecting to server. Please check if the backend is running.');
//     }
//   };

//   return (
//     <div className="reservation-form">
//       <h2>Enter Reservation Details</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Reservation Number"
//           value={reservationNumber}
//           onChange={(e) => setReservationNumber(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//           required
//         />
//         <button type="submit">Verify</button>
//       </form>
//       {errorMessage && <p className="error">{errorMessage}</p>}
//     </div>
//   );
// }

// export default ReservationForm;

import React, { useState } from 'react';
import axios from 'axios';
import './ReservationForm.css';

function ReservationForm({ setReservationData }) {
  const [reservationNumber, setReservationNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      // Send request to backend API without requiring check-in date
      const response = await axios.post('https://hotel-check-in-backend.onrender.com/api/verifyReservation', {
        reservationNumber,
        phoneNumber,
      });

      console.log("API Response:", response.data);

      // Check if the response contains a check-in date mismatch message
      if (response.data.message) {
        setErrorMessage(response.data.message); // Show check-in date message
      } else if (response.data.firstName) {
        setReservationData(response.data); // Proceed with reservation verification
      } else {
        setErrorMessage('Reservation not found or phone number incorrect.');
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      setErrorMessage('Error connecting to server. Please check if the backend is running.');
    }
  };

  return (
    <div className="reservation-form">
      <h2>Enter Reservation Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Reservation Number"
          value={reservationNumber}
          onChange={(e) => setReservationNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default ReservationForm;
