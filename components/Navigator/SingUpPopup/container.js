import { bindActionCreators }  from 'redux';
import { connect } from 'react-redux';
import SignUpPopup from './SingupPopup';
import SignUpActions from '~/components/Navigator/SingUpPopup/SignUpSucceed/actions';

const mapDispatchToProps = (dispatch) => ({
  showSucceed: bindActionCreators(SignUpActions.show, dispatch),
});


export default connect(null, mapDispatchToProps)(SignUpPopup)
