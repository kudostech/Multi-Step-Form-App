import React, { useState } from 'react';
import { useFormData } from '../context/FormContext';

const Step1 = ({ onNext }) => {
  const { formData, setFormData } = useFormData();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // clear error as user types
  };

  const handleNext = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onNext();
  };

  return (
    <div className="text-black">
      <h2 className="text-xl font-semibold mb-4">Step 1: Personal Info</h2>

      {/* Full Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="Enter your full name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`mt-1 p-2 block w-full border rounded-md ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          placeholder="Enter your email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`mt-1 p-2 block w-full border rounded-md ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <button
        onClick={handleNext}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
