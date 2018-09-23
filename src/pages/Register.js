import React, { Component } from 'react';
import styled from 'styled-components';
import InputContainer from 'src/components/Form/InputContainer';
import SelectContainer from 'src/components/Form/SelectContainer';
import Button from 'src/components/Button';
import { connect } from 'react-redux';
import { setQuery } from '../redux/form';
import { Link } from 'react-router-dom';

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
        <Link to="/results">
          <Button
            label={this.label}
            onClick={() => {
              this.props &&
                this.props.dispatch(
                  setQuery(
                    '?lat=' +
                      this.props.lat +
                      '&long=' +
                      this.props.long +
                      '&age=' +
                      this.props.age +
                      '&category=' +
                      this.props.category
                  )
                );
            }}
          />
        </Link>
      </Root>
    );
  }
}

export default connect(state => ({
  lat: state.form.latitude,
  long: state.form.longitude,
  age: state.form.age,
  category: state.form.category,
  query: state.form.query,
}))(Register);

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
