import React, { createContext, useContext, ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );
  const isAuthenticated = !!token;

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      const data = response.data;
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      throw new Error("Failed to login");
    }
  };

  const register = async (username: string, password: string) => {
    try {
      await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
    } catch (error) {
      throw new Error("Failed to register");
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue: AuthContextType = {
    token,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
