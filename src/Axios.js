import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.harutdev.com/',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;


 // baseURL: ' http://localhost:5000/',
//  baseURL: 'https://api.harutdev.com/',