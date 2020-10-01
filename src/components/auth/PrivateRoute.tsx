import { useKeycloak } from '@react-keycloak/web';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthLogin } from './AuthLogin';


export interface PrivateRouteProps extends RouteProps{
  role?: string;
  realmRole?: string;
}

export const PrivateRoute: React.FunctionComponent<PrivateRouteProps> = ({children, role, realmRole, ...rest}) => {
  const [keycloak, initialized] = useKeycloak();

  if(realmRole && role) {
    throw new Error("You can just apply one role!");
  }

  let hasRole = true;
  if(initialized && !!(keycloak.authenticated)) {
    if(role) {
      hasRole = keycloak.hasResourceRole(role);
    }

    if(realmRole) {
      hasRole = keycloak.hasRealmRole(realmRole);
    }
  }

  let needLogin = initialized && !keycloak.authenticated;

  return initialized ? (
    <Route {...rest}>
      {!hasRole && (<Redirect to="/unauthorized" />)}
      {needLogin && <AuthLogin /> }
      {!needLogin && hasRole && children}
    </Route>
  ) :
  (<></>)
}
