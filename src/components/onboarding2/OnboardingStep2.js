import React, { useState, useEffect } from "react";
import { Avatar, Upload } from "antd";
import { Button } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import config from "../../config";

import "./OnboardingStep2.css";

const OnboardingStep2 = ({ onBack, goToServicePage }) => {
  const { clinicId } = useParams(); // Extract clinicId from URL using useParams

  // State and other logic...
  const [modalContent, setModalContent] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [row1Data, setRow1Data] = useState([
    { name: "John Doe", email: "johndoe@gmail.com", phone: "12343232232" },
  ]);

  const [profiles, setProfiles] = useState([
    {
      name: "Default Name",
      email: "default@gmail.com",
      phone: "12343232232",
      image: "",
    },
  ]);

  const [admins, setAdmins] = useState([
    { name: "Name", email: "default@example.com" },
  ]);

  const addAdmin = () => {
    setModalContent(2);
  };

  const addProfile = () => {
    setModalContent(1);
  };

  const [uploadedFiles, setUploadedFiles] = useState(() => {
    const savedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    return savedFiles;
  });

  const [row2Data, setRow2Data] = useState([]);

  const openModal = (row) => {
    setModalContent(row);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleUpload = (info) => {
    const file = info.file.originFileObj;
  };

  const handleAdd = async (row, data) => {
    const clinic_id = parseInt(clinicId);
    if (row === 1) {
      // Add Specialist to DB
      const formData = {
        name: data.name,
        email: data.email,
        image: data?.image,
        phone: data?.phone,
        clinic_id, // Use the clinicId here
      };
      const responses = await fetch(`${config.apiBaseUrl}/specialists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (responses.ok) {
        const data = await responses.json();
        console.log("data = ", data);
        const { name, email, phone, image } = data.specialist;
        // Update UI state
        setProfiles([...profiles, { name, email, phone, image }]);
        setRow1Data([...row1Data, data]);
      } else {
        //TODO alert error
        console.error("Failed to submit form");
      }
    } else {
      // Add Admin to DB
      const formData = {
        name: data.name,
        email: data.email,
        type: "admin",
        clinic_id,
      };

      const responses = await fetch(`${config.apiBaseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (responses.ok) {
        const data = await responses.json();
        // Update UI state
        setAdmins([...admins, { name: data.name, email: data.email }]);
        setRow2Data([...row2Data, data]);
      } else {
        //TODO alert error
        console.error("Failed to submit form", responses.message);
      }
    }
    closeModal();
  };

  useEffect(() => {
    // Fetch profiles from the API using the clinicId
    const fetchProfiles = async () => {
      try {
        const response = await fetch(
          `${config.apiBaseUrl}/specialists/clinic/${clinicId}`
        );
        if (response.ok) {
          const data = await response.json();
          setProfiles(data); // Assuming the API returns a `profiles` array
          setRow1Data(data); // Update row1Data as well (if needed)
        } else {
          console.error("Failed to fetch profiles");
        }
      } catch (error) {
        console.error("Error fetching profiles:", error);
      }
    };

    

    //fetch admins
    const fetchAdmins = async () => {
      try {
        const response = await fetch(
          `${config.apiBaseUrl}/users/clinic/${clinicId}/admins`
        );
        if (response.ok) {
          const data = await response.json();
          setAdmins(data); // Assuming the API returns an `admins` array
          setRow2Data(data); // Update row2Data as well (if needed)
        } else {
          console.error("Failed to fetch admins");
        }
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };

    // Call the fetch function
    if (clinicId) {
      fetchProfiles();
      fetchAdmins();
    }
  }, [clinicId]);

  return (
    <div className="onboarding-step2-container">
      <div
        style={{ textAlign: "left", marginTop: "2rem", marginBottom: "2rem" }}
      >
        <h1>ONBOARDING</h1>
        <h3> STEP 2: </h3>
        <div>
          Each specialist will receive an email to set up their calendar, or the
          admin can do it on their behalf. Every specialist will have their own
          login credentials. Access can also be delegated to the admin team if
          needed
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {profiles.map((profile, index) => (
          <div
            key={index}
            style={{
              borderRadius: "15px",
              fontSize: "11px",
              border: "1px solid #28a745",
              margin: "10xp 10px 0px 0px",
              padding: "1rem",
            }}
          >
            <Avatar src={profile.image || "/images/profile.png"} size={94} />
            <div
              className="text-center mt-4"
              style={{ textAlign: "left", marginTop: "2rem" }}
            >
              <div>NAME: {profile.name}</div>
              <div>EMAIL: {profile.email}</div>
              <div>PHONE: {profile.phone}</div>
            </div>
          </div>
        ))}

        <div>
          SPECIALIST
          <div className="flex items-center justify-center p-4 border-dashed border-2 rounded-lg w-1/2 md:w-1/4">
            <Button
              type="dashed"
              onClick={addProfile}
              className="flex items-center justify-center w-full h-full"
            >
              <PlusOutlined className="text-4xl" />
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {admins.map((admin, index) => (
          <div
            key={index}
            style={{
              borderRadius: "15px",
              textAlign: "left",
              fontSize: "10px",
              border: "1px solid #28a745",
              margin: "2rem 1px",
              padding: "2rem 1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", margin: "0px 0px 5px 0px" }}>
                NAME: {admin.name}
              </div>
              <div style={{ display: "flex" }}>EMAIL: {admin.email}</div>
            </div>
          </div>
        ))}

        <div>
          ADMIN
          <div className="flex items-center justify-center p-4 border-dashed border-2 rounded-lg w-1/2 md:w-1/4">
            <Button
              type="dashed"
              onClick={addAdmin}
              className="flex items-center justify-center w-full h-full"
            >
              <PlusOutlined className="text-4xl" />
            </Button>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <h4>Add Details</h4>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const data = {
                  name: e.target.name.value,
                  email: e.target.email.value,
                  phone: e.target.phone?.value,
                  image: e.target.image?.files[0],
                };

                handleAdd(modalContent, data);
              }}
            >
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              {modalContent === 1 && (
                <>
                  <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                  <Upload
                    accept="image/*"
                    showUploadList={false}
                    beforeUpload={() => false}
                    onChange={handleUpload}
                  >
                    <Button icon={<UploadOutlined />}>
                      Click or Drag to Upload
                    </Button>
                  </Upload>
                </>
              )}
              <p>
                <div
                  className="default-button"
                  style={{ marginRight: "8px" }}
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </div>
                <button className="default-button" type="submit">
                  Add
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 5fr",
          marginTop: "4rem",
        }}
      >
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <div className="default-button" onClick={onBack}>
            Back
          </div>
          <div
            className="default-button"
            onClick={() => {
              goToServicePage(clinicId);
            }}
          >
            Next
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default OnboardingStep2;
