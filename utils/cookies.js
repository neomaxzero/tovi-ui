import Cookies from 'js-cookie';

export default {
    set: (prop, value, expires, domain = BASE_DOMAIN) => {
        //Expiration should be in days or parsed in some way.
        const options = {
            expires,
            domain
        }
        return Cookies.set(prop, value, options);
    }
}