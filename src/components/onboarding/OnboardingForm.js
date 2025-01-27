import React, { useState } from "react";
import "./OnboardingForm.css";

const OnboardingForm = ({ onNext }) => {
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
            />
          </div>
          <div className="form-group">
            <input
              className="custom-input"
              type="text"
              id="mainContact"
              name="mainContact"
              placeholder="Main Contact"
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
            />
          </div>
          <div className="form-group">
            <input
              className="custom-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
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

        <div
          style={{ marginTop: "3rem" }}
          className="default-button"
          onClick={onNext}
        >
          Next
        </div>
      </form>
    </div>
  );
};

export default OnboardingForm;
