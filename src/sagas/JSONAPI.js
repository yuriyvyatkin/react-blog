import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/';
const API = axios.create({
  baseURL: API_URL,
});

export default API;
