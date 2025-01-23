import React, { useState } from 'react';
import './WeeklyAvailability.css';
import { Switch } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const WeeklyAvailability = ({ onBack, onNext }) => {
    const [availability, setAvailability] = useState(
        daysOfWeek.reduce((acc, day) => {
            acc[day] = { enabled: true, ranges: [{ start: '', end: '' }] };
            return acc;
        }, {})
    );

    const handleChange = (day, index, field, value) => {
        setAvailability(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                ranges: prevState[day].ranges.map((range, i) =>
                    i === index ? { ...range, [field]: value } : range
                )
            }
        }));
    };

    const addTimeRange = (day) => {
        setAvailability(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                ranges: [...prevState[day].ranges, { start: '', end: '' }]
            }
        }));
    };

    const toggleDay = (day) => {
        setAvailability(prevState => ({
            ...prevState,
            [day]: {
                ...prevState[day],
                enabled: !prevState[day].enabled
            }
        }));
    };

    return (
        <div className="availability-container">
            <h1>Weekly Availability</h1>
            <div className="availability-grid">
                {daysOfWeek.map(day => (
                    <div key={day} className="availability-row">
                        <label className="switch">

                            <Switch checked={availability[day].enabled} onChange={() => toggleDay(day)} />
                        </label>
                        <span className="day-label">{day}</span>
                        <div>
                        {availability[day].enabled && availability[day].ranges.map((range, index) => (
                            <div key={index} className="time-range">
                                <input
                                    type="time"
                                    value={range.start}
                                    onChange={(e) => handleChange(day, index, 'start', e.target.value)}
                                />
                                <span>to</span>
                                <input
                                    type="time"
                                    value={range.end}
                                    onChange={(e) => handleChange(day, index, 'end', e.target.value)}
                                />
                            </div>
                        ))}
                        </div>
                       
                        {availability[day].enabled && (
                            <div> 
                                 <PlusOutlined className="plus" onClick={() => addTimeRange(day)} /> 
                                    Add Window
                            </div>
                           
                            
                        )}
                          {!availability[day].enabled && (
                            <div> Unavailable on {day} </div>
                          )}
                    </div>
                ))}
            </div>
            <button type="button" onClick={onBack}>Back</button>
            <button type="button" onClick={onNext}>Next</button>
        </div>
    );
};

export default WeeklyAvailability;
