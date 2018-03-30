import configureMockStore from 'redux-mock-store';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../';
import * as types from '../../actions/types';

const epicMiddleware = createEpicMiddleware(rootEpic);
const mockStore = configureMockStore([epicMiddleware]);
const requestedAddress = {
  name: 'Mickey and Minnie Mouse',
  phone: '714-781-4565',
  company_name: 'The Walt Disney Company',
  address_line1: '500 South Buena Vista Street',
  address_line2: null,
  address_line3: null,
  city_locality: 'Burbank',
  state_province: 'CA',
  postal_code: '91521',
  country_code: 'US',
};


const verifiedAddress = {
  name: 'MICKEY AND MINNIE MOUSE',
  phone: '714-781-4565',
  company_name: 'THE WALT DISNEY COMPANY',
  address_line1: '500 S BUENA VISTA ST',
  address_line2: '',
  address_line3: null,
  city_locality: 'BURBANK',
  state_province: 'CA',
  postal_code: '91521-0007',
  country_code: 'US',
  address_residential_indicator: 'no',
};

describe('verifyAddressEpic', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    fetch.resetMocks();
    epicMiddleware.replaceEpic(rootEpic);
  });

  it('should invoke the success action creator on successful request', () => {
    fetch.mockResponse(JSON.stringify(verifiedAddress));

    store.dispatch({ type: types.REQUEST_ADDRESS_VERIFICATION, payload: requestedAddress });

    expect(store.getActions()).toEqual([
      { type: types.REQUEST_ADDRESS_VERIFICATION, payload: requestedAddress },
      { type: types.VERIFY_ADDRESS_SUCCESS, payload: verifiedAddress },
    ]);
  });
});
