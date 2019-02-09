import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LastLocationProvider } from "react-router-last-location";
//import styled, { ThemeProvider } from "styled-components";

//import FriendListApp from './FriendListApp';
import Content from './components/Content';

//const reducer = combineReducers(reducers);
//const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Router>
        <LastLocationProvider>
          <div> <h1>Menu</h1> </div>
          <Content />
        </LastLocationProvider>

      </Router>
    );
  }
}

const mapStateToProps = ({
  user
}) => ({
  user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
