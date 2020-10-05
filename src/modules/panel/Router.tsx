import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute } from "../../components/auth";
import { GraphQlTest } from "./components/graphqltest";
import { UserInfo } from "./components/userInfo";

export const PanelRouter = () => {

  let { path } = useRouteMatch();

  // https://reactrouter.com/web/example/nesting
  return (
    <Switch>
      <PrivateRoute exact path={path}>
        <UserInfo />
      </PrivateRoute>
      <PrivateRoute exact path={`${path}/graphql`}>
        <GraphQlTest />
      </PrivateRoute>
    </Switch>
  );
}
