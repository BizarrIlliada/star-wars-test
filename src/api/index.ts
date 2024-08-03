import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  config => {
    config.baseURL = import.meta.env.VITE_BASE_URL;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error),
);

export default axiosInstance;
