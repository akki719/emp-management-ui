import React from 'react';

const Popup = ({ employee, onClose }) => {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Employee Info</h2>
        <p>Name: {employee.name}</p>
        <p>Age: {employee.age}</p>
        <p>Department: {employee.department}</p>
        <p>Manager: {employee.manager}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;