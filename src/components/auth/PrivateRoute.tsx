import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react';
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
      console.log("checked")
      hasRole = keycloak.hasResourceRole(role);
    }

    if(realmRole) {
      console.log("checked realm")
      hasRole = keycloak.hasRealmRole(realmRole);
    }
  }

  let mustRender = initialized;
  mustRender = mustRender && !!(keycloak.authenticated);
  mustRender = mustRender && hasRole;

  console.log("hasRole", hasRole)

  return initialized ? (
    <Route {...rest}>
      {!hasRole && (<Redirect to="/unauthorized" />)}
      {mustRender ? children : (<AuthLogin />) }
    </Route>
  ) :
  (<></>)
}
