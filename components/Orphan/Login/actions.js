import { SET_LOGIN, LOGOUT } from '~/components/constants';

const setLogin = (loginInfo, provider) => ({
	type: SET_LOGIN,
  loginInfo,
  provider, 
});

export const logout = (provider) => ({
  type: LOGOUT,
  provider,
});

export default {
	setLogin: (loginInfo, provider) => {
    return setLogin(loginInfo, provider);
  },
  logout: (provider) => logout(provider)
};
