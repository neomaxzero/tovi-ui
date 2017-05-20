import { createSelector } from 'reselect';

const NavigatorSelector = state => {
   return state.Navigator
};

export const showLoginSelector = createSelector(
  NavigatorSelector,
  Navigator => Navigator.get('showLogin'),
);



export const showSingup = createSelector(
  NavigatorSelector,
  Navigator => Navigator.get('showSignUp'),
);