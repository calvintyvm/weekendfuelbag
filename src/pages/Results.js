import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from 'src/components/ListItem';
import ColumnContainer from 'src/components/ColumnContainer';
import FilterBar from 'src/components/FilterBar';
import { connect } from 'react-redux';

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
        <button
          onClick={() => {
            console.log(that.data);
          }}
        >
          hello
        </button>
        <FilterBar />
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

export default connect(state => ({
  query: state.form.query,
}))(Results);

const Root = styled.div``;

const ListContainer = styled.div`
  width: 50%;
`;

const InfoContainer = styled.div`
  width: 50%;
`;
