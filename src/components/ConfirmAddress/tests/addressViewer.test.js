import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'semantic-ui-react';
import AddressViewer from '../addressViewer';

const address = {
  name: 'MICKEY AND MINNIE MOUSE',
  phone: '714-781-4565',
  company_name: 'THE WALT DISNEY COMPANY',
  address_line1: '500 S BUENA VISTA ST',
  address_line2: '',
  address_line3: null,
  city_locality: 'BURBANK',
  state_province: 'CA',
  postal_code: '91521-0007',
  country_code: 'US',
  address_residential_indicator: 'no',
};

describe.only('AddressViewer Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddressViewer address={address} />);
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should not render lines for falsy values', () => {
    expect(wrapper.children()).toHaveLength(8);
    const updatedAddress = { ...address, address_line2: 'Unit# 4000' };
    wrapper.setProps({ address: updatedAddress });
    expect(wrapper.children()).toHaveLength(9);
  });

  test('should not show the residential indicator field', () => {
    expect(wrapper.children().last().contains(<List.Item>US</List.Item>)).toBe.true;
    expect(wrapper.children().last().contains(<List.Item>no</List.Item>)).toBe.false;
  });
});
