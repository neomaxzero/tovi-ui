import { TOGGLE_LOGIN, TOGGLE_SINGUP } from '~/components/constants';

export const toggleLogin = red => ({
  type: TOGGLE_LOGIN,
  red
});

export const toggleSignup = () => ({
  type: TOGGLE_SINGUP
});

export default {
  toggleLogin,
  toggleSignup
};
