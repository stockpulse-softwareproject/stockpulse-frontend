import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://13.49.41.236/api',
});

export default instance;
