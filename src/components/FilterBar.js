import React, { Component } from 'react';
import styled from 'styled-components';

class FilterBar extends Component {
  render() {
    return <Root />;
  }
}

export default FilterBar;

const Root = styled.div`
  width: 100%;
  height: 100px;
  background: green;
`;
