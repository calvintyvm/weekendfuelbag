import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setResult } from '../redux/results';

class ListItem extends Component {
  render() {
    const { data } = this.props;
    return (
      <Root>
        {data &&
          data.map((value, index) => {
            return (
              <Container
                onClick={() => {
                  this.props.dispatch(setResult(index));
                }}
              >
                <Image src={value.image_url} />
                {console.log(value)}
                <Text>
                  <Title>
                    <h1>{index + 1}.</h1>
                    <h1>{value.name}</h1>
                  </Title>
                  <h1>{value.category}</h1>
                </Text>
              </Container>
            );
          })}
      </Root>
    );
  }
}

export default connect(state => ({
  query: state.form.query,
}))(ListItem);

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;

const Root = styled.div``;

const Title = styled.div`
  display: flex;
`;

const Container = styled.div`
  border: 1px solid black;
  height: 130px;
  width: 100%;
  h1 {
    color: black;
    text-transform: uppercase;
  }
  cursor: pointer;
  display: flex;
`;
