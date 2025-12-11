// import React, { useState } from 'react';
// import './RoomAssignment.css';

// function RoomAssignment({ reservationData, setReservationData }) {
//   const [roomAssigned, setRoomAssigned] = useState(false);
//   const [pin, setPin] = useState('');
//   const [assignedRoom, setAssignedRoom] = useState('');

//   const roomNumbers = ['105', '107', '109', '110', '112'];

//   const assignRoom = () => {
//     const randomRoom = roomNumbers[Math.floor(Math.random() * roomNumbers.length)];
//     const randomPin = Math.floor(1000 + Math.random() * 9000);

//     setAssignedRoom(randomRoom);
//     setPin(randomPin);
//     setRoomAssigned(true);
//   };

//   return (
//     <div className="room-assignment">
//       <h2>Reservation Verified</h2>
//       <p>Guest Name </p> <p1> {reservationData.firstName} {reservationData.lastName}</p1>
//       <p>Room Type </p> <p1> {reservationData.roomType}</p1>

//       {!roomAssigned ? (
//         <div>
//           <button onClick={assignRoom}>Assign Room & Generate Pin</button>
//         </div>
//       ) : (
//         <div>
//           <p>Assigned Room </p> <p1>{assignedRoom}</p1>
//           <p>Your PIN </p>  <p1>{pin}</p1>
//         </div>
//       )}
//         <div style={{ marginTop: "20px" }}>
//            <button onClick={() => setReservationData(null)}>Back to Reservation Form</button>
//         </div>
        
//     </div>
//   );
// }

// export default RoomAssignment;


import React, { useState } from 'react';
import './RoomAssignment.css';

function RoomAssignment({ reservationData, setReservationData }) {
  const [roomAssigned, setRoomAssigned] = useState(false);
  const [pin, setPin] = useState('');
  const [assignedRoom, setAssignedRoom] = useState('');

  // Room Type to Room Numbers mapping
  const roomMapping = {
    NQQ1: ['105', '107', '109', '110', '111','112','113','114','115','117','119','120','121', '205', '207', '209', '210', '211','212','213','214','215','217','219','220','221','222','223','225'],
    NQQ2: ['216', '218'],
    NK1: ['106', '108', '206', '208'],
    NK2: ['202', '204'],
    PNQ2: ['118'],
    SNK1: ['224'],
    SNK2: ['204'],
    SPN1: ['116'],
    NQQ3: ['122', '123', '124', '125'],
  };



  //Function to assign room based on room type
  const assignRoom = () => {
    // Get the room numbers for the selected room type
    const availableRooms = roomMapping[reservationData.roomType];

    // Randomly pick a room from the available rooms
    const randomRoom = availableRooms[Math.floor(Math.random() * availableRooms.length)];

    // Generate a random PIN
   const randomPin = Math.floor(1000 + Math.random() * 9000);



    setAssignedRoom(randomRoom);
    setPin(randomPin);
    setRoomAssigned(true);
  };

  return (
    <div className="room-assignment">
      <h2>Reservation Verified</h2>
      <p>Guest Name: <span>{reservationData.firstName} {reservationData.lastName}</span></p>
      <p>Room Type: <span>{reservationData.roomType}</span></p>
      <p>Check-in Date: <span>{reservationData.checkInDate}</span></p>
      <p>Check-out Date: <span>{reservationData.checkOutDate}</span></p>
      <p>Room Rate:<span> ${reservationData.total}</span></p>

      {!roomAssigned ? (
        <div>
          <button onClick={assignRoom}>Assign Room & Generate Pin</button>
        </div>
      ) : (
        <div>
          <p>Assigned Room: <span>{assignedRoom}</span></p>
          <p>Your PIN: <span>{pin}</span></p>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setReservationData(null)}>Back to Reservation Form</button>
      </div>
    </div>
  );
}

export default RoomAssignment;
