import React, { useState } from "react";
import "./Restriction.css";
import { CalendarOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { StopOutlined } from "@ant-design/icons";
const Restriction = ({ onBack, onNext }) => {
  const [number, setNumber] = useState("");
  const [unit, setUnit] = useState("days");
  const [unitTime, setUnitTime] = useState(1);
  const [maxBook, setMaxBook] = useState({ enabled: false });
  const [requireApprove, setRequireApprove] = useState({ enabled: false });

  const toggleMaxBook = () => {
    console.log(maxBook);
    setMaxBook((maxBook) => ({
      ...maxBook,
      enabled: !maxBook.enabled,
    }));
  };

  const toggleRequireApprove = () => {
    console.log(requireApprove);
    setRequireApprove((requireApprove) => ({
      ...requireApprove,
      enabled: !requireApprove.enabled,
    }));
  };

  return (
 
      <div className="restriction-container-availability">
        <h1>ONBOARDING</h1>
        <h3>STEP: 5</h3>
        <div style={{ margin: "1rem 3rem"}}>
        <h2 className="headline">
          <CalendarOutlined style={{ color: "#1890ff" }} />
          <div className="calendar">
            <StopOutlined style={{ color: "#1890ff" }} /> Availability
            Restriction
          </div>
        </h2>
        <div> Define availability restriction for your availability</div>
      
      <div className="restrict-time">
        <div className="restrict-time-details">
          <h6>
            How far out user can book <QuestionCircleOutlined />
          </h6>
          <div style={{ display: "flex"}}>
            <input
              className="elegant-input"
              type="number"
              placeholder="Enter number"
              value={unitTime}
              onChange={(e) => setUnitTime(e.target.value)}
            />
            <div style={{marginTop: '8px', marginLeft: '4px'}}> days ahead </div>
          </div>
          <div style={{ margin: "1rem" }}>
            <label className="switch">
              <Switch
                checked={maxBook.enabled}
                onChange={() => toggleMaxBook()}
                style={{
                  backgroundColor: maxBook.enabled ? "#1890ff" : "#d9d9d9", // Blue when enabled, grey when disabled
                }}
              />
              <span style={{ fontSize: 12 }}> Set Maximum Booking </span>
            </label>
            <QuestionCircleOutlined />
          </div>
        </div>
        <div>
          <div className="restrict-time-details">
            <h6>
              {" "}
              Bookers can't schedual ahead <QuestionCircleOutlined />
            </h6>
            <div className="restrict-time-in">
              <div className="restriction-input">
                <input
                 className="elegant-input"
                  style={{ width: "80px" }}
                  type="number"
                  value={number}
                  defaultChecked="2"
                  onChange={(e) => setNumber(e.target.value)}
                />
                <select className="elegant-select" value={unit} onChange={(e) => setUnit(e.target.value)}>
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
                  checked={requireApprove.enabled}
                  onChange={() => toggleRequireApprove()}
                  style={{
                    backgroundColor: requireApprove.enabled
                      ? "#1890ff"
                      : "#d9d9d9", // Blue when enabled, grey when disabled
                  }}
                />
                <span style={{ fontSize: 12 }}> Require Approve </span>
              </label>
              <QuestionCircleOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className="broadcumb">
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
  );
};

export default Restriction;
