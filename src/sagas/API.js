import axios from 'axios';

const API_URL = 'http://jsonplaceholder.typicode.com/';
const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(config);
    }, 50);
  });
});

export default API;
