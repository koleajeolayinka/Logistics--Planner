// import React from "react";

// const LogisticsTask = ({ queue }) => {
//   return (
//     <div className="table-wrapper">
//       <table className="table-container">
//         <thead>
//           <tr className="first-row">
//             <th>ID</th>
//             <th>Name</th>
//             <th>Pickup Location</th>
//             <th>Drop-off Location</th>
//           </tr>
//         </thead>
//         <tbody>
//           {queue.map((item) => (
//             <tr className="table-row" key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.customerName}</td>
//               <td>{item.pickupLocation}</td>
//               <td>{item.dropOffLocation}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LogisticsTask;

// // LogisticsTask.jsx
// import React from "react";

// const LogisticsTask = ({ queue, onDragStart }) => {
//   return (
//     <div className="table-wrapper">
//       <table className="table-container">
//         <thead>
//           <tr className="first-row">
//             <th>ID</th>
//             <th>Name</th>
//             <th>Pickup Location</th>
//             <th>Drop-off Location</th>
//           </tr>
//         </thead>
//         <tbody>
//           {queue.map((item) => (
//             <tr
//               key={item.id}
//               draggable
//               onDragStart={(e) => onDragStart(e, item)}
//             >
//               <td>{item.id}</td>
//               <td>{item.customerName}</td>
//               <td>{item.pickupLocation}</td>
//               <td>{item.dropOffLocation}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LogisticsTask;


// LogisticsTask.js
import React from "react";

const LogisticsTask = ({ queue, onDragStart }) => {
  return (
    <div className="table-wrapper">
      <table className="table-container">
        <thead>
          <tr className="first-row">
            <th>ID</th>
            <th>Name</th>
            <th>Pickup Location</th>
            <th>Drop-off Location</th>
          </tr>
        </thead>
        <tbody>
          {queue.map((item) => (
            <tr
              className="table-row"
              key={item.id}
              draggable
              onDragStart={(e) => onDragStart(e, item)}
            >
              <td>{item.id}</td>
              <td>{item.customerName}</td>
              <td>{item.pickupLocation}</td>
              <td>{item.dropOffLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogisticsTask;

