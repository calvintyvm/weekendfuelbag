import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Map from './Map';

class ListDescription extends Component {
  render() {
    const { data } = this.props;
    return (
      <Root>
        <Description>
          {data &&
            data.map((value, index) => {
              return this.props.result == index ? (
                <Container>
                  <Map mapLat={value.lat} mapLong={value.lon} />
                  <Text>
                    <Left>
                      <p>{value.address}</p>
                      <p>{value.email}</p>
                      <p>{value.phone}</p>
                      <p>{value.website}</p>
                    </Left>
                    <Right>
                      <h1>Services</h1>
                      <p>{value.description}</p>
                    </Right>
                  </Text>
                </Container>
              ) : null;
            })}
        </Description>
        <Contact>
          <h1>Connect With Them</h1>
          <input type="text" />
          <input type="text" />
        </Contact>
      </Root>
    );
  }
}

export default connect(state => ({
  result: state.results.result,
}))(ListDescription);

const Text = styled.div`
  display: flex;
`;

const Description = styled.div`
  height: 60vh;
  border: 1px solid black;
`;

const Contact = styled.div`
  height: 25%;
  background: #5a8fd9;
  margin-top: 5px;
  height: 22vh;
  display: flex;
  flex-direction: column;
  h1 {
    color: white !important;
  }
  input {
    width: 50%;
    height: 30px;
    margin-top: 20px;
  }
  align-items: center;
`;

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  h1 {
    color: black;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  width: 55%;
  padding-left: 10px;
  p:first-child {
    color: black;
  }
  p {
    margin-top: 10px;
    color: #5a8fd9;
    width: 90%;
  }
`;

const Right = styled.div`
  width: 45%;
  p {
    width: 90%;
  }
`;
