import React, { useState } from 'react';
import { useFormData } from '../context/FormContext';

const Step4 = ({ onBack }) => {
  const { formData } = useFormData();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Simulate form submission (e.g., sending to API)
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center text-black">
        <h2 className="text-2xl font-bold mb-4">🎉 Thank You!</h2>
        <p className="text-gray-700">Your information has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-4">Step 4: Review & Submit</h2>

      <div className="mb-6 space-y-2 text-sm">
        <div><strong>Name:</strong> {formData.name}</div>
        <div><strong>Email:</strong> {formData.email}</div>
        <div><strong>Address:</strong> {formData.address}</div>
        <div><strong>City:</strong> {formData.city}</div>
        <div><strong>Country:</strong> {formData.country}</div>
        <div><strong>Zip Code:</strong> {formData.zip}</div>
        <div><strong>Phone:</strong> {formData.phone}</div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
