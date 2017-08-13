import Cookies from 'js-cookie';
import {DOMAIN_DEV, DOMAIN_PROD} from '../config/constants';
//This is helpfull to understand if we are local or in another place
const isDev = typeof window !== 'undefined' && window.location.host.includes('localhost');
//if it is dev, we set localhost
const DOMAIN = isDev ? DOMAIN_DEV : DOMAIN_PROD;

export default {
    set: (prop, value, expires, domain = DOMAIN) => {
        //Expiration should be in days or parsed in some way.
        const options = {
            expires,
            domain
        }
        return Cookies.set(prop, value, options);
    }
}