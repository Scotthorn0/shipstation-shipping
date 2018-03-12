import React, { Component } from 'react';
import { Menu, Container, Header } from 'semantic-ui-react';
import Product from '../Product';
import Ship from '../Ship';
import './styles.css';

class Home extends Component {
  state = {
    activeItem: 'product'
  }

  handleMenuClick = (_, { name: activeItem }) => {
    this.setState({
      activeItem,
    })
  }

  renderChild = (activeItem) => (
    activeItem === 'product' ?
      <Product /> :
      <Ship />
  )

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Header
          content="Welcome"
        />
        <Menu tabular>
          <Menu.Item name="product" active={activeItem === "product"} onClick={this.handleMenuClick}/>
          <Menu.Item name="ship" active={activeItem === "ship"} onClick={this.handleMenuClick}/>
        </Menu>
        {this.renderChild(activeItem)}
      </Container>
    );
  }
}

export default Home;
