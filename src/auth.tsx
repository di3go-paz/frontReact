import { createContext, useContext, useState, ReactNode } from 'react';
import { login as apiLogin } from './api/auth';

interface AuthContextType {
  token: string | null;
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));
  const [user, setUser] = useState<string | null>(() => localStorage.getItem('user'));

  const login = async (username: string, password: string) => {
    const tok = await apiLogin(username, password);
    localStorage.setItem('token', tok);
    localStorage.setItem('user', username);
    setToken(tok);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
      <AuthContext.Provider value={{ token, user, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}