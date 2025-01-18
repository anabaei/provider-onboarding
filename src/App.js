import React, { useState } from 'react';
import './App.css';
import OnboardingForm from './components/onboarding/OnboardingForm';
import OnboardingStep2 from './components/onboarding/OnboardingStep2';
import Services from './components/services/Services';

const App = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div className="App">
            {step === 3 && <OnboardingForm onNext={nextStep} />}
            {step === 2 && <OnboardingStep2 onBack={prevStep} onNext={nextStep} />}
            {step === 1 && <Services onBack={prevStep} onNext={nextStep} />}
        </div>
    );
};

export default App;
