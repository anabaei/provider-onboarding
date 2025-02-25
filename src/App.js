import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Link,  useNavigate } from 'react-router-dom';  // Import necessary routing components
import './App.css';
import OnboardingForm from './components/onboarding/OnboardingForm';
import OnboardingStep2 from './components/onboarding2/OnboardingStep2';
import Services from './components/services/Services';
import Treatments from './components/treatments/Treatments';
import WeeklyAvailability from './components/availability/WeeklyAvailability';
import Restriction from './components/restriction/Restriction';
import BookingRestrict from './components/booking-restrict/bookingRestrict';
import Summary from './components/summary/Summary';

const App = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [serviceSelection, setServiceSelection] = useState({});
    const navigate = useNavigate();

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleServiceSelect = (service, clinicId) => {
        setSelectedService(service);
        
        navigate(`/treatments/${clinicId}`);
    };

    const onHandleSelection = (selection) => {
        setServiceSelection(selection);
    };
    const handleOnCreatingClinicComplete = (id) => {
        // Correct template literal usage
        navigate(`/clinics/${id}`);  // This will navigate to the /clinics/{id} route
    };
    
    const goToTreatmentPage = (clinicId) => {
        navigate(`/treatments/${clinicId}`);
    };

    const goToServicePage = (clinicId) => {
        navigate(`/services/${clinicId}`);
    };
    const goToWeeklyAvailability = (clinicId) => {
        navigate(`/availability/${clinicId}`);
    };

    const handleEdit = () => {
        // Logic to go back to the first step
    };

    const steps = [
        {
            type: "confirmation",
            message: "SMS Confirmation 24 hours Advance"
        },
        {
            type: "reminder",
            message: "SMS Confirmation 48 hours Advance"
        },
        {
            type: "confirmation",
            message: "Email Confirmation 24 hours Advance"
        },
        {
            type: "reminder",
            message: "24 hours before appointment"
        },
        {
            type: "confirmation",
            message: "Your profile information has been updated."
        },
        {
            type: "reminder",
            message: "1 hour before appointment"
        },
        {
            type: "confirmation",
            message: "You have successfully subscribed to our newsletter."
        },
        {
            type: "reminder",
            message: "6 hours before appointment."
        },
        {
            type: "confirmation",
            message: "Your test results are available online."
        }
    ];

    return (
    
            <div className="App">
                {/* Define routes with dynamic parameters */}
                <Routes>
                    {/* Use :id to capture the dynamic parameter */}
                    <Route path="/" element={<OnboardingForm handleOnCreatingClinicComplete={handleOnCreatingClinicComplete} />} />

                    {/* Other routes */}
                    <Route path="/clinics/:clinicId" element={<OnboardingStep2 onBack={prevStep} goToServicePage={goToServicePage} />} />

                    <Route path="/services/:clinicId" element={<Services onBack={prevStep} onNext={handleServiceSelect} />} />
                    <Route path="/treatments/:clinicId" element={<Treatments selectedService={selectedService} onBack={prevStep} goToWeeklyAvailability={goToWeeklyAvailability} />} />
                    <Route path="/availability/:clinicId" element={<WeeklyAvailability onBack={prevStep} onNext={nextStep} />} />
                    <Route path="/restrictions" element={<Restriction onBack={prevStep} onNext={nextStep} />} />
                    <Route path="/booking-restrictions" element={<BookingRestrict onBack={prevStep} onNext={nextStep} />} />
                    <Route path="/summary" element={<Summary onBack={prevStep} onNext={nextStep} onHandleSelection={onHandleSelection} steps={steps} />} />
                </Routes>
            </div>
     
    );
};

export default App;
