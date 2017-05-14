import { createSelector } from 'reselect';

const LoginSelector = state => {
   return state.Login
};

export const getLoginInfo = createSelector(
  LoginSelector,
  Login => Login.get('loginInfo'),
);

export const isLogged = createSelector(
  getLoginInfo,
  LoginInfo => (LoginInfo && LoginInfo.get('first_name') !== undefined)
);

export const getProvider = createSelector(
  LoginSelector,
  Login => Login.get('provider'),
);

