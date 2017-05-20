import { connect } from 'react-redux';
import SignUpSucceed from './SignUpSucceed';
import signUpSuccedActions from './actions';

export default connect(null, signUpSuccedActions)(SignUpSucceed);


