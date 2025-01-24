import React, { useState } from 'react';
import './Restriction.css';
import { CalendarOutlined } from '@ant-design/icons';
import { StopOutlined } from '@ant-design/icons';
const Restriction = ({ onAddRestriction }) => {
    const [days, setDays] = useState('');
    const [number, setNumber] = useState('');
    const [unit, setUnit] = useState('minutes');

    const handleAddRestriction = () => {
        onAddRestriction({ days, number, unit });
        setDays('');
        setNumber('');
        setUnit('minutes');
    };

    return (
        <div className="restriction-container">
            <div>

                <h2 className="headline"> <CalendarOutlined /> <div className='calendar'> <StopOutlined /> Availability Restriction </div> </h2>
                <div> Define availability restriction for your availability</div>
            </div>
            <div className="restrict-time">
                <div className="restrict-time-details"> <h6> How far out user can book</h6> <div> 2 </div> <div> 3 </div>  </div>
                <div>2 </div>
            </div>

        </div>
        //     <div>
        //     <input
        //         type="text"
        //         placeholder="Enter days"
        //         value={days}
        //         onChange={(e) => setDays(e.target.value)}
        //     />

        //     </div>
        //     <div> 


        //     <div className="restriction-input">
        //     <input
        //         type="number"
        //         placeholder="Enter number"
        //         value={number}
        //         onChange={(e) => setNumber(e.target.value)}
        //     />
        //     <select value={unit} onChange={(e) => setUnit(e.target.value)}>
        //         <option value="minutes">Minutes</option>
        //         <option value="hours">Hours</option>
        //         <option value="days">Days</option>
        //     </select>

        //     </div>
        //     </div>
        //     {/* <button type="button" onClick={handleAddRestriction}>Add Restriction</button> */}
        // </div>
    );
};

export default Restriction;
