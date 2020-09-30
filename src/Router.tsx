import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import { PublicRoute } from "./components/auth/PublicRoute";
import { Page404 } from "./modules/errors/views/Page404";
import { HomePage } from "./modules/home/views";

// TODO: Create the sidebar routes (create menu extensions)
// TODO: Create the public routes
// TODO: Create the private routes
// TODO: Nested routes

export const RouterApp = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/">
        <HomePage />
      </PublicRoute>
      <PrivateRoute path="/example">example</PrivateRoute>
      <PublicRoute path="*">
        <Page404 />
      </PublicRoute>
    </Switch>
  </Router>
);
