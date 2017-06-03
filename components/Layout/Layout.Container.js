import { connect } from 'react-redux';
import Layout from './Layout';
import activacionActions from './ActivationPopup/actions';
import { isActivating } from '~/components/Orphan/Global/selector';

const mapStatetoProps = (state) => {
    return {
        activating: isActivating(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.activation)
        dispatch(activacionActions.activateRequest(ownProps.activation));

    return {};
}

export default connect(mapStatetoProps, mapDispatchToProps)(Layout)