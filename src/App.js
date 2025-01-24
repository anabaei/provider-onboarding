import React, { useState } from 'react';
import './App.css';
import OnboardingForm from './components/onboarding/OnboardingForm';
import OnboardingStep2 from './components/onboarding2/OnboardingStep2';
import Services from './components/services/Services';
import Treatments from './components/treatments/Treatments';
import WeeklyAvailability from './components/availability/WeeklyAvailability';
import Restriction from './components/restriction/Restriction';

const App = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleServiceSelect = (service) => {
        setSelectedService(service);
        nextStep();
    };

    return (
        <div className="App">
            {step === 5 && <OnboardingForm onNext={nextStep} />}
            {step === 2 && <OnboardingStep2 onBack={prevStep} onNext={nextStep} />}
            {step === 3 && <Services onBack={prevStep} onNext={handleServiceSelect} />}
            {step === 4 && <Treatments selectedService={selectedService} onBack={prevStep} onNext={nextStep} />}
            {step === 5 && <WeeklyAvailability onBack={prevStep} onNext={nextStep} />}
            {step === 1 && <Restriction onBack={prevStep} onNext={nextStep} />}
        </div>
    );
};

export default App;
