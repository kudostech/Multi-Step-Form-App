import React, { useState } from 'react';
import { useFormData } from '../context/FormContext';

const Step3 = ({ onNext, onBack }) => {
  const { formData, setFormData } = useFormData();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleNext = () => {
    const newErrors = {};
    if (!formData.country?.trim()) newErrors.country = 'Country is required';
    if (!formData.zip?.trim()) newErrors.zip = ' Postcode is required';
    if (!formData.phone?.trim()) newErrors.phone = 'Phone number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-4">Step 3: Contact Info</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country || ''}
          onChange={handleChange}
          placeholder="Enter your country"
          className={`mt-1 p-2 block w-full border rounded-md ${
            errors.country ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">{errors.country}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Postcode</label>
        <input
          type="text"
          name="zip"
          value={formData.zip || ''}
          onChange={handleChange}
          placeholder="Enter your Postcode"
          className={`mt-1 p-2 block w-full border rounded-md ${
            errors.zip ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.zip && (
          <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className={`mt-1 p-2 block w-full border rounded-md ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
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

export default Step3;
