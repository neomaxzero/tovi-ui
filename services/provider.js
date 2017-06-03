import axios from 'axios';
import { BASE_API } from '~/config';
import Cookies from 'js-cookie';

const Authorization = () => `Bearer ${Cookies.get('token')}`;

export const req =  axios.create({
  baseURL: BASE_API,
});

export const secureReq = () => axios.create({
  baseURL: BASE_API,
  headers: {
    Authorization: Authorization(),
  },
});
