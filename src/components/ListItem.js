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
            return this.props.result == index ? (
              <Container
                onClick={() => {
                  this.props.dispatch(setResult(index));
                }}
              >
                <Image src={value.image_url} />
                <Text>
                  <Title>
                    <h1>{index + 1}.</h1>
                    <h1>{value.name}</h1>
                  </Title>
                  <h1>{value.category}</h1>
                </Text>
              </Container>
            ) : (
              <SelectedContainer
                onClick={() => {
                  this.props.dispatch(setResult(index));
                }}
              >
                <Image src={value.image_url} />
                <Text>
                  <SelectedTitle>
                    <h1>{index + 1}.</h1>
                    <h1>{value.name}</h1>
                  </SelectedTitle>
                  <h1>{value.category}</h1>
                </Text>
              </SelectedContainer>
            );
          })}
      </Root>
    );
  }
}

export default connect(state => ({
  query: state.form.query,
  result: state.results.result,
}))(ListItem);

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  h1 {
    color: #5a8fd9 !important;
  }
`;

const Image = styled.img`
  height: 80%;
  width: 30%;
`;

const Root = styled.div``;

const SelectedTitle = styled.div`
  display: flex;
  h1 {
    color: #f5a623 !important;
  }
`;

const Title = styled.div`
  display: flex;
  h1 {
    color: white !important;
  }
`;

const Container = styled.div`
  border-bottom: 1px solid black;
  background: #f5a623;
  padding-left: 5%;
  height: 130px;
  width: 100%;
  align-items: center;
  h1 {
    color: black;
    text-transform: uppercase;
  }
  cursor: pointer;
  display: flex;
`;

const SelectedContainer = styled.div`
  padding-left: 5%;
  border-bottom: 1px solid black;
  height: 130px;
  width: 100%;
  align-items: center;
  h1 {
    color: black;
    text-transform: uppercase;
  }
  cursor: pointer;
  display: flex;
`;
