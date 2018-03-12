import React from 'react';
import { shallow } from 'enzyme';
import Ship from '../';


describe('Ship Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Ship />)
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
