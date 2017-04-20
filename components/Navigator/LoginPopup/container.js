import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/components/Orphan/Login/actions';
import LoginPopup from './LoginPopup';

const mapDispatchToProps = (dispatch) => ({
  setLogin: bindActionCreators(LoginActions.setLogin, dispatch)
});

export default connect(null, mapDispatchToProps)(LoginPopup);
