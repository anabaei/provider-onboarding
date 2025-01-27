import React, { useState } from "react";
import "./WeeklyAvailability.css";
import { Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeeklyAvailability = ({ onBack, onNext }) => {
  const [availability, setAvailability] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { enabled: day === "Sunday" || day === "Monday" || day === "Saturday" ? false: true, ranges: [{ start: "", end: "" }] };
      return acc;
    }, {})
  );

  const handleChange = (day, index, field, value) => {
    setAvailability((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        ranges: prevState[day].ranges.map((range, i) =>
          i === index ? { ...range, [field]: value } : range
        ),
      },
    }));
  };

  const addTimeRange = (day) => {
    setAvailability((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        ranges: [...prevState[day].ranges, { start: "", end: "" }],
      },
    }));
  };

  const toggleDay = (day) => {
    setAvailability((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        enabled: !prevState[day].enabled,
      },
    }));
  };

  return (
    <div>
      <div className="availability-container">
      <h1>ONBOARDING</h1>
      <h3>STEP: 5</h3>
        <div className="availability-grid">
          <div>Define Your Weekly Availability Below:</div>
          {daysOfWeek.map((day) => (
            <div key={day} className="availability-row">
             
                <Switch
                  checked={availability[day].enabled}
                  onChange={() => toggleDay(day)}
                />
              
              <span className="day-label">{day}</span>
              <div>
                {availability[day].enabled &&
                  availability[day].ranges.map((range, index) => (
                    <div key={index} className="time-range">
                      <input
                       style={{ minWidth: '75px'}}
                        type="time"
                        value={range.start}
                        onChange={(e) =>
                          handleChange(day, index, "start", e.target.value)
                        }
                      />
                      <span>to</span>
                      <input
                        style={{ minWidth: '75px'}}
                        type="time"
                        value={range.end}
                        onChange={(e) =>
                          handleChange(day, index, "end", e.target.value)
                        }
                      />
                    </div>
                  ))}
              </div>

              {availability[day].enabled && (
                <div>
                  <PlusOutlined
                    className="plus"
                    onClick={() => addTimeRange(day)}
                  />
                  Add Window
                </div>
              )}
              {!availability[day].enabled && <div> Unavailable on {day} </div>}
            </div>
          ))}
          <div className="broadcumb" style={{marginTop: '70px'}}>
            <div className="default-button" onClick={onBack}>
              Back
            </div>
            <div className="default-button" onClick={onNext}>
              Next
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyAvailability;
