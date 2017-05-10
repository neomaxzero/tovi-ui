import { post } from 'axios';
import { toviServices } from '~/config';

const LOGIN_API = 'api/login/login';

export const login = (loginBody) => (post(toviServices(LOGIN_API), loginBody));