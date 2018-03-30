import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Segment, Loader, Header, Dimmer, Table } from 'semantic-ui-react';
import requestData from './requestData';
import './styles.css';

class GetRates extends Component {
  static propTypes = {
    fetchRates: PropTypes.func,
    fetchingRates: PropTypes.bool,
    verifiedAddress: PropTypes.object,
    rates: PropTypes.array,
  };

  componentDidMount() {
    const { fetchRates, verifiedAddress } = this.props;

    requestData.shipment.ship_to = verifiedAddress;

    fetchRates(requestData);
  }

  render() {
    const { fetchingRates, rates = [] } = this.props;

    return (
      <Segment basic>
        <Header content={fetchingRates ? 'Hold on while we get a shipping estimate' : 'Here are your shipping options'} />
        <Segment>
          <Dimmer active={fetchingRates}>
            <Loader />
          </Dimmer>
          <Table basic="very">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Carrier</Table.HeaderCell>
                <Table.HeaderCell>Delivery Days</Table.HeaderCell>
                <Table.HeaderCell>Cost</Table.HeaderCell>
                <Table.HeaderCell>Shipping Type</Table.HeaderCell>
                <Table.HeaderCell>Packaging</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>

              {
                rates.map(({
                  rate_id: id,
                  carrier_friendly_name: carrier,
                  carrier_delivery_days: days,
                  shipping_amount: { amount },
                  service_type: type,
                  package_type: packaging,
                }) => (
                  <Table.Row key={id}>
                    <Table.Cell>
                      {carrier}
                    </Table.Cell>
                    <Table.Cell>
                      {days}
                    </Table.Cell>
                    <Table.Cell>
                      {amount}
                    </Table.Cell>
                    <Table.Cell>
                      {type}
                    </Table.Cell>
                    <Table.Cell className="shipping-type">
                      {packaging.replace(/_/g, ' ')}
                    </Table.Cell>
                  </Table.Row>
                ))
              }
            </Table.Body>
          </Table>
        </Segment>
      </Segment>
    );
  }
}

export default GetRates;
