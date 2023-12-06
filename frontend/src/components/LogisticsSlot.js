import React from "react";

const LogisticsSlot = ({ days, onDrop, onDragOver, queue }) => {
  const slotRows = [
    { id: 1, label: "Slot1" },
    { id: 2, label: "Slot2" },
    { id: 3, label: "Slot3" },
    { id: 4, label: "Slot4" },
    // Add more rows as needed
  ];

  return (
    <div className="table-wrapper">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Slots</th>
            {days.map((day, index) => (
              <th className="days" key={index}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slotRows.map((row) => (
            <tr key={row.id}>
              <td>{row.label}</td>
              {days.map((_, index) => (
                <td
                  key={index}
                  className="drop-zone"
                  onDrop={(e) => onDrop(e, row.id, index)}
                  onDragOver={(e) => onDragOver(e)}
                >
                  {/* Render the task in the corresponding slot */}
                  {queue.find((task) => task.slot === row.id && task.day === index + 1)?.customerName}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogisticsSlot;
