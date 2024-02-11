import { useState } from 'react';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

  const login = (token, userId) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    setAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setAuthenticated(false);
  };

  return { authenticated, login, logout };
};

export default useAuth;
