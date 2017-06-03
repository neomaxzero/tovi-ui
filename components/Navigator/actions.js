import { TOGGLE_LOGIN, TOGGLE_SINGUP } from '~/components/constants';

export const toggleLogin = () => ({
	type: TOGGLE_LOGIN,
});

export const toggleSignup = () => ({
	type: TOGGLE_SINGUP,
});

export default {
	toggleLogin,
	toggleSignup,
};
