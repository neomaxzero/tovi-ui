import { ACTIVATE_REQUEST, ACTIVATE_CLOSE } from '~/components/constants';

const activateRequest = code => ({
  type: ACTIVATE_REQUEST,
  code,
});

const activateClose = () => ({
  type: ACTIVATE_CLOSE,
});

export default {
  activateRequest,
  activateClose,
};
