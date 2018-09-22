import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import styled from 'styled-components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.label = 'Begin';
  }
  render() {
    return (
      <Root>
        <Content>
          <h1>WELCOME</h1>
          <Link to="/information">
            <Button label={this.label} />
          </Link>
        </Content>
      </Root>
    );
  }
}

export default Home;

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: red;
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  height: 20%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
