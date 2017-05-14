import { ACTIVATE_REQUEST } from '~/components/constants';

const activateRequest = (code) => ({
	type: ACTIVATE_REQUEST,
	code,
});

export default {
	activateRequest,
};
