import React from 'react';
import { shallow } from 'enzyme';
import Home from '../';

describe('Home Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />)
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
