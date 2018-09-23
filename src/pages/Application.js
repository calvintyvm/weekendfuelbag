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
        <PlaceCreateForm>
        </PlaceCreateForm>
      </Root>
    );
  }
}

export default Application;

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: red;
  
  display:flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;
