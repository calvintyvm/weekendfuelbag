import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Map from './Map';
import imageComputer from '../assets/images/computer.png';
import imageEmail from '../assets/images/email.png';
import imagePhone from '../assets/images/phone.png';
import imageLocation from '../assets/images/marker.png';

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
                      <Info>
                        <Icon src={imageLocation} />
                        <p style={{ color: 'black' }}>{value.address}</p>
                      </Info>
                      <Info>
                        <Icon src={imageEmail} />
                        <p>{value.email}</p>
                      </Info>
                      <Info>
                        <Icon src={imagePhone} />
                        <p>{value.phone}</p>
                      </Info>
                      <Info>
                        <Icon src={imageComputer} />
                        <p>{value.website}</p>
                      </Info>
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
          <Input>
            <InputTitle>
              <h2>Email</h2>
            </InputTitle>
            <input type="text" />
          </Input>
          <Input>
            <InputTitle>
              <h2>Phone</h2>
            </InputTitle>
            <input type="text" />
          </Input>
        </Contact>
      </Root>
    );
  }
}

export default connect(state => ({
  result: state.results.result,
}))(ListDescription);

const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  p {
    color: #5a8fd9;
    width: 90%;
    padding-left: 10px;
  }
`;

const InputTitle = styled.div`
  width: 100px;
  height: 30px;
  background: #f5a623;
  margin-top: 20px;
  text-align: center;
  h2 {
    color: white !important;
  }
`;

const Input = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

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
    width: 100%;
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
`;

const Right = styled.div`
  width: 45%;
  p {
    width: 90%;
  }
`;
