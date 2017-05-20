import { createSelector } from 'reselect';

const GlobalSelector = state => state.Global;

const getActivation = createSelector(
  GlobalSelector,
  global => global.get('activation')
);

const getPopups = createSelector(
  GlobalSelector,
  global => global.get('popups')
)

export const showSignupSucceed = createSelector(
  getPopups,
  popups => popups.get('showSignUpSucceed')
)


export const isActivated = createSelector(
  getActivation,
  activation => activation.get('activated'),
);

