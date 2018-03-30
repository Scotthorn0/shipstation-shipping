import {
  REQUEST_ADDRESS_VERIFICATION,
  VERIFY_ADDRESS_SUCCESS,
  VERIFY_ADDRESS_FAILURE,
  FETCH_RATES,
  FETCH_RATES_SUCCESS,
  FETCH_RATES_FAILURE,
} from './types';

export const verifyAddressSuccess = payload => ({
  type: VERIFY_ADDRESS_SUCCESS,
  payload,
});

export const verifyAddressFailure = payload => ({
  type: VERIFY_ADDRESS_FAILURE,
  payload,
});

export const requestAddressVerification = payload => ({
  type: REQUEST_ADDRESS_VERIFICATION,
  payload,
});

export const fetchRates = payload => ({
  type: FETCH_RATES,
  payload,
});

export const fetchRatesSuccess = payload => ({
  type: FETCH_RATES_SUCCESS,
  payload,
});

export const fetchRatesFailure = payload => ({
  type: FETCH_RATES_FAILURE,
  payload,
});
