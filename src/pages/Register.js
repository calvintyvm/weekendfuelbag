import React, { Component } from 'react';
import styled from 'styled-components';
import InputContainer from 'src/components/Form/InputContainer';
import SelectContainer from 'src/components/Form/SelectContainer';
import Button from 'src/components/Button';

class Register extends Component {
  constructor(props) {
    super(props);
    this.label = 'Submit';
  }
  render() {
    return (
      <Root>
        <InputContainer />
        <SelectContainer />
        <Button label={this.label} />
      </Root>
    );
  }
}

export default Register;

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: #5a8fd9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  h1 {
    text-transform: uppercase;
  }
`;
