import React from 'react';
import styled from 'styled-components';
import Location from '../assets/images/marker.png';

const Marker = props => {
  return <Wrapper src={Location} {...props} />;
};

export default Marker;

const Wrapper = styled.img`
  height: 50px !important;
  width: 80px !important;
`;
