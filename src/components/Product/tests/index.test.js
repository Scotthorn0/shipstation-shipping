import React from 'react';
import { shallow } from 'enzyme';
import Product from '../';

describe('Product Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Product />);
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
