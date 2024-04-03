import React from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const authenticate = (cb) => {
    setIsAuthenticated(true);
    setTimeout(cb, 100);
  };

  const signout = (cb) => {
    setIsAuthenticated(false);
    setTimeout(cb, 100);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, authenticate, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
