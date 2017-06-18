import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/components/Orphan/Login/actions';
import LoginPopup from './LoginPopup';
import { requestResetPasswordOpen, resetFormOpen } from '~/components/Orphan/Global/actions';
import { toggleLogin } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  setLogin: bindActionCreators(LoginActions.setLogin, dispatch),
  toggleLogin: bindActionCreators(toggleLogin, dispatch),
  showRequestResetPasswordPopup: bindActionCreators(requestResetPasswordOpen, dispatch),
  showResetForm: bindActionCreators(resetFormOpen, dispatch),
});

export default connect(null, mapDispatchToProps)(LoginPopup);
