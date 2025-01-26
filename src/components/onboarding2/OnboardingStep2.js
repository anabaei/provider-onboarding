import React, { useState } from "react";
import { Avatar, Upload} from "antd";
import "./OnboardingStep2.css";
import { Button } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

const OnboardingStep2 = ({ onBack, onNext }) => {
  const [modalContent, setModalContent] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [row1Data, setRow1Data] = useState([
    { name: "John Doe", email: "johndoe@gmail.com", phone: "12343232232" },
  ]);

  const [profiles, setProfiles] = useState([
    { name: "Default Name", email: "default@example.com", image: "" },
  ]);

  const [admins, setAdmins] = useState([
    { name: "Name", email: "default@example.com" },
  ]);

  const addAdmin = () => {
    //setAdmin
    setModalContent(2);
  };

  const addProfile = () => {
    setModalContent(1);
  };
  const [uploadedFiles, setUploadedFiles] = useState(() => {
    // Load saved images from localStorage
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
    
  } 

  const handleAdd = (row, data) => {
    console.log("data", data)
    if (row === 1) {
      setProfiles([
        ...profiles,
        { name: data.name, email: data.email, image: data.image },
      ]);
      setRow1Data([...row1Data, data]);
    } else {
      setAdmins([...admins, { name: data.name, email: data.email }]);
      setRow2Data([...row2Data, data]);
    }
    closeModal();
  };

  return (
    <div className="onboarding-step2-container">
      <div style={{ textAlign: "left" }}>
        <h1>Onboarding Step 2</h1>
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
            style={{ border: "1px solid lightGrey", margin: "0xp 10px", padding: '1rem' }}
          >
            <Avatar src={profile.image || "/images/profile1.png"} size={64} />
            <div className="text-center mt-4">
              <p>Name: {profile.name}</p>
              <p style={{fontSize: '10px'}}>Email: {profile.email}</p>
            </div>
          </div>
        ))}
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
            style={{ border: "1px solid lightGrey", margin: "0xp 10px", padding: '1rem' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column'}}>
              <div style={{display: 'flex', textAlign: 'left', margin: '0px 0px 5px 0px'}}>Name: {admin.name}</div>
              <div style={{display: 'flex', fontSize: '10px'}}>Email: {admin.email}</div>
            </div>
          </div>
        ))}
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

      {modalContent && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add Details</h2>
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
        <Button icon={<UploadOutlined />}>Click or Drag to Upload</Button>
      </Upload>
                </>
              )}
              <button type="submit">Add</button>
              <button type="button" onClick={closeModal}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr'}}>
       <div style={{display: 'flex', gap: '10px', marginTop: '20px'}}>
       <div className="default-button"  onClick={onBack}>
        Back
      </div>
      <div className="default-button"  onClick={onNext}>
        Next
      </div>

       </div>
       <div>
        
       </div>

      </div>
    </div>
  );
};

export default OnboardingStep2;
