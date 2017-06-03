const moment = require('moment');
import Cookies from 'js-cookie';

export const saveToken = (result) => {
    const { tokenExpireAt, tokenExpiresIn, token } = result.data;
    const dateExpiration = moment.utc(tokenExpireAt).add(tokenExpiresIn, 'milliseconds').toDate() || 1;
    return Cookies.set('token', token, { expires: dateExpiration });
}