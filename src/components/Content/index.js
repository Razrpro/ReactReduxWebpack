import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import CafePage from "../../pages/CafePage";

const Content = ({
  user
}) => {
    return (
      <Switch>
        <Route
          exact
          path="/"
          component={MainPage}
        />
        <Route
          exact
          path="/cafe"
          component={CafePage}
        />
      </Switch>
    );
}

export default Content;
