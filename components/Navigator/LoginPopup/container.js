import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/components/Orphan/Login/actions';
import LoginPopup from './LoginPopup';
import { requestResetPasswordOpen, resetFormOpen } from '~/components/Orphan/Global/actions';
import { toggleLogin } from '../actions';
import { getRedirectKey } from '~/components/Navigator/selector';

const mapDispatchToProps = dispatch => ({
  setLogin: bindActionCreators(LoginActions.setLogin, dispatch),
  toggleLogin: bindActionCreators(toggleLogin, dispatch),
  showRequestResetPasswordPopup: bindActionCreators(requestResetPasswordOpen, dispatch),
  showResetForm: bindActionCreators(resetFormOpen, dispatch),
});

const ms = state => ({
  redirect: getRedirectKey(state),
});
export default connect(
  ms,
  mapDispatchToProps,
)(LoginPopup);
