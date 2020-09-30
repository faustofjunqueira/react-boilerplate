import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { AuthLogin } from './AuthLogin';

export const PrivateRoute: React.FunctionComponent<RouteProps> = ({children, ...rest}) => {
  const [keycloak] = useKeycloak();
  console.log("keycloak.authenticated ", keycloak.authenticated);
  return (
    <Route {...rest}>
      {keycloak.authenticated ? children : (<AuthLogin />) }
    </Route>
  )
}
