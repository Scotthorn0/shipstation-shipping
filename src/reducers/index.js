import {
  REQUEST_ADDRESS_VERIFICATION,
  VERIFY_ADDRESS_SUCCESS,
  VERIFY_ADDRESS_FAILURE,
  FETCH_RATES,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAILURE,
} from '../actions/types';

const initState = {
  verifyingAddress: false,
  addressVerified: false,
  fetchingRates: false,
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_RATES:
      return {
        ...state, fetchingRates: true,
      };
    case FETCH_RATES_SUCCESS:
      return {
        ...state, fetchingRates: false, rates: payload,
      };
    case FETCH_RATES_FAILURE:
      return {
        ...state, fetchingRates: false,
      };
    case REQUEST_ADDRESS_VERIFICATION:
      return { ...state, requestedAddress: { ...payload }, verifyingAddress: true };
    case VERIFY_ADDRESS_SUCCESS:
      return {
        ...state, verifiedAddress: { ...payload }, addressVerified: true, verifyingAddress: false,
      };
    case VERIFY_ADDRESS_FAILURE:
      return { ...state, ...payload, verifiedAddress: false };
    default:
      return { ...state };
  }
};
