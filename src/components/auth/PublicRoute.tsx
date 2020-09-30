import React from "react";
import { Route, RouteProps } from "react-router-dom";

export const PublicRoute: React.FunctionComponent<RouteProps> = ({
  children,
  ...rest
}) => {
  return <Route {...rest}>{{ children }}</Route>;
};
