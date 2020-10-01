import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "../../components/auth";

export const PanelRouter = () => {

  let { path } = useRouteMatch();

  // https://reactrouter.com/web/example/nesting
  return (

    <Switch>
      <PrivateRoute exact path={path}>Raiz</PrivateRoute>
      <PrivateRoute exact path={`${path}/:exampleId`}>Subnivel</PrivateRoute>
    </Switch>
  );
}
