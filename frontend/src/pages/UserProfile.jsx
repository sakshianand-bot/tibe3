import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const UserProfile = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    // Navigate to login page will be handled by route protection
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #000000 100%)' }}>
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-white">User Profile</h2>
          <p className="mt-2 text-sm text-gray-400">Welcome back, {user?.name}!</p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-white font-medium">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Role</p>
              <p className="text-white font-medium capitalize">{user?.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Account Status</p>
              <p className="text-green-400 font-medium">Active</p>
            </div>
            {user?.lastLogin && (
              <div>
                <p className="text-sm text-gray-400">Last Login</p>
                <p className="text-white font-medium">
                  {new Date(user.lastLogin).toLocaleString()}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
