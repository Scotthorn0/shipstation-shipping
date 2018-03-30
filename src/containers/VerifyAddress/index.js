import { connect } from 'react-redux';
import VerifyComponent from '../../components/VerifyAddress';
import { requestAddressVerification } from '../../actions';

export const mapStateToProps = ({ verifyingAddress, addressVerified }) => ({
  verifyingAddress,
  addressVerified,
});

export default connect(mapStateToProps, { requestAddressVerification })(VerifyComponent);
