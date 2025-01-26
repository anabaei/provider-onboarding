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
            <form className="onboarding-form">
            <h1 style={{textAlign: 'left'}}>Onboarding</h1>
                <div className="form-row">
                    <div className="form-group">
                        <input className='custom-input' type="text" id="companyName" name="companyName" placeholder="Company Name" />
                    </div>
                    <div className="form-group">
                        <input className='custom-input' type="text" id="mainContact" name="mainContact" placeholder="Main Contact" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <input className='custom-input' type="url" id="website" name="website" placeholder="Website" />
                    </div>
                    <div className="form-group">
                        <input className='custom-input' type="email" id="email" name="email" placeholder="Email" />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <input  type="file" id="uploadImage" name="uploadImage" className="upload-input" />
                        <label htmlFor="uploadImage" className="upload-button">Upload Image</label>
                    </div>
                    <div className="form-group">
                        <input className='custom-input' type="tel" id="phone" name="phone" placeholder="Phone" />
                    </div>
                </div>
                
                <div className="embed-section">
                    <div className="generate-button" type="button" onClick={generateEmbedCode}>Code</div>
                    {showEmbedCode && (
                        <textarea readOnly value={embedCode} className="embed-code"></textarea>
                    )}
                </div>
                
                <div style={{marginTop: '3rem'}} className="default-button"onClick={onNext}>Next</div>
            </form>
        </div>
    );
};

export default OnboardingForm;
