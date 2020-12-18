import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

import history from '../services/history';
import { useHistory } from 'react-router-dom';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  user: object;
}

interface AuthContextData {
  user: any;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();

  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@BarberApp: user');

    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', { email, password });

    const { access, user } = response.data;

    if (access) {
      localStorage.setItem('@BarberApp: user', JSON.stringify(user));
      setData({ user });
      history.push('/dashboard');
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@BarberApp: user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
