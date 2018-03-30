import React from 'react';
import { shallow } from 'enzyme';
import Ship from '../';
import { NEXT, BACK } from '../../../constants';

describe('Ship Component', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Ship />);
    instance = wrapper.instance();
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('moveStep', () => {
    test(`should increase the step tracker if the direction is ${NEXT}`, () => {
      expect(wrapper.state('step')).toBe(0);
      instance.moveStep(NEXT);
      expect(wrapper.state('step')).toBe(1);
    });
    test(`should decrease the step tracker if the direction is ${BACK}`, () => {
      wrapper.setState({ step: 2 });
      instance.moveStep(BACK);
      expect(wrapper.state('step')).toBe(1);
    });
  });

  describe('toggleModal', () => {
    test('toggle the modal on and off', () => {
      expect(wrapper.state('modalOpen')).toBe.false;
      instance.toggleModal();
      expect(wrapper.state('modalOpen')).toBe.true;
      instance.toggleModal();
      expect(wrapper.state('modalOpen')).toBe.false;
    });
  });
});
