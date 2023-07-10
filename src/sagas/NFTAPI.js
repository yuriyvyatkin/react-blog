import axios from 'axios';

const API_URL = 'https://api.opensea.io/api/v1/assets';
const API_KEY = process.env.REACT_APP_NFT_API_KEY;

const API = axios.create({
  baseURL: API_URL,
  headers: {
    accept: 'application/json',
    'X-API-KEY': API_KEY,
  },
});

export default API;
