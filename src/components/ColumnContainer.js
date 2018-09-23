import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';

const ColumnContainer = ({ left, right }) => {
  return (
    <div>
      <Root>
        {left}
        {right}
      </Root>
    </div>
  );
};

export default ColumnContainer;

const Root = styled.div`
  position: relative;
  z-index: 991;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 90%;
  margin: 0 auto;
  @media (min-width: ${media.sm}) {
    align-items: center;
    width: 94%;
    flex-direction: row;
    justify-content: space-around;
  }
  @media (min-width: ${media.md}) {
    width: 100%;
  }
`;
