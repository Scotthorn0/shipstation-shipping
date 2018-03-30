import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import Product from '../Product';
import './styles.css';


const Home = () => (
  <Container>
    <Segment.Group>
      <Segment>
        <Header
          content="Welcome"
        />
      </Segment>
      <Segment>
        <Product />
      </Segment>
    </Segment.Group>
  </Container>
);


export default Home;
