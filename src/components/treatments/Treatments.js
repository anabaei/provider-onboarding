import React from 'react';
import './Treatments.css';

const Treatments = ({ selectedService, onBack }) => {
    const treatmentsList = [
        { name: 'Treatment 1', price: '$100' },
        { name: 'Treatment 2', price: '$150' },
        { name: 'Treatment 3', price: '$200' },
        { name: 'Treatment 4', price: '$250' }
    ];

    return (
        <div className="treatments-container">
            <h1>{selectedService} Treatments</h1>
            <table className="treatments-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {treatmentsList.map((treatment, index) => (
                        <tr key={index}>
                            <td>{treatment.name}</td>
                            <td>{treatment.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={onBack}>Back</button>
        </div>
    );
};

export default Treatments;
