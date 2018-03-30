import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Dimmer, Loader, Header } from 'semantic-ui-react';
import { NEXT } from '../../constants';

class VerifyAddress extends Component {
  static propTypes = {
    requestAddressVerification: PropTypes.func,
    verifyingAddress: PropTypes.bool,
    addressVerified: PropTypes.bool,
    moveStep: PropTypes.func,
  }

  state = {
    name: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    postal: '',
    country: '',
  }

  componentWillReceiveProps({ addressVerified }) {
    const { moveStep } = this.props;
    if (addressVerified) {
      moveStep(NEXT);
    }
  }

  onSubmit = (_, e) => {
    const { requestAddressVerification } = this.props;

    requestAddressVerification(this.state);
  }

  onChange = (_, { name, value }) => {
    this.setState({ [name]: value });
  }

  render() {
    const {
      name, phone, company, address, city, state, postal, country,
    } = this.state;
    const { verifyingAddress } = this.props;

    return (
      <Segment>
        <Dimmer active={verifyingAddress}>
          <Loader />
        </Dimmer>
        <Header content="Where are we sending this beautiful plant?" subheader="Enter your address below" />
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            label="Name"
            required
            type="text"
            autoComplete="name"
            name="name"
            icon="user"
            placeholder="Full Name"
            value={name}
            onChange={this.onChange}
          />
          <Form.Input
            label="Telephone"
            type="tel"
            autoComplete="tel"
            name="phone"
            icon="phone"
            placeholder="Area Code and Phone Number"
            value={phone}
            onChange={this.onChange}
          />
          <Form.Input
            label="Company"
            type="text"
            name="company"
            icon="building"
            placeholder="Company Name"
            value={company}
            onChange={this.onChange}
          />
          <Form.Input
            label="Street Address"
            required
            autoComplete="street-address"
            name="address"
            icon="address card"
            placeholder="Address"
            value={address}
            onChange={this.onChange}
          />
          <Form.Input
            label="City"
            required
            autoComplete="address-level2"
            name="city"
            placeholder="City"
            value={city}
            onChange={this.onChange}
          />
          <Form.Input
            label="State"
            required
            autoComplete="address-level1"
            name="state"
            placeholder="State"
            value={state}
            onChange={this.onChange}
          />
          <Form.Input
            label="Postal Code"
            required
            autoComplete="postal_code"
            name="postal"
            placeholder="Zip or Postal Code"
            value={postal}
            onChange={this.onChange}
          />
          <Form.Input
            label="Country"
            required
            autoComplete="country"
            name="country"
            placeholder="Country"
            value={country}
            onChange={this.onChange}
          />
          <Form.Button>Check Address</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default VerifyAddress;
