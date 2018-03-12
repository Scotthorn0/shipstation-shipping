import React from 'react';
import { shallow } from 'enzyme';
import Home from '../';

describe('Home Component', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Home />);
    instance = wrapper.instance();
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should default to rendering the Product page', () => {
    expect(wrapper.state('activeItem')).toBe('product');
    expect(wrapper.find('Product').length).toBe(1);
    expect(wrapper.find('Ship').length).toBe(0);
  });

  it('should have a MenuClick handler that changes state', () => {
    // Find the correct Menu Item and simulate a click with a mock event object
    wrapper.find('[name="ship"]').simulate('click', null, { name: 'ship'});

    expect(wrapper.state('activeItem')).toBe('ship');
    expect(wrapper.find('Product').length).toBe(0);
    expect(wrapper.find('Ship').length).toBe(1);
  });
});
