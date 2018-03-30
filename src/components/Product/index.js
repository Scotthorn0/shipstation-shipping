import React from 'react';
import { Header, Segment, Grid, Image } from 'semantic-ui-react';
import Ship from '../Ship';
import img from './bears-paw.jpg';
import './styles.css';

const plantDescription = `
  Cotyledon ladismithensis - Bear's Paw: Small shrublet.
  Thick fuzzy leaves with toothed edge highlighted in dark red gives the appearance of a bear's paw.
  Part sun to part shade. Nice house plant.`;

const Product = () => (
  <Segment>
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Header
            content="Order your amazing Succulent"
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image size="large" src={img} />
        </Grid.Column>
        <Grid.Column width={8}>
          <Header content="Bear's Paw" />
          <Header sub content="Cotyledon ladismithensis" />
          <Segment basic>
            {plantDescription}
          </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <Ship />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);


export default Product;
