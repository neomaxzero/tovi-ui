import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RequestResetPopup from './RequestResetPopup';
import { requestResetPasswordClose } from '~/components/Orphan/Global/actions';

const mapDispatchToProps = dispatch => {
  return {
    close: bindActionCreators(requestResetPasswordClose, dispatch),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(RequestResetPopup);
