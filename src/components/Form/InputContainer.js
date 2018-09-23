import React, { Component } from 'react';
import styled from 'styled-components';
import LocationSearchInput from 'src/components/LocationSearchInput';
import { setAge } from '../../redux/form';
import { connect } from 'react-redux';

class InputContainer extends Component {
  render() {
    return (
      <Root>
        <h1>I am </h1>
        <input
          type="text"
          onChange={e => {
            this.props.dispatch(setAge(e.target.value));
            console.log(this.props.age);
          }}
        />
        <h1>years old living in</h1>
        <LocationSearchInput />
      </Root>
    );
  }
}

export default connect(state => ({
  age: state.form.age,
}))(InputContainer);

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
