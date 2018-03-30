import { combineEpics } from 'redux-observable';
import { verifyAddressSuccess, verifyAddressFailure, fetchRatesFailure, fetchRatesSuccess } from '../actions';
import { REQUEST_ADDRESS_VERIFICATION, FETCH_RATES } from '../actions/types';
import fetch$ from './observableFetch';

const createAddress = ({
  address, city, company, country, name, phone, postal, state,
}) => {
  const mappedAddress = {
    name,
    phone,
    company_name: company,
    address_line1: address,
    city_locality: city,
    state_province: state,
    postal_code: postal,
    country_code: country,
  };
  return JSON.stringify([mappedAddress]);
};

const verifyAddressEpic = action$ =>
  action$.ofType(REQUEST_ADDRESS_VERIFICATION)
    .switchMap(({ payload }) => (
      fetch$('http://localhost:4040/validate', {
        body: createAddress(payload),
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
      })
        .catch(error => verifyAddressFailure(error))
    ))
    .map(address => verifyAddressSuccess(address))
    .catch(caught => verifyAddressFailure(caught));

const fetchRatesEpic = action$ =>
  action$.ofType(FETCH_RATES)
    .switchMap(({ payload }) => (
      fetch$('http://localhost:4040/rates', {
        body: JSON.stringify(payload),
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json',
        },
      })
        .catch(error => fetchRatesFailure(error))
    ))
    .map(response => fetchRatesSuccess(response))
    .catch(caught => fetchRatesFailure(caught));

export default combineEpics(verifyAddressEpic, fetchRatesEpic);
