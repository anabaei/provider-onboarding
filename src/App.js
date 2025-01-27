import React, { useState } from 'react';
import './App.css';
import OnboardingForm from './components/onboarding/OnboardingForm';
import OnboardingStep2 from './components/onboarding2/OnboardingStep2';
import Services from './components/services/Services';
import Treatments from './components/treatments/Treatments';
import WeeklyAvailability from './components/availability/WeeklyAvailability';
import Restriction from './components/restriction/Restriction';
import BookingRestrict from './components/booking-restrict/bookingRestrict'
import '@ant-design/v5-patch-for-react-19';
import Summary from './components/summary/Summary';

const App = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState('');
    const [serviceSelection, setServiceSelection] = useState({

    })
   

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

    const onHandleSelection = (selection) =>{
        setServiceSelection(selection);
    }

    const handleEdit = () => {
        // Logic to go back to the first step
    };



   const steps = [
          {
            "type": "confirmation",
            "message": "SMS Confirmation 24 hours Advance"
          },
          {
            "type": "reminder",
            "message": "SMS Confirmation 48 hours Advance"
          },
          {
            "type": "confirmation",
            "message": "Email Confirmation 24 hours Advance"
          },
          {
            "type": "reminder",
            "message": "24 hours before appointment"
          },
          {
            "type": "confirmation",
            "message": "Your profile information has been updated."
          },
          {
            "type": "reminder",
            "message": "1 hours before appointment"
          },
          {
            "type": "confirmation",
            "message": "You have successfully subscribed to our newsletter."
          },
          {
            "type": "reminder",
            "message": "6 hours before appointment."
          },
          {
            "type": "confirmation",
            "message": "Your test results are available online."
          }
        ]
      
      

    return (
        <div className="App">
            {step === 1 && <OnboardingForm onNext={nextStep} />}
            {step === 2 && <OnboardingStep2 onBack={prevStep} onNext={nextStep} />}
            {step === 3 && <Services onBack={prevStep}  onNext={handleServiceSelect} />}
            {step === 4 && <Treatments selectedService={selectedService} onBack={prevStep} onNext={nextStep} />}
            {step === 5 && <WeeklyAvailability onBack={prevStep} onNext={nextStep} />}
            {step === 6 && <Restriction onBack={prevStep} onNext={nextStep} />}
            {step === 7 && <BookingRestrict onBack={prevStep} onNext={nextStep} />}
            {step === 8 && <Summary onBack={prevStep} onNext={nextStep}  onHandleSelection={onHandleSelection} steps={steps}/>}
        </div>
    );
};

export default App;
