import { SET_LOGIN } from '~/components/constants';

const setLogin = (loginInfo, provider) => ({
	type: SET_LOGIN,
  loginInfo,
  provider, 
});

export default {
	setLogin: (loginInfo, provider) => {
    return setLogin(loginInfo, provider);
  },
};
