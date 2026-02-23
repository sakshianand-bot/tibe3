import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ROUTES } from '../routes/routes.config';

const AdminDashboard = () => {
  const { adminUser, adminLogout } = useAuth();

  const handleLogout = () => {
    adminLogout();
    // Navigate to login page will be handled by route protection
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #000000 100%)' }}>
      {/* Header */}
      <header className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <span className="text-gray-400">Welcome, {adminUser?.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">Admin</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Stats Cards */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-sky-400">0</p>
            <p className="text-sm text-gray-400 mt-2">Registered users</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">Active Sessions</h3>
            <p className="text-3xl font-bold text-green-400">0</p>
            <p className="text-sm text-gray-400 mt-2">Currently active</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">System Status</h3>
            <p className="text-3xl font-bold text-green-400">Online</p>
            <p className="text-sm text-gray-400 mt-2">All systems operational</p>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">User Management</h3>
            <div className="space-y-2">
              <Link
                to={ROUTES.ADMIN.USERS}
                className="block w-full text-left bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Manage Users
              </Link>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                View User Activity
              </button>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">System Settings</h3>
            <div className="space-y-2">
              <Link
                to={ROUTES.ADMIN.SETTINGS}
                className="block w-full text-left bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                System Configuration
              </Link>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Security Settings
              </button>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-4">Reports</h3>
            <div className="space-y-2">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Generate Report
              </button>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                View Analytics
              </button>
            </div>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <div>
                <p className="text-white">System initialized</p>
                <p className="text-sm text-gray-400">Just now</p>
              </div>
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">Success</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-700">
              <div>
                <p className="text-white">Admin login</p>
                <p className="text-sm text-gray-400">{new Date().toLocaleString()}</p>
              </div>
              <span className="text-xs bg-sky-600 text-white px-2 py-1 rounded">Auth</span>
            </div>
          </div>
        </div>

        {/* Admin Info */}
        <div className="mt-8 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Admin Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Name</p>
              <p className="text-white">{adminUser?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-white">{adminUser?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Role</p>
              <p className="text-white capitalize">{adminUser?.role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Account Status</p>
              <p className="text-green-400">Active</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
