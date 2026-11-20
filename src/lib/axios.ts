
import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://my.api.mockaroo.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
