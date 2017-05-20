import { req, secureReq } from './provider';

export const getProvinces = () => req.get('api/comun/provincias?paisId=1');
export const getCities = (provId) => req.get(`api/comun/localidades?provinciaId=${provId}`);