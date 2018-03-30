import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import VerifyAddress, { mapStateToProps } from '../';

const mockStore = configureMockStore();

describe('VerifyAddress Component', () => {
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
    fetchingRates: true,
    rates: [{}],
    verifiedAddress: { zip: 96666 },
  };

  test('should return the correct values from state passed to it', () => {
    const expected = {
      fetchingRates: true,
      rates: [{}],
      verifiedAddress: { zip: 96666 },
    };
    const result = mapStateToProps(mockState);

    expect(result).toEqual(expected);
    expect(result).not.toHaveProperty('extraKey', 'should be excluded');
  });
});
