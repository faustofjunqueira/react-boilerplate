import { KeycloakProvider } from "@react-keycloak/web";
import React from "react";
import { Environment } from "../../config/environment";
import { KeycloakService } from "../../services/keycloak";

export const AuthProvider: React.FunctionComponent<{
  children: JSX.Element;
}> = ({ children }) => {
  const keycloakInstance = KeycloakService.createKeycloak();

  // const onKeycloakEvent = (event: any, error: any) => {
  //   console.log('onKeycloakEvent', event, error);
  // };

  // const onKeycloakTokens = (tokens: any) => {
  //   console.log('onKeycloakTokens', tokens);
  // };

  return (
    <KeycloakProvider
      keycloak={keycloakInstance}
      initConfig={Environment.keycloakInitConfig}
      // onEvent={onKeycloakEvent}
      // onTokens={onKeycloakTokens}
      LoadingComponent={
        <div>
          <p>autenticando!</p>
        </div>
      }
    >
      {children}
    </KeycloakProvider>
  );
};
