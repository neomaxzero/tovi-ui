import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/components/Orphan/Login/actions';
import LoginPopup from './LoginPopup';
import { toggleLogin } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  setLogin: bindActionCreators(LoginActions.setLogin, dispatch),
  toggleLogin: bindActionCreators(toggleLogin, dispatch),
});

export default connect(null, mapDispatchToProps)(LoginPopup);
