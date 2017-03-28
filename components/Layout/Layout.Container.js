import { connect } from 'react-redux';
import Layout from './Layout';

const mapStatetoProps = (state) => {
    return {
        fromContainer: 'Maxi',
    }
}
export default connect(mapStatetoProps)(Layout)