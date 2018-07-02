import axios from 'axios';
import Cookies from 'js-cookie';

const Authorization = () => `Bearer ${Cookies.get('token')}`;

export const req = axios.create({
  baseURL: BASE_API,
});

export const reqF = baseURL =>
  axios.create({
    baseURL,
  });

export const secureReq = (baseURL = BASE_API) => {
  return axios.create({
    baseURL,
    headers: {
      Authorization: Authorization(),
    },
  });
};
