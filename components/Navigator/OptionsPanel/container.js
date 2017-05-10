import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import OptionsPanel from './';
import LoginPopupActions from '../actions';
import AuthActions from '~/components/Orphan/Login/actions';
import { isLogged, getLoginInfo, getProvider } from '~/components/Orphan/Login/selector';

const mapStateToProps = (state) => {
  return {
    logged: isLogged(state),
    loginInfo: getLoginInfo(state),
    provider: getProvider(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  ...bindActionCreators(LoginPopupActions, dispatch),
  logout: bindActionCreators(AuthActions.logout, dispatch),
}};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsPanel);

