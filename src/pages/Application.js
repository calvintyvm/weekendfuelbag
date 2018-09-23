import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from 'src/components/Button';
import styled from 'styled-components';
import PlaceCreateForm from "src/components/PlaceCreateForm";

class Application extends Component {
  constructor(props) {
    super(props);
    this.label = 'Begin';
  }

  render() {
    return (
      <Root>
        <Content>
          <PlaceCreateForm>
          </PlaceCreateForm>
        </Content>
      </Root>
    );
  }
}

export default Application;

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
