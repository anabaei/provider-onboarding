import React, { useState } from 'react';
import './OnboardingForm.css';

const OnboardingForm = ({ onNext }) => {
    const [embedCode, setEmbedCode] = useState('');
    const [showEmbedCode, setShowEmbedCode] = useState(false);

    const generateEmbedCode = () => {
        const code = `<iframe src="${window.location.href}" width="600" height="400"></iframe>`;
        setEmbedCode(code);
        setShowEmbedCode(!showEmbedCode);
    };

    return (
        <div className="onboarding-container">
            <h1>Onboarding</h1>
            <form className="onboarding-form">
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" id="companyName" name="companyName" placeholder="Company Name" />
                    </div>
                    <div className="form-group">
                        <input type="text" id="mainContact" name="mainContact" placeholder="Main Contact" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <input type="url" id="website" name="website" placeholder="Website" />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <input type="tel" id="phone" name="phone" placeholder="Phone" />
                    </div>
                    <div className="form-group">
                        <input type="file" id="uploadImage" name="uploadImage" className="upload-input" />
                        <label htmlFor="uploadImage" className="upload-button">Choose File</label>
                    </div>
                </div>
                
                <div className="embed-section">
                    <button type="button" onClick={generateEmbedCode}>Generate Embed Code</button>
                    {showEmbedCode && (
                        <textarea readOnly value={embedCode} className="embed-code"></textarea>
                    )}
                </div>
                
                <button type="button" onClick={onNext}>Next</button>
            </form>
        </div>
    );
};

export default OnboardingForm;
