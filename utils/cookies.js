import Cookies from 'js-cookie';

export default {
    set: (prop, value, expiration) => {
        //Expiration should be in days or parsed in some way.
        return Cookies.set(prop, value, expiration);
    }
}