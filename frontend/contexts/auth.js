import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import api from '../services/Api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('');
  const [error, setError] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('token');
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const data = parseToken(token);
        setToken(token);
        setUser(data.id);
        setCompany(data.company);
      }
      setCurrentPath(router.pathname);
      setLoading(false);
      if (!employees) {
        logout();
      }
    }
    loadUserFromCookies();
  }, []);

  const login = async ({ email, password }) => {
    const {
      data: { id, accessToken },
    } = await api.post('auth/login', { email, password });
    if (accessToken && id) {
      Cookies.set('token', accessToken, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${accessToken}`;
      setUser(id);
      router.push('/dashboard');
    } else if (resp.status === 404) {
      setError(true);
    }
  };

  const logout = () => {
    Cookies.remove('token');
    setUser(null);
    setCompany(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = '/';
  };

  const register = async ({ email, company, password }) => {
    const resp = await api.post('auth/register', { email, company, password });
    if (resp.status === 201) {
      router.push('/');
    }
  };

  const isAuthenticated = () => {
    const token = Cookies.get('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const getAllEmployees = async () => {
    if (user) {
      const resp = await api.get(`employees/${user}`);
      if (resp.status === 200) {
        setEmployees(resp.data);
        return resp.data;
      } else {
        setError(true);
        return [];
      }
    }
  };

  const addEmployee = async (data) => {
    const resp = await api.post('employees', { ...data, company });
    if (resp.status === 200) {
      setEmployees(resp.data);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated(),
        user,
        login,
        loading,
        token,
        logout,
        register,
        error,
        currentPath,
        getAllEmployees,
        employees,
        addEmployee,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const parseToken = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
};

export const useAuth = () => useContext(AuthContext);
