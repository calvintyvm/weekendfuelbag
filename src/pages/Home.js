import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import styled from 'styled-components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.label = 'Start';
  }

  render() {
    return (
      <Root>
        <Content>
          <h1>Are you a student?</h1>
          <h1>We can help.</h1>
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
  background-image: url('/assets/images/happy.png');
  background-size: cover;
`;

const Content = styled.div`
  position: relative;
  top: 60%;
  transform: translateY(-50%);
  text-align: center;
  height: 20%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
  }
  button {
    margin-top: 50px;
    font-weight: bolder;
  }
`;
