import axios from 'axios';

const api = axios.create();

// Set your own baseURL
api.defaults.baseURL = process.env.SERVER_HOST;

api.setAuthToken = (jwtToken) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
};

export default api;
