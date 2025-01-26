import React from 'react';
import './Treatments.css';

const Treatments = ({ selectedService, onBack, onNext }) => {
    const treatmentsList = [
        { name: 'Treatment 1', price: '$100', duration: '1 hour', specialist: 'PIC' },
        { name: 'Treatment 2', price: '$450', duration: '30 minutes', specialist: 'GP' },
        { name: 'Treatment 3', price: '$300', duration: '1 hour', specialist: 'PIC' },
        { name: 'Treatment 4', price: '$50', duration: '30 minutes', specialist: 'GP' }
    ];

    return (
        <div className="treatments-container">
            <h1>{selectedService} Treatments</h1>
            <div className="treatments-table-container">
                <table className="treatments-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Duration</th>
                            <th>Specialist</th>
                        </tr>
                    </thead>
                    <tbody>
                        {treatmentsList.map((treatment, index) => (
                            <tr key={index}>
                                <td>{treatment.name}</td>
                                <td>{treatment.price}</td>
                                <td>{treatment.duration}</td>
                                <td>{treatment.specialist}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="broadcumb">
                <div className="default-button" onClick={onBack}>Back</div>
                <div className="default-button" onClick={onNext}>Next</div>
                <div></div>
            </div>
        </div>
    );
};

export default Treatments;
