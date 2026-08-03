import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.PUBLIC.HOME);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-50 p-4">
      <div className="bg-white p-8 max-w-md w-full border border-gray-200 shadow-2xl text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 mb-6">
          <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        
        {/* Message */}
        <p className="text-gray-600 mb-2">Your payment has been successfully processed.</p>
        <p className="text-gray-600 mb-8">We will contact you shortly to schedule your consultation.</p>

        {/* Consultation Details */}
        <div className="bg-sky-50 border border-sky-200 p-6 mb-8">
          <p className="text-sky-700 font-medium mb-2">Consultation Fee Paid</p>
          <p className="text-2xl font-bold text-gray-900">$100.00</p>
        </div>

        {/* Go Home Button */}
        <button
          onClick={handleGoHome}
          className="w-full bg-sky-600 text-white font-semibold py-3.5 hover:bg-sky-700 transition-all duration-300 shadow-lg"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
