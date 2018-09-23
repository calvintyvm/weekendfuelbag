import React from 'react';
import styled from 'styled-components';
import Location from '../assets/images/map-icon.png';

const Marker = props => {
  return <Wrapper src={Location} {...props} />;
};

export default Marker;

const Wrapper = styled.img`
  height: 20px !important;
  width: 40px !important;
`;
