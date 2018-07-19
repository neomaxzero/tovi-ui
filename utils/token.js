const moment = require('moment');
import Cookies from 'js-cookie';

export const saveToken = result => {
  const { tokenExpireAt, tokenExpiresIn, token } = result.data;
  const dateExpiration =
    moment
      .utc(tokenExpireAt)
      .add(tokenExpiresIn, 'seconds')
      .toDate() || 1;
  const domain = PRODUCTION && BASE_DOMAIN;
  return Cookies.set('token', token, { expires: dateExpiration, domain });
};
