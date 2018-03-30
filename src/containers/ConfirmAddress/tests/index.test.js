import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ConfirmAddress, { mapStateToProps } from '../';

const mockStore = configureMockStore();

describe('ConfirmAddress Container', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore();
    wrapper = shallow(
      <Provider store={store}>
        <ConfirmAddress />
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
    requestedAddress: {
      zip: 96666,
    },
    verifiedAddress: {
      zip: 96666,
    },
  };

  test('should return the correct values from state passed to it', () => {
    const expected = {
      requestedAddress: {
        zip: 96666,
      },
      verifiedAddress: {
        zip: 96666,
      },
    };

    const result = mapStateToProps(mockState);

    expect(result).toEqual(expected);
    expect(result).not.toHaveProperty('extraKey', 'should be excluded');
  });
});
