import axios from 'axios';

const axiosReq = axios.create({
  baseURL: 'https://eco250.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosReq;
