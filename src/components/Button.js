import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  render() {
    const { label, onClick } = this.props;
    return <Root onClick={onClick}>{label}</Root>;
  }
}

export default Button;

const Root = styled.button`
  background: #f5a623;
  width: 151px;
  height: 45px;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0;
  color: white;
`;
