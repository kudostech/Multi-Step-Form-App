import React, { useState } from 'react';
import { useFormData } from '../context/FormContext';

const Step2 = ({ onNext, onBack }) => {
  const { formData, setFormData } = useFormData();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleNext = () => {
    const newErrors = {};
    if (!formData.address?.trim()) newErrors.address = 'Address is required';
    if (!formData.city?.trim()) newErrors.city = 'City is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-4">Step 2: Address Info</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address || ''}
          onChange={handleChange}
          placeholder="Enter your address"
          className={`mt-1 p-2 block w-full border rounded-md ${
            errors.address ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-xs mt-1">{errors.address}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          name="city"
          value={formData.city || ''}
          onChange={handleChange}
          placeholder="Enter your city"
          className={`mt-1 p-2 block w-full border rounded-md ${
            errors.city ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.city && (
          <p className="text-red-500 text-xs mt-1">{errors.city}</p>
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
