import React, { Component } from 'react';
import styled from 'styled-components';

class ListItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Root>
        {data.map((value, index) => {
          return (
            <Container>
              <h1>{value.title}</h1>
              <h1>{value.list}</h1>
            </Container>
          );
        })}
      </Root>
    );
  }
}

export default ListItem;

const Root = styled.div``;

const Container = styled.div`
  border: 1px solid black;
  width: 100%;
`;
