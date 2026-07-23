import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

const BookConsultation = ({ isModalOpen: propIsModalOpen, setIsModalOpen: propSetIsModalOpen }) => {
  const navigate = useNavigate();
  
  // Use internal state if props not provided (for route usage)
  const [internalIsModalOpen, setInternalIsModalOpen] = useState(true);
  const isModalOpen = propIsModalOpen !== undefined ? propIsModalOpen : internalIsModalOpen;
  const setIsModalOpen = propSetIsModalOpen || setInternalIsModalOpen;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [payNow, setPayNow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayNow = () => {
    if (payNow) {
      // Store form data in localStorage or state management if needed
      localStorage.setItem('consultationData', JSON.stringify(formData));
      // Redirect to Stripe payment URL in new tab
      window.open('https://buy.stripe.com/eVq8wQabw4rGalLaa9aR201', '_blank');
    } else {
      alert('Please check the PAY NOW checkbox to proceed to payment.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate(ROUTES.PUBLIC.HOME);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (payNow) {
      handlePayNow();
    } else {
      // Handle form submission without payment
      alert('Consultation request submitted successfully!');
      setIsModalOpen(false);
      navigate(ROUTES.PUBLIC.HOME);
    }
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-4xl flex border-2 border-sky-100 shadow-2xl relative overflow-hidden rounded-lg">
        {/* Close button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Section (Left) */}
        <div className="w-1/2 flex-shrink-0 relative hidden md:block" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #000000 100%)' }}>
          <img
            src="/images/Tiberius_Logo-removebg-preview.png"
            alt="Consultation"
            className="absolute inset-0 w-full h-full object-contain p-12"
          />
        </div>

        {/* Form Section (Right) */}
        <div className="w-full md:w-1/2 p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Consultation</h2>
            <p className="text-gray-600 text-sm">
              Fill in your details to schedule a consultation with our experts
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name & Last Name in grid */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-xs font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 transition-all duration-200"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-xs font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 transition-all duration-200"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-1">
                Email ID
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-white border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-sky-500 transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 text-xs font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="4"
                className="w-full bg-white border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 transition-all duration-200 resize-none"
                placeholder="Tell us about your consultation needs..."
              />
            </div>

            {/* PAY NOW Checkbox */}
            <div className="flex items-center space-x-2 pt-1 p-3 bg-gray-50 border border-gray-200">
              <input
                type="checkbox"
                id="payNow"
                checked={payNow}
                onChange={(e) => setPayNow(e.target.checked)}
                className="w-4 h-4 border border-gray-300 bg-white text-blue-600 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
              />
              <label
                htmlFor="payNow"
                className="text-gray-900 text-sm font-semibold cursor-pointer select-none"
              >
                <span className="text-gray-700">PAY NOW</span>
                <span className="ml-1 text-blue-600 font-bold">($100)</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full text-white font-bold py-3 text-sm transition-all duration-300 shadow-lg"
              style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #000000 100%)' }}
            >
              {payNow ? 'Proceed to Payment →' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
