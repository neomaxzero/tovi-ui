import { SIGNUP_SUCCEED_CLOSE, SIGNUP_SUCCEED_OPEN } from '~/components/constants';

const close = () => ({
  type: SIGNUP_SUCCEED_CLOSE,
});

const show = () => ({
  type: SIGNUP_SUCCEED_OPEN,
});

export default {
  close,
  show,
};
