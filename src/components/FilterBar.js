import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import imageBack from '../assets/images/back.png';
import { Link } from 'react-router-dom';

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.label = '<';
  }
  render() {
    return (
      <Root>
        <Link to="/register">
          <img src={imageBack} />
        </Link>
        <h1>Your Results</h1>
      </Root>
    );
  }
}

export default FilterBar;

const Root = styled.div`
  align-items: center;

  img {
    height: 50px;
    margin-left: 50px;
  }
  button {
    font-size: 30px;
    height: 60px;
    margin-left: 50px;
  }
  width: 100%;
  height: 100px;
  background: #5a8fd9;
  display: flex;
  h1 {
    font-size: 50px;
    margin: 0 auto;
    padding-right: 90px;
  }
`;
