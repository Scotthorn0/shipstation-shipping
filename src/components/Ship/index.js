import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Modal, Button } from 'semantic-ui-react';
import VerifyAddress from '../../containers/VerifyAddress';
import ConfirmAddress from '../../containers/ConfirmAddress';
import GetRates from '../../containers/GetRates';
import './styles.css';
import { NEXT } from '../../constants';

class Ship extends Component {
  static propTypes = {
    requestAddressVerification: PropTypes.func,
  }

  state = {
    step: 0,
    modalOpen: false,
  }

  moveStep = (direction) => {
    let { step } = this.state;
    const nextStep = direction === NEXT ? step += 1 : step -= 1;
    this.setState({ step: nextStep });
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  renderStep() {
    const { step } = this.state;
    const steps = [
      VerifyAddress,
      ConfirmAddress,
      GetRates,
    ];
    return steps[step];
  }

  render() {
    const CurrentStep = this.renderStep();
    const { modalOpen } = this.state;

    return (
      <Segment basic>
        <Modal
          closeOnDimmerClick={false}
          closeIcon
          open={modalOpen}
          onClose={this.toggleModal}
          size="small"
          trigger={
            <Button onClick={this.toggleModal}>Order</Button>
          }
        >
          <Modal.Content>
            <CurrentStep moveStep={this.moveStep} />
          </Modal.Content>
        </Modal>
      </Segment>
    );
  }
}

export default Ship;
