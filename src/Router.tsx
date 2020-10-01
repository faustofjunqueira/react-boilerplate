import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./components/auth";
import { Page403 } from "./modules/errors/views/Page403";
import { Page404 } from "./modules/errors/views/Page404";
import { HomePage } from "./modules/home/views";
import { PanelPage } from "./modules/panel/views";

// TODO: lazy load of private routes

export const RouterApp = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/">
        <HomePage />
      </PublicRoute>
      <PrivateRoute path="/panel">
        <PanelPage />
      </PrivateRoute>
      <PublicRoute path="/unauthorized">
        <Page403 />
      </PublicRoute>
      <PublicRoute path="*">
        <Page404 />
      </PublicRoute>
    </Switch>
  </Router>
);
