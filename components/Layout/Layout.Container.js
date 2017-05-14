import { connect } from 'react-redux';
import Layout from './Layout';
import activacionActions from './ActivationPopup/actions';
import { isActivated } from '~/components/Orphan/Global/selector';

const mapStatetoProps = (state) => {
    return {
        activated: isActivated(state),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.activation)
        dispatch(activacionActions.activateRequest(ownProps.activation));

    return {};
}

export default connect(mapStatetoProps, mapDispatchToProps)(Layout)