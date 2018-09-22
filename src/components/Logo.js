import React from 'react';
import styled from 'styled-components';

import logo from 'src/assets/images/logo.svg';

export default () => {
  return <Logo src={logo} alt="" />;
};

const Logo = styled.img`
  height: 50px;
`;
