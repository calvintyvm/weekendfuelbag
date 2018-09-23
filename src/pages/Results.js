import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from 'src/components/ListItem';
import ColumnContainer from 'src/components/ColumnContainer';
import FilterBar from 'src/components/FilterBar';
import { connect } from 'react-redux';
import ListDescription from 'src/components/ListDescription';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    let that = this;
    fetch('http://localhost:8000/wfb/api/places/' + this.props.query)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const values = data;
        that.data = values.results;
      });
  }
  render() {
    let that = this;
    return (
      <Root>
        <FilterBar />
        <ColumnContainer
          left={
            <ListContainer>
              <ListItem data={that.data} />
            </ListContainer>
          }
          right={
            <InfoContainer>
              <ListDescription data={that.data} />
            </InfoContainer>
          }
        />
      </Root>
    );
  }
}

export default connect(state => ({
  query: state.form.query,
}))(Results);

const Root = styled.div`
  height: 100vh;
  position: relative;
`;

const ListContainer = styled.div`
  width: 50%;
  left: 0px;
  top: 100px;
  bottom: 0;
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const InfoContainer = styled.div`
  width: 50%;
  position: fixed;
  right: 0px;
  top: 100px;
`;
