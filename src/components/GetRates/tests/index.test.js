import React from 'react';
import { shallow } from 'enzyme';
import GetRates from '../';

describe('GetRates Component', () => {
  let wrapper;
  let fetchRatesMock;

  beforeEach(() => {
    fetchRatesMock = jest.fn();
    wrapper = shallow(<GetRates fetchRates={fetchRatesMock} />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe.true;
  });
});
