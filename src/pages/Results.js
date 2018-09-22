import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from 'src/components/ListItem';
import ColumnContainer from 'src/components/ColumnContainer';
import FilterBar from 'src/components/FilterBar';
import LocationSearchInput from 'src/components/LocationSearchInput';

const listData = [
  {
    title: 'hello',
    list: 'hello',
  },
  {
    title: 'hello',
    list: 'hello',
  },
];

class Results extends Component {
  render() {
    return (
      <Root>
        <FilterBar />
        <LocationSearchInput />
        <ColumnContainer
          left={
            <ListContainer>
              <ListItem data={listData} />
            </ListContainer>
          }
          right={
            <InfoContainer>
              <h1>Bye</h1>
            </InfoContainer>
          }
        />
      </Root>
    );
  }
}

export default Results;

const Root = styled.div``;

const ListContainer = styled.div`
  width: 50%;
`;

const InfoContainer = styled.div`
  width: 50%;
`;
