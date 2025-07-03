import axios from 'axios';
import { getInMemoryToken, getAuthMode, setAuthMode } from '../utils/authToken';

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

authApi.interceptors.request.use((config) => {
  const mode = getAuthMode();

  if (mode === 'cookie') {
    config.withCredentials = true;
  } else if (mode === 'token') {
    config.withCredentials = false;
    const token = getInMemoryToken();
    console.log("Bearer token", token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});


authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const config = error.config || {};

    const is401 = error.response?.status === 401;
    const isCookieMode = getAuthMode() === 'cookie';
    const skipFallback = config._skipAuthModeFallback;

    if (is401 && isCookieMode && !skipFallback) {
      // Only switch to token mode if not explicitly suppressed
      setAuthMode('token');
    }

    return Promise.reject(error);
  }
);


export default authApi;