import { connect } from 'react-redux';
import ActivateActions from '~/components/Orphan/Global/actions';
import ActivationPopup from './ActivationPopup';

export default connect(null, ActivateActions)(ActivationPopup);


