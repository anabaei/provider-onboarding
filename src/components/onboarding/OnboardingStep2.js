import React, { useState } from 'react';
import './OnboardingStep2.css';

const OnboardingStep2 = ({ onBack, onNext }) => {
    const [modalContent, setModalContent] = useState(null);
    const [row1Data, setRow1Data] = useState([]);
    const [row2Data, setRow2Data] = useState([]);

    const openModal = (row) => {
        setModalContent(row);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const handleAdd = (row, data) => {
        if (row === 1) {
            setRow1Data([...row1Data, data]);
        } else {
            setRow2Data([...row2Data, data]);
        }
        closeModal();
    };

    return (
        <div className="onboarding-step2-container">
            <h1>Onboarding Step 2</h1>
            <div className="form-row">
                {row1Data.map((item, index) => (
                    <div key={index} className="form-group">
                        <span>{item.name} - {item.email} - {item.phone}</span>
                        {item.image && <img src={URL.createObjectURL(item.image)} alt="uploaded" />}
                    </div>
                ))}
                <button className="add-button" onClick={() => openModal(1)}>+</button>
            </div>
            <div className="form-row">
                {row2Data.map((item, index) => (
                    <div key={index} className="form-group">
                        <span>{item.name} - {item.email} - {item.phone}</span>
                    </div>
                ))}
                <button className="add-button" onClick={() => openModal(2)}>+</button>
            </div>

            {modalContent && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add Details</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const data = {
                                name: e.target.name.value,
                                email: e.target.email.value,
                                phone: e.target.phone.value,
                                image: e.target.image?.files[0]
                            };
                            handleAdd(modalContent, data);
                        }}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                            {modalContent === 1 && (
                                <div className="form-group">
                                    <label htmlFor="image">Upload Image:</label>
                                    <input type="file" id="image" name="image" />
                                </div>
                            )}
                            <button type="submit">Add</button>
                            <button type="button" onClick={closeModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
            <button type="button" onClick={onBack}>Back</button>
            <button type="button" onClick={onNext}>Next</button>
        </div>
    );
};

export default OnboardingStep2;
