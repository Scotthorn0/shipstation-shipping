import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Segment, Button } from 'semantic-ui-react';
import AddressViewer from './addressViewer';
import { NEXT, BACK } from '../../constants';
import './styles.css';

class ConfirmAddress extends Component {
  nextStep = () => {
    const { moveStep } = this.props;
    moveStep(NEXT);
  }

  previousStep = () => {
    const { moveStep } = this.props;
    moveStep(BACK);
  }

  render() {
    const { requestedAddress, verifiedAddress } = this.props;
    return (
      <Segment basic>
        <Header content="Confirm the Address is correct." />
        <Segment.Group horizontal>
          <Segment>
            <Header size="small" content="What you entered" />
            <AddressViewer address={requestedAddress} />
          </Segment>
          <Segment>
            <Header size="small" content="What we found" />
            <AddressViewer address={verifiedAddress} />
          </Segment>
        </Segment.Group>
        <Segment basic textAlign="right">
          <Header textAlign="center" size="medium" content="Is this correct?" />
          <Button
            icon="left arrow"
            negative
            labelPosition="left"
            content="TryAgain"
            onClick={this.previousStep}
          />
          <Button
            icon="check"
            positive
            labelPosition="right"
            content="Yes"
            onClick={this.nextStep}
          />
        </Segment>
      </Segment>
    );
  }
}

ConfirmAddress.propTypes = {
  requestedAddress: PropTypes.object,
  verifiedAddress: PropTypes.object,
  moveStep: PropTypes.func,
};

export default ConfirmAddress;
