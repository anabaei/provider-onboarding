import React, { useState } from 'react';
import './Services.css';

const servicesList = [
    'Chiropractor',
    'Massage',
    'Mental Health',
    'Physical Therapy',
    'Acupuncture',
    'Nutrition',
    'Yoga',
    'Personal Training'
];

const Services = ({ onBack, onNext }) => {
    const [selectedServices, setSelectedServices] = useState([]);

    const toggleService = (service) => {
        console.log(service);
        setSelectedServices(prevState =>
            prevState.includes(service)
                ? prevState.filter(s => s !== service)
                : [...prevState, service]
        );
    };

    const handleNext = () => {
        if (selectedServices.length > 0) {
            onNext(selectedServices[0]);
        }
    };

    return (
        <div className="services-container">
            <div style={{alignContent: 'left'}}>What services does your clinic do</div>
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
            <div className="broadcumb">
                
            <div className="default-button" onClick={onBack}>Back</div>
            <div className="default-button" onClick={handleNext}>Next</div>
            <div></div>
            </div>
           
        </div>
    );
};

export default Services;
