import React, { Component } from 'react';
import styled from 'styled-components';

class InputContainer extends Component {
  render() {
    return (
      <Root>
        <h1>I am </h1>
        <input type="text" />
        <h1>years old living in</h1>
        <input type="text" />
      </Root>
    );
  }
}

export default InputContainer;

const Root = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 100px;
  input {
    margin-left: 30px;
    margin-right: 30px;
  }
  h1 {
  }
`;
