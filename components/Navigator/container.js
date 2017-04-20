import { connect } from 'react-redux';
import Navigator from './Navigator';
import { showLoginSelector } from './selector';
import NavigatorActions from './actions';

const mapStateToProps = (state) => ({
  showLogin: showLoginSelector(state),
});

export default connect(mapStateToProps, NavigatorActions)(Navigator);

