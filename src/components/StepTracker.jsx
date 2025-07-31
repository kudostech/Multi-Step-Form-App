// components/StepTracker.jsx
import React from 'react';

const steps = ['Basic Info', 'Address Info', 'Contact Info', 'Confirmation'];

const StepTracker = ({ currentStep }) => {
  return (
    <div className="flex justify-between mb-6">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isCompleted = currentStep > stepNumber;
        const isActive = currentStep === stepNumber;

        return (
          <div key={label} className="flex-1 flex flex-col items-center relative">
            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold z-10
                ${isCompleted ? 'bg-green-500 text-white' :
                  isActive ? 'bg-blue-600 text-white' :
                  'bg-gray-300 text-gray-700'}`}
            >
              {stepNumber}
            </div>

            {/* Label */}
            <div className="text-xs mt-1 text-center text-gray-700">{label}</div>

            {/* Line */}
            {index < steps.length - 1 && (
              <div className="absolute top-4 right-0 w-full h-0.5 bg-gray-300 z-0">
                <div
                  className={`h-0.5 transition-all duration-300 ${
                    isCompleted ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                  style={{ width: '100%' }}
                ></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepTracker;
