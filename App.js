import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import RoomAssignment from './RoomAssignment';
import './App.css';

function App() {
  const [reservationData, setReservationData] = useState(null);

  return (
    <div className='App'>
        <h1>Hotel Room Assignment</h1>
      {!reservationData ? (
        <ReservationForm setReservationData={setReservationData} />
      ) : (
        <RoomAssignment reservationData={reservationData} setReservationData={setReservationData} />
      )}
    </div>
  );
}

export default App;
