import { connect } from 'react-redux';
import OptionsPanel from './';
import actions from '../actions';
import { isLogged, getLoginInfo } from '~/components/Orphan/Login/selector';

const mapStateToProps = (state) => {
  return {
    logged: isLogged(state),
    loginInfo: getLoginInfo(state),
  }
}

export default connect(mapStateToProps, actions)(OptionsPanel);

