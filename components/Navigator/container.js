import { connect } from 'react-redux';
import Navigator from './Navigator';
import { showLoginSelector, showSingup } from './selector';
import NavigatorActions from './actions';

const mapStateToProps = (state) => ({
  showLogin: showLoginSelector(state),
  showSignUp: showSingup(state),
  showEmailPassword: false,
});

export default connect(mapStateToProps, NavigatorActions)(Navigator);

