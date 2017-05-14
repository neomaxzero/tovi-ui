import { TOGGLE_LOGIN, TOGGLE_SINGUP } from '~/components/constants';

const toggleLogin = () => ({
	type: TOGGLE_LOGIN,
});

const toggleSignup = () => ({
	type: TOGGLE_SINGUP,
});

export default {
	toggleLogin,
	toggleSignup,
};
