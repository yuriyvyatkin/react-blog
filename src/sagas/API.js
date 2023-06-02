import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/';
const API = axios.create({
  baseURL: API_URL,
});

API.interceptors.request.use((config) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(config);
    }, 500);
  });
});

export default API;
