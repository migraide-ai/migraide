import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';  // Adjust this to match your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,  // This is important for handling sessions
});

export default api;