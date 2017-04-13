import { createSelector } from 'reselect';

const NavigatorSelector = state => {
  console.log(state);
   return state.Navigator
  };

export const showLoginSelector = createSelector(
  NavigatorSelector,
  Navigator => Navigator.get('showLogin'),
);