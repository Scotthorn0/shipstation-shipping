import React from 'react';
import { shallow } from 'enzyme';
import VerifyAddress from '../';

describe('VerifyAddress Component', () => {
  let wrapper;
  let instance;
  let requestAddressVerificationMock;
  let moveStepMock;

  beforeEach(() => {
    requestAddressVerificationMock = jest.fn();
    moveStepMock = jest.fn();
    wrapper = shallow(
      <VerifyAddress
        moveStep={moveStepMock}
        requestAddressVerification={requestAddressVerificationMock}
      />,
    );
    instance = wrapper.instance();
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('componentWillReceiveProps', () => {
    test('should not call moveStep if the address is not verified', () => {
      instance.componentWillReceiveProps({ addressVerified: false });
      expect(moveStepMock.called).toBe.false;
    });
    test('should call moveStep if the address is verified', () => {
      instance.componentWillReceiveProps({ addressVerified: true });
      expect(moveStepMock.called).toBe.true;
    });
  });

  describe('onSubmit', () => {
    test('should call requestAddressVerification with the values in state', () => {
      const state = {
        name: 'Mickey and Minnie Mouse',
        phone: '714-781-4565',
        company: 'The Walt Disney Company',
        address: '500 South Buena Vista Street',
        city: 'Burbank',
        state: 'CA',
        postal: '91521',
        country: 'US',
      };
      wrapper.setState(state);
      instance.onSubmit();
      expect(requestAddressVerificationMock.mock.calls[0][0]).toEqual(state);
    });
  });

  describe('onChange', () => {
    test('should update state with the correct key and value', () => {
      instance.onChange({}, { name: 'address', value: '500 South Buena Vista Street' });
      expect(wrapper.state('address')).toBe('500 South Buena Vista Street');
    });
  });
});
