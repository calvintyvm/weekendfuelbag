import React, { Component } from 'react';
import styled from 'styled-components';
import LocationSearchInput from 'src/components/LocationSearchInput';

class InputContainer extends Component {
  render() {
    return (
      <Root>
        <h1>I am </h1>
        <input type="text" />
        <h1>years old living in</h1>
        <LocationSearchInput />
      </Root>
    );
  }
}

export default InputContainer;

const Root = styled.div`
  input {
    height: 30px;
  }
  display: flex;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 100px;
  align-items: center;
  input {
    margin-left: 30px;
    margin-right: 30px;
  }
  position: relative;
`;
