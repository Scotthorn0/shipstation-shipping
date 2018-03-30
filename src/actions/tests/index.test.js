import * as actions from '../';
import * as types from '../types';

describe('action creators', () => {
  describe('verifyAddressSuccess', () => {
    it('should have the correct type and payload', () => {
      const action = actions.verifyAddressSuccess({ mock: 'payload' });

      expect(action.type).toBe(types.VERIFY_ADDRESS_SUCCESS);
      expect(action.payload).toEqual({ mock: 'payload' });
    });
  });

  describe('verifyAddressFailure', () => {
    it('should have the correct type and payload', () => {
      const action = actions.verifyAddressFailure({ error: 'error payload' });

      expect(action.type).toBe(types.VERIFY_ADDRESS_FAILURE);
      expect(action.payload).toEqual({ error: 'error payload' });
    });
  });

  describe('requestAddressVerification', () => {
    it('should have the correct type and payload', () => {
      const action = actions.requestAddressVerification({ mock: 'payload' });

      expect(action.type).toBe(types.REQUEST_ADDRESS_VERIFICATION);
      expect(action.payload).toEqual({ mock: 'payload' });
    });
  });

  describe('fetchRates', () => {
    it('should have the correct type and payload', () => {
      const action = actions.fetchRates({ mock: 'payload' });

      expect(action.type).toBe(types.FETCH_RATES);
      expect(action.payload).toEqual({ mock: 'payload' });
    });
  });

  describe('fetchRatesSuccess', () => {
    it('should have the correct type and payload', () => {
      const action = actions.fetchRatesSuccess({ mock: 'payload' });

      expect(action.type).toBe(types.FETCH_RATES_SUCCESS);
      expect(action.payload).toEqual({ mock: 'payload' });
    });
  });

  describe('fetchRatesFailure', () => {
    it('should have the correct type and payload', () => {
      const action = actions.fetchRatesFailure({ mock: 'payload' });

      expect(action.type).toBe(types.FETCH_RATES_FAILURE);
      expect(action.payload).toEqual({ mock: 'payload' });
    });
  });
});
