import React from "react";

export const Form = ({ addQueueFunction }) => {
  return (
    <div className="form-container">
      <div>
        <div className="customer-form">
          <label htmlFor="customer-name">Customer Name:</label>
          <input
            className="customer-form-field"
            id="customer-name"
            type="text"
            placeholder="Enter customer name"
          />
        </div>
        <div className="customer-form">
          <label htmlFor="pickup-location">Pickup Location:</label>
          <input
            className="customer-form-field"
            id="pickup-location"
            type="text"
            placeholder="Enter pickup location"
          />
        </div>
        <div className="customer-form">
          <label htmlFor="drop-off-location">Drop-off Location:</label>
          <input
            className="customer-form-field"
            id="drop-off-location"
            type="text"
            placeholder="Enter drop-off location"
          />
          <div className="button">
            <button type="button" onClick={addQueueFunction}>
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
