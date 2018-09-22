import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import styled from 'styled-components';
import ColumnContainer from 'src/components/ColumnContainer';

class Information extends Component {
  constructor(props) {
    super(props);
    this.label = 'Begin';
  }
  render() {
    return (
      <Root>
        <ColumnContainer
          left={
            <LeftContainer>
              <FamilyImage />
            </LeftContainer>
          }
          right={
            <RightContainer>
              <h1>
                We are here to help <br />
                students succeed.
              </h1>
              <Copy>
                We want students to be happy, healthy, engaged citizens that
                contribute to their communities.
              </Copy>
              <Copy>
                Are you looking for:
                <br />- Sports
                <br />- School
                <br />- Food
                <br />- Friends
                <br />- Health
              </Copy>
              <Link to="/register">
                <Button label={this.label} />
              </Link>
            </RightContainer>
          }
        />
      </Root>
    );
  }
}

export default Information;

const Copy = styled.p`
  color: white;
  font-size: 30px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const FamilyImage = styled.div`
  height: 500px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  background-image: url('/assets/images/family.png');
  background-size: contain;
  background-repeat: no-repeat;
`;

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: #5a8fd9;
`;

const LeftContainer = styled.div`
  width: 50%;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(25%);
`;

const RightContainer = styled.div`
  width: 50%;
  text-align: left;
  position: relative;
  top: 50%;
  transform: translateY(20%);
  h1 {
    font-size: 40px;
  }
`;
