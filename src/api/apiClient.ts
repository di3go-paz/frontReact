// apiClient.ts
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://djangoerp.duckdns.org/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor para añadir el token en cada request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export default apiClient;
