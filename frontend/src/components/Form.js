import React from "react";

export const Form = ({addQueueFunction}) => {
    return (
      
    <div>
      <div>
        <div className="customer-form">
          <label>Customer Name:</label>
          <input
            className="customer-form-field"
            id="customer-name"
            type="text"
          />
        </div>
        <div className="customer-form">
          <label>Pickup Location:</label>
          <input
            className="customer-form-field"
            id="pickup-location"
            type="text"
          />
        </div>
        <div className="customer-form">
          <label>Drop-off Location:</label>
          <input
            className="customer-form-field"
            id="drop-off-location"
            type="text"
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
