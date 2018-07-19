import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ResetForm from './ResetForm';
import { resetFormClose } from '~/components/Orphan/Global/actions';
import { toggleLogin } from '~/components/Navigator/actions';

const mapDispatchToProps = dispatch => {
  return {
    close: bindActionCreators(resetFormClose, dispatch),
    toggleLogin: bindActionCreators(toggleLogin, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ResetForm);
