import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigator from './Navigator';
import { showLoginSelector, showSingup } from './selector';
import { showSignupSucceed, showRequestResetPassword } from '~/components/Orphan/Global/selector';
import { isLogged, getLoginInfo, getProvider } from '~/components/Orphan/Login/selector';
import LoginPopupActions from './actions';
import AuthActions from '~/components/Orphan/Login/actions';
import NavigatorActions from './actions';
import createItems from './OptionsConfig/createItems';

const mapStateToProps = (state) => ({
  logged: isLogged(state),
  loginInfo: getLoginInfo(state),
  provider: getProvider(state),
  showLogin: showLoginSelector(state),
  showSignUp: showSingup(state),
  showEmailPassword: false,
  showSignupSucceed: showSignupSucceed(state),
  showRequestResetPassword: showRequestResetPassword(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
  ...bindActionCreators(NavigatorActions, dispatch),
  ...bindActionCreators(LoginPopupActions, dispatch),
  logout: bindActionCreators(AuthActions.logout, dispatch),
}};

const mergeOptions = (stateProps, dispatchProps) => {
  console.log('stateProps', stateProps);
  console.log('dispatchProps', dispatchProps);
  
  return {
    ...stateProps,
    ...dispatchProps,
    items: createItems({...stateProps,...dispatchProps}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeOptions)(Navigator);

