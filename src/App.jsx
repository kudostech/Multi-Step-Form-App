import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import StepTracker from './components/StepTracker';
import { FormProvider } from './context/FormContext';

const App = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={nextStep} />;
      case 2:
        return <Step2 onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <Step3 onNext={nextStep} onBack={prevStep} />;
      case 4:
        return <Step4 onBack={prevStep} />;
      default:
        return <Step1 onNext={nextStep} />;
    }
  };

  return (
    <FormProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">User Onboarding</h1>

          {/* Step Tracker */}
          <StepTracker currentStep={step} />

          {renderStep()}
        </div>
      </div>
    </FormProvider>
  );
};

export default App;
