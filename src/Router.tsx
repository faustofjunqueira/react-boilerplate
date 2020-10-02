import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthLogin, PrivateRoute } from "./components/auth";
import { AuthLogout } from "./components/auth/AuthLogout";
import { Page403 } from "./modules/errors/views/Page403";
import { Page404 } from "./modules/errors/views/Page404";
import { HomePage } from "./modules/home/views";
import { PanelProvider } from "./modules/panel/PanelProvider";
import { PanelPage } from "./modules/panel/views";

// TODO: lazy load of private routes

export const RouterApp = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/login">
        <AuthLogin />
      </Route>
      <Route exact path="/logout">
        <AuthLogout redirect="/"/>
      </Route>
      <PrivateRoute path="/panel">
        <PanelProvider>
          <PanelPage />
        </PanelProvider>
      </PrivateRoute>
      <Route path="/unauthorized">
        <Page403 />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  </Router>
);
