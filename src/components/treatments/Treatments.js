import React, { useState, useEffect } from "react";
import "./Treatments.css";
import { useParams } from "react-router-dom";
import config from "../../config";

const Treatments = ({ selectedService, goToWeeklyAvailability, onBack }) => {
  const [data, setData] = useState([]);
  const { clinicId } = useParams();

  useEffect(async () => {
    // Fetch data from the server
    console.log(
      ">>>",
      selectedService,
      `${config.apiBaseUrl}/treatments/${clinicId}`
    );
    const response = await fetch(`${config.apiBaseUrl}/treatments/${clinicId}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }, []);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e, field, index) => {
    console.log("--", e.target, field, index);
    const newData = [...data];
    newData[index][field] = e.target.value;
    setData(newData);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
  };

  const saveEdit = () => {
    setEditingIndex(null); // Save changes and stop editing
  };

  const cancelEdit = () => {
    setEditingIndex(null); // Cancel editing and revert to original data
  };

  const handleSelectChange = (e, index) => {
    const newData = [...data];
    newData[index].id = parseInt(e.target.value); // Set the ID to the selected value
    setData(newData);
  };

  return (
    <divCustom>
      <h1>Treatments </h1>

      <ul>
        <li>
          <divCustom className="headerTable">Service</divCustom>
          <divCustom className="headerTable">Name</divCustom>
          <divCustom className="headerTable">Price</divCustom>
          <divCustom className="headerTable">Duration</divCustom>
          <divCustom className="headerTable">Action</divCustom>
        </li>

        {data.map((item, index) => (
          <li key={item.id}>
            <divCustom>
              {editingIndex === index ? (
                <select
                  value={item.service}
                  onChange={(e) => handleChange(e, "service", index)}
                >
                  {selectedService &&
                    selectedService.map((service, id) => (
                      <option key={id} value={service}>
                        {service}
                      </option>
                    ))}
                </select>
              ) : (
                item.service
              )}
            </divCustom>

            <divCustom>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleChange(e, "name", index)}
                  placeholder="Name"
                />
              ) : (
                item.name
              )}
            </divCustom>
            <divCustom>
              {editingIndex === index ? (
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleChange(e, "price", index)}
                  placeholder="Price"
                />
              ) : (
                item.price
              )}
            </divCustom>
            <divCustom>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={item.duration}
                  onChange={(e) => handleChange(e, "duration", index)}
                  placeholder="Duration"
                />
              ) : (
                item.duration
              )}
            </divCustom>
            <divCustom>
              {editingIndex === index ? (
                <divCustom>
                  <button onClick={saveEdit}>Save</button>
                  <button onClick={cancelEdit}>Cancel</button>
                </divCustom>
              ) : (
                <button
                  className="edit-btn"
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
              )}
            </divCustom>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setData([...data, { id: data.length + 1, name: "", age: 0 }])
        }
      >
        Add New Row
      </button>
      <divCustom style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <divCustom className="default-button" onClick={onBack}>
            Back
          </divCustom>
          <divCustom
            className="default-button"
            onClick={() => {
              goToWeeklyAvailability(clinicId);
            }}
          >
            Next
          </divCustom>
        </divCustom>
    </divCustom>
  );
};

export default Treatments;
