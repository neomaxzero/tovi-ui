import { SET_LOGIN, LOGOUT } from '~/components/constants';

export const setLogin = (loginInfo, provider) => ({
	type: SET_LOGIN,
  loginInfo,
  provider, 
});

export const logout = (provider) => ({
  type: LOGOUT,
  provider,
});

export default {
	setLogin,
  logout,
};
