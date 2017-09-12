import { connect } from 'react-redux';
import Layout from './Layout';
import activacionActions from './ActivationPopup/actions';
import { toggleLogin } from '~/components/Navigator/actions';
import { resetFormOpen } from '~/components/Orphan/Global/actions';
import { isActivating, isReseting } from '~/components/Orphan/Global/selector';

const mapStatetoProps = state => {
  return {
    activating: isActivating(state),
    reseting: isReseting(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.activation)
    dispatch(activacionActions.activateRequest(ownProps.activation));
  if (ownProps.resetCode) dispatch(resetFormOpen());
  if (ownProps.redirect) dispatch(toggleLogin(ownProps.redirect));
  return {};
};

export default connect(mapStatetoProps, mapDispatchToProps)(Layout);
