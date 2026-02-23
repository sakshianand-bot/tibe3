import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';
import { authAPI } from '../utils/api';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
    adminSecret: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const minLength = formData.isAdmin ? 8 : 6;
      if (formData.password.length < minLength) {
        newErrors.password = `Password must be at least ${minLength} characters`;
      }
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (formData.isAdmin && !formData.adminSecret) {
      newErrors.adminSecret = 'Admin secret is required for admin registration';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      const signupMethod = formData.isAdmin ? authAPI.adminSignup : authAPI.userSignup;
      const signupData = formData.isAdmin 
        ? [formData.name, formData.email, formData.password, formData.adminSecret]
        : [formData.name, formData.email, formData.password];
      
      const data = await signupMethod(...signupData);

      if (data.success) {
        const { user, token } = data.data;
        
        if (formData.isAdmin) {
          authAPI.setAdminAuthData(token, user);
          alert('Admin account created successfully!');
          navigate('/admin/dashboard'); // You'll need to create this route
        } else {
          authAPI.setAuthData(token, user);
          alert('Account created successfully!');
          navigate(ROUTES.PUBLIC.HOME);
        }
      } else {
        setErrors({ general: data.message || 'Signup failed' });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ 
        general: error.message || 'Network error. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #000000 100%)' }}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold" style={{ color: '#ffffff' }}>
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm" style={{ color: '#9ca3af' }}>
            Or{' '}
            <Link to={ROUTES.PUBLIC.LOGIN} className="font-medium" style={{ color: '#60a5fa' }}>
              sign in to your existing account
            </Link>
          </p>
        </div>

        {/* User/Admin Toggle */}
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, isAdmin: false })}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              !formData.isAdmin 
                ? 'bg-sky-600 text-white' 
                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
            }`}
          >
            User Sign Up
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, isAdmin: true })}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              formData.isAdmin 
                ? 'bg-sky-600 text-white' 
                : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
            }`}
          >
            Admin Sign Up
          </button>
        </div>

        {/* General Error Message */}
        {errors.general && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-200 px-4 py-3 rounded-md">
            {errors.general}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password {formData.isAdmin && <span className="text-red-400">(min 8 chars)</span>}
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className={`mt-1 appearance-none relative block w-full px-3 py-2 pr-10 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('password')}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  className={`mt-1 appearance-none relative block w-full px-3 py-2 pr-10 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('confirmPassword')}
                  className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Admin Secret Field */}
            {formData.isAdmin && (
              <div>
                <label htmlFor="adminSecret" className="block text-sm font-medium text-gray-300">
                  Admin Secret Key
                </label>
                <input
                  id="adminSecret"
                  name="adminSecret"
                  type="password"
                  required={formData.isAdmin}
                  className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                    errors.adminSecret ? 'border-red-500' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                  placeholder="Enter admin secret key"
                  value={formData.adminSecret}
                  onChange={handleChange}
                />
                {errors.adminSecret && (
                  <p className="mt-1 text-sm text-red-400">{errors.adminSecret}</p>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center">
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              required
              className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
            />
            <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-300">
              I agree to the{' '}
              <Link to={ROUTES.PUBLIC.TERMS_AND_CONDITIONS} className="font-medium" style={{ color: '#60a5fa' }}>
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link to={ROUTES.PUBLIC.PRIVACY_POLICY} className="font-medium" style={{ color: '#60a5fa' }}>
                Privacy Policy
              </Link>
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(to right, #0ea5e9, #06b6d4)' }}
            >
              {isLoading ? 'Creating account...' : `Create ${formData.isAdmin ? 'Admin' : 'User'} Account`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
