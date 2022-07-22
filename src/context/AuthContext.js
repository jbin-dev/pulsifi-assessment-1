import React, { useContext, useState } from "react";

const AuthContext = React.createContext();
const LoginContext = React.createContext();
const LogoutContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function useLogin() {
  return useContext(LoginContext);
}

export function useLogout() {
  return useContext(LogoutContext);
}

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  function login() {
    setAuthenticated(true);
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={authenticated}>
      <LoginContext.Provider value={login}>
        <LogoutContext.Provider value={logout}>
          {children}
        </LogoutContext.Provider>
      </LoginContext.Provider>
    </AuthContext.Provider>
  );
}
