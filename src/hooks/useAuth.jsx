"use client";
import { tokenStorage } from "@/lib/utils";
import { createContext, useContext, useEffect, useState } from "react";

// Create Auth Context
const AuthContext = createContext({
  isAuthenticated: false,
  token: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

// Auth Provider Component
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = () => {
      const storedToken = tokenStorage.getToken();
      if (storedToken) {
        setToken(storedToken);
        setIsAuthenticated(true);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (newToken, remember = false) => {
    tokenStorage.setToken(newToken, remember);
    setToken(newToken);
    setIsAuthenticated(true);
  };

  const logout = () => {
    tokenStorage.removeToken();
    setToken(null);
    setIsAuthenticated(false);
    // Remove userid cookie
    document.cookie = "userid=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  };

  const value = {
    isAuthenticated,
    token,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
