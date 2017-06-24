import { bindActionCreators }  from 'redux';
import { connect } from 'react-redux';
import SignUpPopup from './SingupPopup';
import SignUpActions from '~/components/Navigator/SingUpPopup/SignUpSucceed/actions';
import LoginActions from '~/components/Orphan/Login/actions';

const mapDispatchToProps = (dispatch) => ({
  showSucceed: bindActionCreators(SignUpActions.show, dispatch),
  setLogin: bindActionCreators(LoginActions.setLogin, dispatch),
});


export default connect(null, mapDispatchToProps)(SignUpPopup)
