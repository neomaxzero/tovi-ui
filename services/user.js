import { req, secureReq } from './provider';

export const login = (loginBody) => (req.post('api/login/login', loginBody));
export const user = {
  get: (id) => (secureReq.get(`api/usuario/${id}`)),
  create: (body) => (req.post('api/usuario/crear', body)),
  // activate: (code) =>(req.post('api/activate'),{ code }),
  activate: () =>(Promise.resolve()), 
} 