import axios from 'axios';

const authApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // for cookies
});

export default authApi;