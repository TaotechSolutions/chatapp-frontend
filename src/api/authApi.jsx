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
    if (
      error.response &&
      error.response.status === 401 &&
      getAuthMode() === 'cookie'
    ) {
      // Switch to token mode
      setAuthMode('token');
    }

    return Promise.reject(error);
  }
);


export default authApi;