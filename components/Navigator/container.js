import { connect } from 'react-redux';
import Navigator from './Navigator';
import { showLoginSelector, showSingup } from './selector';
import { showSignupSucceed, showRequestResetPassword } from '~/components/Orphan/Global/selector';
import NavigatorActions from './actions';

const mapStateToProps = state => ({
  showLogin: showLoginSelector(state),
  showSignUp: showSingup(state),
  showEmailPassword: false,
  showSignupSucceed: showSignupSucceed(state),
  showRequestResetPassword: showRequestResetPassword(state),
});

export default connect(
  mapStateToProps,
  NavigatorActions,
)(Navigator);
