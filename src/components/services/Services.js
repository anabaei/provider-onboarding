import React, { useState } from 'react';
import './Services.css';
import { useParams } from "react-router-dom";

const servicesList = [
    'Chiropractor',
    'Massage',
    'Mental Health',
    'Physical Therapy',
    'Acupuncture',
    'Nutrition',
    'Yoga',
    'Nutrition',
];

const Services = ({ onBack, onNext }) => {
    const [selectedServices, setSelectedServices] = useState([]);
    const { clinicId } = useParams();
    const toggleService = (service) => {
        
        setSelectedServices(prevState =>
            prevState.includes(service)
                ? prevState.filter(s => s !== service)
                : [...prevState, service]
        );
    };

    const handleNext = () => {
        if (selectedServices.length > 0) {
            onNext(selectedServices, clinicId);
        }
    };

    return (
        <div className="services-container">
            <h1>ONBOARDING</h1>

            <h3 style={{margin: '5rem 0px 0px 0p'}}>STEP: 3</h3>
            <p style={{margin: '0px 0px 3rem 0px'}}>What services does your clinic provide:</p>
            <div className="services-grid">
                {servicesList.map(service => (
                    <div
                        key={service}
                        className={`service-item ${selectedServices.includes(service) ? 'selected' : ''}`}
                        onClick={() => toggleService(service)}
                    >
                        {service}
                    </div>
                ))}
            </div>
            <div className="broadcumb" style={{marginTop: '4rem'}}>
                
            <div className="default-button" onClick={onBack}>Back</div>
            <div className="default-button" onClick={handleNext}>Next</div>
            <div></div>
            </div>
           
        </div>
    );
};

export default Services;
