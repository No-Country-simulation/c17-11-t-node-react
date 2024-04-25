import React, { createContext, useContext, ReactNode, useEffect } from "react";

interface Care {
  id: number;
  name: string;
  description: string;
  address: string;
  imageUrl: string;
}

interface CareResponse {
  data: Care[];
}

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  register: (
    username: string,
    password: string,
    role: string,
    first_name: string,
    last_name: string,
    email: string
  ) => Promise<void>;
  logout: () => void;
  getCares: () => Promise<Care[]>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem("token")
  );
  const isAuthenticated = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      const data = await response.json();
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      throw new Error("Failed to login");
    }
  };

  const register = async (
    username: string,
    password: string,
    role: string,
    first_name: string,
    last_name: string,
    email: string
  ) => {
    try {
      await fetch("http://localhost:3001/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          role,
          first_name,
          last_name,
          email,
        }),
      });
    } catch (error) {
      throw new Error("Failed to register");
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const getCares = async (): Promise<Care[]> => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/cares", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch cares");
      }
      const data: CareResponse = await response.json();
      return data.data;
    } catch (error) {
      console.log("Error:", error);
      throw new Error("Failed to fetch cares");
    }
  };

  const contextValue: AuthContextType = {
    token,
    isAuthenticated,
    login,
    register,
    logout,
    getCares,
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
