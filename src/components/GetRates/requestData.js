export default {
  shipment: {
    validate_address: 'no_validation',
    ship_to: {
      name: 'Mickey and Minnie Mouse',
      phone: '714-781-4565',
      company_name: 'The Walt Disney Company',
      address_line1: '500 South Buena Vista Street',
      city_locality: 'Burbank',
      state_province: 'CA',
      postal_code: '91521',
      country_code: 'US',
    },
    ship_from: {
      name: 'Dade Murphy',
      phone: '512-485-4282',
      company_name: 'Zero Cool',
      address_line1: '345 Chambers Street',
      address_line2: 'Suite 100',
      city_locality: 'New York City',
      state_province: 'NY',
      postal_code: '10282',
      country_code: 'US',
    },
    packages: [
      {
        weight: {
          value: 32.0,
          unit: 'ounce',
        },
      },
    ],
  },
  rate_options: {
    carrier_ids: [
      'se-226611',
    ],
  },
};
