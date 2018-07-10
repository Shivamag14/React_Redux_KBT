import React from "react";
import { Route, Switch, Router } from "react-router-dom";

import { PrivateRoute } from "./_components/index";

import { history } from "./_helpers";

import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { PageNotFound } from "./components/404";

export const AppRouteComponent = props => {
  const samePaths = ["/", "/home/reports", "/home/analytics"];

  return (
    <Router history={history}>
      <Switch>
        {samePaths.map((path, index) => (
          <PrivateRoute exact path={path} component={Home} key={index} />
        ))}
        <Route path={`/register`} component={Register} />
        <Route path={`/login`} component={Login} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};
