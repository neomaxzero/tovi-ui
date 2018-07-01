import axios from 'axios';
import Cookies from 'js-cookie';

const testT =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6InRvdml0ZXN0MDAyQG1haWxpbmF0b3IuY29tIiwibmFtZWlkIjoiMTAiLCJyb2xlIjoidXNlciIsImlzcyI6Imh0dHA6Ly90b3Zpc2VydmljaW9zLmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiNjU4QzE1QzgwRUU3MDM2OEZDNTU5NjM3Qzc3MUI3MTcyIiwiZXhwIjoxNTMwNTQ0NDc0LCJuYmYiOjE1MzA0NTQ0NzR9.ayRu2bJjLdEdanb3ODr0Fp0or06ATbfCcg-WnpvE0QE';

const Authorization = () => `Bearer ${Cookies.get('token') || testT}`;

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
