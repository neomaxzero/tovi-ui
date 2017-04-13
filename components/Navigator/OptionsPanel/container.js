import { connect } from 'react-redux';
import OptionsPanel from './';
import actions from '../actions';


export default connect(null, actions)(OptionsPanel);

