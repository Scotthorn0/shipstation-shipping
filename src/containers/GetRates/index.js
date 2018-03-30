import { connect } from 'react-redux';
import GetRatesComponent from '../../components/GetRates';
import { fetchRates } from '../../actions';

export const mapStateToProps = ({ rates, verifiedAddress, fetchingRates }) => ({
  fetchingRates,
  rates,
  verifiedAddress,
});

export default connect(mapStateToProps, { fetchRates })(GetRatesComponent);
