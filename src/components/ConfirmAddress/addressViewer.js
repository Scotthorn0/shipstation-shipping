import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';

const AddressViewer = ({ address }) => (
  <List>
    {
      Object.keys(address).map(key => (
        address[key] && key !== 'address_residential_indicator' ? <List.Item key={key}>{address[key]}</List.Item> : null))
    }
  </List>
);

AddressViewer.propTypes = {
  address: PropTypes.object,
};

export default AddressViewer;
