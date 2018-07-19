import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setLogin } from '~/components/Orphan/Login/actions';
import ActivateActions from '~/components/Orphan/Global/actions';
import ActivationPopup from './ActivationPopup';
import { toggleLogin } from '~/components/Navigator/actions';
import { requestResetPasswordOpen } from '~/components/Orphan/Global/actions';

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(ActivateActions, dispatch),
  showRequestResetPasswordPopup: bindActionCreators(requestResetPasswordOpen, dispatch),
  setLogin: bindActionCreators(setLogin, dispatch),
  toggleLogin: bindActionCreators(toggleLogin, dispatch),
});
export default connect(
  null,
  mapDispatchToProps,
)(ActivationPopup);
