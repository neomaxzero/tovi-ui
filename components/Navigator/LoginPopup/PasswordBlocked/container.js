import { connect } from 'react-redux';
import PasswordActions from './actions';
import PasswordBlocked from './PasswordBlocked';

export default connect(null, PasswordActions)(PasswordBlocked);


