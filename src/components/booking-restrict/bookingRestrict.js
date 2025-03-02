import React, { useState } from "react";
import "./bookingRestrict.css";
import { ContactsOutlined } from "@ant-design/icons";

import { QuestionCircleOutlined, MenuUnfoldOutlined, DatabaseOutlined, ContactsFilled } from "@ant-design/icons";


const BookingRestrict = ({onBack, onNext}) => {

  const [numberDuration, setNumberDuration] = useState("");
  const [numberPad, setNumberPad] = useState("");
  const [number, setNumber] = useState("");
  const [unit, setUnit] = useState("minutes");

  return (
    <div style={{ textAlign: "left", marginLeft: "3rem"}}>
      <h1>ONBOARDING</h1>
      <h3>STEP: 5</h3>

    <div className="restriction-container">
      <div>
        <h2 className="headline" style={{ color: '#1890ff'}} >
            Booking Duration and Interval
        </h2>
        <div> Define availability restriction for your availability</div>
      </div>
      <div className="restrict-time-details">
          <div style={{marginLeft: '30px', fontSize: '14px' }}> Booking Duration  <QuestionCircleOutlined /></div>
          <div className="restrict-time-in">
          <div style={{display: 'flex', flexDirection: 'row'}}> 
          <DatabaseOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '5px' }} />         
            <input
              type="number"
              placeholder="Enter number"
              value={numberDuration}
              onChange={(e) => setNumberDuration(e.target.value)}
            />
          </div>
            <div style={{ marginLeft: "1rem", marginTop: '5px' }}> minutes </div>
          </div>
        </div>
      <div className="restrict-time">
        
          <div className="restrict-time-details">
            <div style={{marginLeft: '30px', fontSize: '14px' }}> Bookers can't schedual ahead  <QuestionCircleOutlined /></div>
            <div className="restrict-time-in">
              <div className="restriction-input">
              <MenuUnfoldOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '5px' }}  />  
                <input
                  style={{width: '50px', marginRight: '4px'}}
                  type="number"
                  
                  value={number}
                  defaultChecked= '2'
                  onChange={(e) => setNumber(e.target.value)}
                />
                <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                  <option value="days">Days</option>
                </select>
              </div>
              <div style={{ marginLeft: "1rem" }}> </div>
            </div>
            
          </div>
        
      </div>
      
      <div className="restrict-time-details">
          <div style={{marginLeft: '30px', fontSize: '14px' }}> How far out user can book  <QuestionCircleOutlined /></div>
          <div className="restrict-time-in">
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <ContactsOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '5px' }}  />
            <input
              type="number"
              placeholder="Enter number"
              value={numberPad}
              onChange={(e) => setNumberPad(e.target.value)}
            />
            </div>
            <div style={{ marginLeft: "1rem", marginTop: '5px' }}> minutes </div>
          </div>
          
        </div>
        <div className="broadcumb">
                
                <div className="default-button" onClick={onBack}>Back</div>
                <div className="default-button" onClick={onNext}>Next</div>
                <div></div>
                </div>
    </div>
  </div>
  );
};

export default BookingRestrict;
