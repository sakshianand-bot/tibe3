import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';
import { authAPI } from '../utils/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isAdmin: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
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
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
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
      const loginMethod = formData.isAdmin ? authAPI.adminLogin : authAPI.userLogin;
      const data = await loginMethod(formData.email, formData.password);

      if (data.success) {
        const { user, token } = data.data;
        
        if (formData.isAdmin) {
          authAPI.setAdminAuthData(token, user);
        } else {
          authAPI.setAuthData(token, user);
        }
        
        // Show success message
        alert(`${formData.isAdmin ? 'Admin' : 'User'} login successful!`);
        
        // Redirect based on role
        if (formData.isAdmin) {
          navigate('/admin/dashboard'); // You'll need to create this route
        } else {
          navigate(ROUTES.PUBLIC.HOME);
        }
      } else {
        setErrors({ general: data.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ 
        general: error.message || 'Network error. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #000000 100%)' }}>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold" style={{ color: '#ffffff' }}>
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm" style={{ color: '#9ca3af' }}>
            Or{' '}
            <Link to={ROUTES.PUBLIC.SIGN_UP} className="font-medium" style={{ color: '#60a5fa' }}>
              create a new account
            </Link>
          </p>
        </div>
        
        
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
            User Login
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
            Admin Login
          </button>
        </div>

        
        {errors.general && (
          <div className="bg-red-500 bg-opacity-10 border border-red-500 text-red-200 px-4 py-3 rounded-md">
            {errors.general}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
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
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`mt-1 appearance-none relative block w-full px-3 py-2 border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm`}
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-400">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium" style={{ color: '#60a5fa' }}>
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(to right, #0ea5e9, #06b6d4)' }}
            >
              {isLoading ? 'Signing in...' : `Sign in as ${formData.isAdmin ? 'Admin' : 'User'}`}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm" style={{ color: '#9ca3af' }}>
              Don't have an account?{' '}
              <Link 
                to={ROUTES.PUBLIC.SIGN_UP} 
                className="font-medium hover:underline transition-all duration-300"
                style={{ color: '#60a5fa' }}
              >
                Sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
