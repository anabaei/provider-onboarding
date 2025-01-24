import React, { useState } from "react";
import "./Restriction.css";
import { CalendarOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { StopOutlined } from "@ant-design/icons";
const Restriction = ({ onAddRestriction }) => {
  const [days, setDays] = useState("");
  const [number, setNumber] = useState("");
  const [unit, setUnit] = useState("minutes");
  const [maxBook, setMaxBook] = useState(false);
  const [requireApprove, setRequireApprove ] = useState(false)

  const handleAddRestriction = () => {
    onAddRestriction({ days, number, unit });
    setDays("");
    setNumber("");
    setUnit("minutes");
  };

  const toggleMaxBook = (maxBook) => {
    setMaxBook(!maxBook);
  };

  const toggleRequireApprove = (requireApprove ) => {
    setRequireApprove(!requireApprove);
  };

  return (
    <div className="restriction-container">
      <div>
        <h2 className="headline">
          {" "}
          <CalendarOutlined />{" "}
          <div className="calendar">
            {" "}
            <StopOutlined /> Availability Restriction{" "}
          </div>{" "}
        </h2>
        <div> Define availability restriction for your availability</div>
      </div>
      <div className="restrict-time">
        <div className="restrict-time-details">
          <h6> How far out user can book</h6>
          <div className="restrict-time-in">
            <input
              type="number"
              placeholder="Enter number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <div style={{ marginLeft: "1rem" }}> days ahead </div>
          </div>
          <div style={{ margin: "1rem" }}>
            <label className="switch">
              <Switch
                checked={maxBook.enabled}
                onChange={() => toggleMaxBook()}
              />
              <span style={{ fontSize: 12 }}> Set Maximum Booking </span>
            </label>
            <QuestionCircleOutlined />
          </div>
        </div>
        <div>
          <div className="restrict-time-details">
            <h6> How far out user can book</h6>
            <div className="restrict-time-in">
              <div className="restriction-input">
                <input
                  type="number"
                  placeholder="Enter number"
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
              <div style={{ marginLeft: "1rem" }}> of current time </div>
            </div>
            <div style={{ margin: "1rem" }}>
              <label className="switch">
                <Switch
                  checked={maxBook.enabled}
                  onChange={() => toggleRequireApprove()}
                />
                <span style={{ fontSize: 12 }}> Require Approve </span>
              </label>
              <QuestionCircleOutlined />
            </div>
          </div>
        </div>
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
