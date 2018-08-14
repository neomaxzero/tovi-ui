import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from './Nav';
import { showLoginSelector, showSingup } from './selector';
import { showSignupSucceed, showRequestResetPassword } from '~/components/Orphan/Global/selector';
import NavigatorActions from './actions';
//Items
import LoginPopupActions from './actions';
import AuthActions from '~/components/Orphan/Login/actions';
import { isLogged, getLoginInfo, getProvider } from '~/components/Orphan/Login/selector';
import { merge } from 'lodash';

import config from './config';

const mapStateToProps = state => ({
  showLogin: showLoginSelector(state),
  showSignUp: showSingup(state),
  showEmailPassword: false,
  showSignupSucceed: showSignupSucceed(state),
  showRequestResetPassword: showRequestResetPassword(state),
  logged: isLogged(state),
  loginInfo: getLoginInfo(state),
  provider: getProvider(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...NavigatorActions,
      ...LoginPopupActions,
      logout: AuthActions.logout,
    },
    dispatch,
  );

const mix = (msp, mdp) => ({
  ...msp,
  ...mdp,
  items: config(merge(msp, mdp)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mix,
)(Nav);
