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
            <h1>Select Services</h1>
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
            <button type="button" onClick={onBack}>Back</button>
            <button type="button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default Services;
