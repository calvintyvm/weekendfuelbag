import React, { Component } from 'react';
import styled from 'styled-components';
import imageSchool from '../../assets/images/school.png';
import imageSports from '../../assets/images/sports.png';
import imageFood from '../../assets/images/food.png';
import imageFriends from '../../assets/images/friends.png';
import imageHealth from '../../assets/images/health.png';

class SelectContainer extends Component {
  render() {
    return (
      <Root>
        <h1>I am looking for resources for .....</h1>
        <Wrapper>
          <Selection>
            <SelectionImage
              src={imageSchool}
              onClick={() => {
                console.log('hello');
              }}
            />
            <h1>School</h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageSports}
              onClick={() => {
                console.log('hello');
              }}
            />
            <h1>School</h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageFood}
              onClick={() => {
                console.log('hello');
              }}
            />
            <h1>Food</h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageFriends}
              onClick={() => {
                console.log('hello');
              }}
            />
            <h1>Friends</h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageHealth}
              onClick={() => {
                console.log('hello');
              }}
            />
            <h1>Health</h1>
          </Selection>
        </Wrapper>
      </Root>
    );
  }
}

export default SelectContainer;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
  &:hover {
    h1 {
      color: #f5a623;
    }
  }
  h1 {
    transition: all 0.5s;
    color: white;
  }
`;

const SelectionImage = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

const Root = styled.div`
  width: 100%;
  h1 {
    width: 70%;
    margin: 0 auto;
  }
`;

const Wrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
