import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem(process.env.REACT_APP_TOKEN!);
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
