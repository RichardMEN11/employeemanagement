import Axios from 'axios';

let urls = {
  development: 'http://localhost:3000/',
  production: 'https://your-production-url.com/',
};
const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
