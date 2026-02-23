export const API_BASE_URL = 'http://localhost:8080/api/v1';

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add authorization header if token exists
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || data.message || 'Request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const authAPI = {
  // User Authentication
  userLogin: async (email, password) => {
    return await apiCall('/auth/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  userSignup: async (name, email, password) => {
    return await apiCall('/auth/user/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  // Admin Authentication
  adminLogin: async (email, password) => {
    return await apiCall('/auth/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  adminSignup: async (name, email, password, adminSecret) => {
    return await apiCall('/auth/admin/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, adminSecret }),
    });
  },

  // Legacy methods for backward compatibility
  login: async (email, password) => {
    return await authAPI.userLogin(email, password);
  },

  signup: async (userData) => {
    const { firstName, lastName, email, password } = userData;
    const name = `${firstName} ${lastName}`;
    return await authAPI.userSignup(name, email, password);
  },

  // Token Management
  getToken: () => localStorage.getItem('token'),
  
  getAdminToken: () => localStorage.getItem('adminToken'),
  
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  getAdminUser: () => {
    const adminUser = localStorage.getItem('adminUser');
    return adminUser ? JSON.parse(adminUser) : null;
  },

  // Store authentication data
  setAuthData: (token, user) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },

  setAdminAuthData: (token, user) => {
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminUser', JSON.stringify(user));
  },

  // Clear authentication data
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  adminLogout: () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
  },

  logoutAll: () => {
    authAPI.logout();
    authAPI.adminLogout();
  },

  // Authentication checks
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  isAdminAuthenticated: () => {
    return !!localStorage.getItem('adminToken');
  },

  getUserRole: () => {
    const user = authAPI.getUser();
    return user?.role || null;
  },

  isAdmin: () => {
    return authAPI.getUserRole() === 'admin';
  }
};
