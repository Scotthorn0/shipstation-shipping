import React from 'react';
import { shallow } from 'enzyme';
import ConfirmAddress from '../';
import { NEXT, BACK } from '../../../constants';

describe('ConfirmAddress Component', () => {
  let wrapper;
  let instance;
  let moveStepMock;

  beforeEach(() => {
    moveStepMock = jest.fn();
    wrapper = shallow(<ConfirmAddress moveStep={moveStepMock} />);
    instance = wrapper.instance();
  });

  test('should render without crashing', () => {
    expect(wrapper.exists()).toBe.true;
  });

  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('nextStep', () => {
    test(`should call moveStep with ${NEXT}`, () => {
      instance.nextStep();
      expect(moveStepMock.mock.calls[0][0]).toBe(NEXT);
    });
  });

  describe('previousStep', () => {
    test(`should call moveStep with ${BACK}`, () => {
      instance.previousStep();
      expect(moveStepMock.mock.calls[0][0]).toBe(BACK);
    });
  });
});
