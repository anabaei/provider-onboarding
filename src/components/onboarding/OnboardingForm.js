import React, { useState } from "react";
import "./OnboardingForm.css";
import config from '../../config'; 

const OnboardingForm = ({ handleOnCreatingClinicComplete }) => {
 
  // State to track form values
  const [companyName, setCompanyName] = useState("");
  const [mainContact, setMainContact] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [embedCode, setEmbedCode] = useState("");
  const [showEmbedCode, setShowEmbedCode] = useState(false);
  const [embedUrl, setEmbedUrl] = useState("cw3.twinnlinks.ca");
  const [copied, setCopied] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);


  const generateEmbedCode = () => {
    const code = `<iframe src="${window.location.href}" width="600" height="400"></iframe>`;
    setEmbedCode(code);
    setShowEmbedCode(!showEmbedCode);
  };

  const copyUrlToClipboard = async () =>{
    try {
        await navigator.clipboard.writeText(embedUrl);
        setCopiedUrl(true);
        setTimeout(() => setCopiedUrl(false), 2000);
        setShowEmbedCode(false);
      } catch (error) {
        console.error("Failed to copy:", error);
      }
    };
  

   // Function to handle form submission and send a fetch request
  const createOrganization = async () => {
    const company_code = companyName.replace(/\s+/g, ' ').trim();
    const formData = {
      company_name: companyName,
      main_contact: mainContact,
      company_code,
      website,
      email,
      phone,
    };

    console.log("formData= ", formData);
    // Send the data as a POST request
    try {
      const response = await fetch(`${config.apiBaseUrl}/org`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const formDataClinic = {
          clinic_name: "default",
          clinic_code: "11",
          main_contact: mainContact,
          website: "",
          email,
          phone,
          image: "",
          location: ""
        };
        console.log("formDataClinic= ", formDataClinic);
        const responseClinic = await fetch(`${config.apiBaseUrl}/org/${company_code}/clinics`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataClinic),
        });
        // company_code

        if (responseClinic.ok) {
          console.log("Form submitted successfully!");
          const data = await response.json();
          console.log("data= ", data);
          handleOnCreatingClinicComplete(data.id);
        }

        // Handle success response (e.g., show success message, redirect, etc.)
        
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case "companyName":
          setCompanyName(value);
          break;
        case "mainContact":
          setMainContact(value);
          break;
        case "website":
          setWebsite(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "phone":
          setPhone(value);
          break;
        default:
          break;
      }
    };


  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowEmbedCode(false);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <div className="onboarding-container">
      <form className="onboarding-form">
        <h1 style={{ textAlign: "left" }}>Onboarding</h1>
        <div className="form-row">
          <div className="form-group">
            <input
              className="custom-input"
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
              value={companyName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="custom-input"
              type="text"
              id="mainContact"
              name="mainContact"
              placeholder="Main Contact"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              className="custom-input"
              type="url"
              id="website"
              name="website"
              placeholder="Website"
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="custom-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group" style={{ textAlign: "left" }}>
            <input
              type="file"
              id="uploadImage"
              name="uploadImage"
              className="upload-input"
              onChange={handleInputChange}
            />
            <label htmlFor="uploadImage" className="upload-button">
              Upload Image
            </label>
          </div>
          <div className="form-group">
            <input
              className="custom-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="embed-section">
        {!showEmbedCode && (
          <div
            className="generate-button"
            type="button"
            onClick={generateEmbedCode}
          >
            Code
          </div>
        )}
          {showEmbedCode && (
            <div style={{display: 'flex', flexDirection: 'column'}}>
             <div style={{ marginBottom: '3rem'}}>
              <div className="copy-container">
                <pre className="copy-text">{embedCode}</pre>
                <div className="copy-button" onClick={copyToClipboard}>
                  {copied ? "✔" : "📋"}
                </div>
              </div>
              <div style={{ fontSize: " 10px", textAlign: "left", margin: '10px 2px' }}>
                To add a Book Online button to your website like the. one below,
                copy and paste this embed code. You can use this code in any
                HTML web page, or even in online services like your LinkedIn
                profile.
              </div>
             </div>
             <div>
             <div className="copy-container">
                <pre className="copy-text">{embedUrl}</pre>
                <div className="copy-button" onClick={copyUrlToClipboard}>
                  {copiedUrl ? "✔" : "📋"}
                </div>
              </div>
              <div style={{ fontSize: " 10px", textAlign: "left", margin: '10px 2px'  }}>
              To add your book online links without a button (for simple
                  integration with Wordpress for example) just copy and paste
                  this URL.
              </div>

             </div>
            
            </div>
          )}
        </div>

{/* create a base clinic, create org code based on name */}

        <div
          style={{ marginTop: "3rem" }}
          className="default-button"
          onClick={() => {
            createOrganization(); // Call the second function
          }}
        >
          Next
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
