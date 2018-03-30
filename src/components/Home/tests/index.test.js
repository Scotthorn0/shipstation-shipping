import React from 'react';
import { shallow } from 'enzyme';
import Home from '../';

describe('Home Component', () => {
  let wrapper;
  // let instance;

  beforeEach(() => {
    wrapper = shallow(<Home />);
    // instance = wrapper.instance();
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
