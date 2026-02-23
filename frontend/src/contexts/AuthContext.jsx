import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authAPI } from '../utils/api';

// Auth context initial state
const initialState = {
  user: null,
  adminUser: null,
  isAuthenticated: false,
  isAdminAuthenticated: false,
  isLoading: true,
  error: null
};

// Action types
const AUTH_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  SET_USER: 'SET_USER',
  SET_ADMIN_USER: 'SET_ADMIN_USER',
  LOGOUT: 'LOGOUT',
  ADMIN_LOGOUT: 'ADMIN_LOGOUT',
  LOGOUT_ALL: 'LOGOUT_ALL',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    
    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        isLoading: false,
        error: null
      };
    
    case AUTH_ACTIONS.SET_ADMIN_USER:
      return {
        ...state,
        adminUser: action.payload,
        isAdminAuthenticated: !!action.payload,
        isLoading: false,
        error: null
      };
    
    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null
      };
    
    case AUTH_ACTIONS.ADMIN_LOGOUT:
      return {
        ...state,
        adminUser: null,
        isAdminAuthenticated: false,
        error: null
      };
    
    case AUTH_ACTIONS.LOGOUT_ALL:
      return {
        ...state,
        user: null,
        adminUser: null,
        isAuthenticated: false,
        isAdminAuthenticated: false,
        error: null
      };
    
    case AUTH_ACTIONS.SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    
    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state on mount
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const user = authAPI.getUser();
        const adminUser = authAPI.getAdminUser();
        
        if (user) {
          dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
        }
        
        if (adminUser) {
          dispatch({ type: AUTH_ACTIONS.SET_ADMIN_USER, payload: adminUser });
        }
        
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: false });
      } catch (error) {
        console.error('Auth initialization error:', error);
        dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: 'Failed to initialize authentication' });
      }
    };

    initializeAuth();
  }, []);

  // Action creators
  const actions = {
    // User authentication
    loginUser: async (email, password) => {
      try {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
        const response = await authAPI.userLogin(email, password);
        
        if (response.success) {
          const { user, token } = response.data;
          authAPI.setAuthData(token, user);
          dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
          return { success: true, user };
        } else {
          throw new Error(response.message || 'Login failed');
        }
      } catch (error) {
        dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        throw error;
      }
    },

    signupUser: async (name, email, password) => {
      try {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
        const response = await authAPI.userSignup(name, email, password);
        
        if (response.success) {
          const { user, token } = response.data;
          authAPI.setAuthData(token, user);
          dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user });
          return { success: true, user };
        } else {
          throw new Error(response.message || 'Signup failed');
        }
      } catch (error) {
        dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        throw error;
      }
    },

    // Admin authentication
    loginAdmin: async (email, password) => {
      try {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
        const response = await authAPI.adminLogin(email, password);
        
        if (response.success) {
          const { user, token } = response.data;
          authAPI.setAdminAuthData(token, user);
          dispatch({ type: AUTH_ACTIONS.SET_ADMIN_USER, payload: user });
          return { success: true, user };
        } else {
          throw new Error(response.message || 'Admin login failed');
        }
      } catch (error) {
        dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        throw error;
      }
    },

    signupAdmin: async (name, email, password, adminSecret) => {
      try {
        dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });
        const response = await authAPI.adminSignup(name, email, password, adminSecret);
        
        if (response.success) {
          const { user, token } = response.data;
          authAPI.setAdminAuthData(token, user);
          dispatch({ type: AUTH_ACTIONS.SET_ADMIN_USER, payload: user });
          return { success: true, user };
        } else {
          throw new Error(response.message || 'Admin signup failed');
        }
      } catch (error) {
        dispatch({ type: AUTH_ACTIONS.SET_ERROR, payload: error.message });
        throw error;
      }
    },

    // Logout actions
    logout: () => {
      authAPI.logout();
      dispatch({ type: AUTH_ACTIONS.LOGOUT });
    },

    adminLogout: () => {
      authAPI.adminLogout();
      dispatch({ type: AUTH_ACTIONS.ADMIN_LOGOUT });
    },

    logoutAll: () => {
      authAPI.logoutAll();
      dispatch({ type: AUTH_ACTIONS.LOGOUT_ALL });
    },

    // Error handling
    clearError: () => {
      dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
    },

    // Utility methods
    updateUser: (userData) => {
      const updatedUser = { ...state.user, ...userData };
      authAPI.setAuthData(authAPI.getToken(), updatedUser);
      dispatch({ type: AUTH_ACTIONS.SET_USER, payload: updatedUser });
    },

    updateAdminUser: (userData) => {
      const updatedAdminUser = { ...state.adminUser, ...userData };
      authAPI.setAdminAuthData(authAPI.getAdminToken(), updatedAdminUser);
      dispatch({ type: AUTH_ACTIONS.SET_ADMIN_USER, payload: updatedAdminUser });
    }
  };

  const value = {
    ...state,
    ...actions
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
