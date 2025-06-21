import axios from 'axios';

const authApi = axios.create({
  baseURL: "/api",
  withCredentials: true, // for cookies
});

export default authApi;