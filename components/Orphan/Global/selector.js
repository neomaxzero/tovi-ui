import { createSelector } from 'reselect';

const GlobalSelector = state => state.Global;

export const isActivating = createSelector(
  GlobalSelector,
  global => global.get('activating')
);


const getPopups = createSelector(
  GlobalSelector,
  global => global.get('popups')
)

export const showSignupSucceed = createSelector(
  getPopups,
  popups => popups.get('showSignUpSucceed')
)


export const showRequestResetPassword = createSelector(
  getPopups,
  popups => popups.get('showRequestResetPassword')
)


export const isReseting = createSelector(
  getPopups,
  global => global.get('formResetPassword')
);