import { req, secureReq } from "./provider";

export const login = loginBody => req.post("api/login", loginBody);
export const user = {
  get: id => secureReq().get(`api/usuario/obtener?usuarioId=${id}`),
  create: body => req.post("api/usuario/crear", body),
  activate: code => secureReq().post(`api/usuario/activarCuenta/${code}`),
  resendEmail: userId => req.post(`api/usuario/enviarMailActivarCuenta?usuarioId=${userId}`),
  resendPasswordEmail: email => req.post(`api/usuario/enviarMailRestaurarPassword?nombreUsuario=${email}`),
  resetPassword: body => req.post('api/usuario/restaurarPassword', body)
};
