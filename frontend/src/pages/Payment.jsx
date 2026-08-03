import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Payment processing logic would go here
    // For now, we'll just redirect back to home after a simulated payment
    setTimeout(() => {
      alert('Payment successful! Thank you for your consultation booking.');
      navigate(ROUTES.PUBLIC.HOME);
    }, 1000);
  };

  const handleCancel = () => {
    navigate(ROUTES.PUBLIC.BOOKCONSULTATION);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-slate-700/50 shadow-2xl relative overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Payment</h1>
          <p className="text-slate-400 text-sm">Complete your consultation booking</p>
        </div>
        
        {/* Amount Display */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 mb-6 border border-blue-500/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-300 font-medium">Consultation Fee</span>
            <span className="text-3xl font-bold text-white">$100.00</span>
          </div>
          <p className="text-sm text-slate-400">One-time consultation booking fee</p>
        </div>

        <div className="space-y-4 mb-6">
          {/* Payment Method */}
          <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50">
            <p className="text-slate-300 text-sm font-medium mb-3">Payment Method</p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-white font-medium">Credit/Debit Card</span>
            </div>
          </div>

          {/* Card Details */}
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
            />
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3.5 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 mb-3"
        >
          Pay $100.00
        </button>

        <button
          onClick={handleCancel}
          className="w-full bg-slate-800/50 border border-slate-600/50 text-slate-300 font-medium py-3 rounded-xl hover:bg-slate-700/50 hover:text-white transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Payment;
