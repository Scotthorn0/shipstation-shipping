import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import VerifyAddress, { mapStateToProps } from '../';

const mockStore = configureMockStore();

describe('VerifyAddress Container', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore();
    wrapper = shallow(
      <Provider store={store}>
        <VerifyAddress />
      </Provider>,
    );
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  const mockState = {
    extraKey: 'should be excluded',
    verifyingAddress: false,
    addressVerified: true,
  };

  test('should return the correct values from state passed to it', () => {
    const expected = {
      verifyingAddress: false,
      addressVerified: true,
    };
    const result = mapStateToProps(mockState);

    expect(result).toEqual(expected);
    expect(result).not.toHaveProperty('extraKey', 'should be excluded');
  });
});
