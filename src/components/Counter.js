import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { increment, decrement, reset } from '../redux/counter';

class Counter extends Component {
  handleClickIncrement = () => {
    this.props.increment();
  };

  handleClickDecrement = () => {
    this.props.decrement();
  };

  handleClickReset = () => {
    this.props.reset();
  };

  render() {
    return (
      <Root>
        <p>{this.props.count}</p>
        <button onClick={this.handleClickIncrement}>Increment</button>
        <button onClick={this.handleClickDecrement}>Decrement</button>
        <button onClick={this.handleClickReset}>Reset</button>
      </Root>
    );
  }
}

const Root = styled.div`
  button {
    margin: 0 15px;
  }
`;

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      decrement,
      reset,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
