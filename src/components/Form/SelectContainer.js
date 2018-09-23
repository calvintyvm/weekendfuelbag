import React, { Component } from 'react';
import styled from 'styled-components';
import imageSchool from '../../assets/images/school.png';
import imageSports from '../../assets/images/sports.png';
import imageFood from '../../assets/images/food.png';
import imageFriends from '../../assets/images/friends.png';
import imageHealth from '../../assets/images/health.png';
import { setCategory } from '../../redux/form';
import { connect } from 'react-redux';

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
                this.props.dispatch(setCategory('school'));
              }}
            />
            <h1
              style={
                this.props.category == 'school'
                  ? { color: '#f5a623' }
                  : { color: 'white' }
              }
            >
              School
            </h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageSports}
              onClick={() => {
                this.props.dispatch(setCategory('sport'));
              }}
            />
            <h1
              style={
                this.props.category == 'sport'
                  ? { color: '#f5a623' }
                  : { color: 'white' }
              }
            >
              Sports
            </h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageFood}
              onClick={() => {
                this.props.dispatch(setCategory('food'));
              }}
            />
            <h1
              style={
                this.props.category == 'food'
                  ? { color: '#f5a623' }
                  : { color: 'white' }
              }
            >
              Food
            </h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageFriends}
              onClick={() => {
                this.props.dispatch(setCategory('friends'));
              }}
            />
            <h1
              style={
                this.props.category == 'friends'
                  ? { color: '#f5a623' }
                  : { color: 'white' }
              }
            >
              Friends
            </h1>
          </Selection>
          <Selection>
            <SelectionImage
              src={imageHealth}
              onClick={() => {
                this.props.dispatch(setCategory('health'));
              }}
            />
            <h1
              style={
                this.props.category == 'health'
                  ? { color: '#f5a623' }
                  : { color: 'white' }
              }
            >
              Health
            </h1>
          </Selection>
        </Wrapper>
      </Root>
    );
  }
}
export default connect(state => ({
  category: state.form.category,
}))(SelectContainer);

const Selected = styled.h1`
  color: #f5a623;
`;

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
