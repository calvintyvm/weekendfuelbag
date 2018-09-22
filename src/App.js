import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import store from 'src/redux/store';
import 'src/styles/global';

import { prerenderStyles } from 'src/plugins/prerender';
import UpdateLanguage from 'src/plugins/language';

import Header from 'components/Header';

class App extends Component {
  componentDidMount() {
    prerenderStyles();
  }

  generateRoutes() {
    return process.env.__ROUTES__.map((route, index) => {
      const { path, component } = route;
      const Component = require(`src/${component}`).default;
      return <Route exact path={path} component={Component} key={index} />;
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route
            render={({ location }) => (
              <AppWrapper>
                <Header />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={500}
                    classNames="fade"
                  >
                    <Switch location={location}>{this.generateRoutes()}</Switch>
                  </CSSTransition>
                </TransitionGroup>
                <UpdateLanguage location={location} />
              </AppWrapper>
            )}
          />
        </Router>
      </Provider>
    );
  }
}

const AppWrapper = styled.div`
  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 0.5s;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 0.5s;
  }
`;

export default hot(module)(App);
