import { connect } from 'react-redux';
import ConfirmComponent from '../../components/ConfirmAddress';

export const mapStateToProps = ({ requestedAddress, verifiedAddress }) => ({
  requestedAddress,
  verifiedAddress,
});

export default connect(mapStateToProps)(ConfirmComponent);
