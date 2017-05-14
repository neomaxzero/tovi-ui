import { createSelector } from 'reselect';

const GlobalSelector = state => state.Global;

const getActivation = createSelector(
  GlobalSelector,
  global => global.get('activation')
);

export const isActivated = createSelector(
  getActivation,
  activation => activation.get('activated'),
);

