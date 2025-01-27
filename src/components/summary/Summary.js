import React from 'react';

import "./Summary.css";

const Summary = ({ steps, onEdit }) => {
  const lastSevenSteps = steps?.slice(-7);

  const confirmations = lastSevenSteps.filter(step => step.type === 'confirmation');
  const reminders = lastSevenSteps.filter(step => step.type === 'reminder');

  return (
    <div style={{textAlign: 'left', marginLeft: '3rem'}}>
      <h1>ONBOARDING</h1>
      <h3>STEP: 5</h3>
    <div className="summary">
      
      <div className="category">
        <h2>Confirmations</h2>
        <ul style={{marginLeft: '2rem'}}>
          {confirmations.map((step, index) => (
            <li key={index}>{step.message}</li>
          ))}
        </ul>
        <div className='default-button-long' onClick={onEdit}>Edit</div>
      </div>
      <div className="category">
        <h2>Reminders</h2>
        <ul style={{marginLeft: '2rem'}}>
          {reminders.map((step, index) => (
            <li key={index}>{step.message}</li>
          ))}
        </ul>
       <div className='default-button-long' onClick={onEdit} style={{marginLeft: '190px'}}>Edit</div>
      </div>
     
    </div>
    </div>
  );
};

export default Summary;
