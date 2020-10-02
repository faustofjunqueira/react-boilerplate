import { KeycloakProvider } from "@react-keycloak/web";
import React from "react";
import { Environment } from "../../config/environment";
import { KeycloakService } from "../../services/keycloak";
import { debug } from "../../shared/log";

export const AuthProvider: React.FunctionComponent<{
  children: JSX.Element;
}> = ({ children }) => {
  const keycloakInstance = KeycloakService.createKeycloak();
  const onKeycloakEvent = (event: any, error: any) => {
    debug('onKeycloakEvent', event, error);
  };

  const onKeycloakTokens = (tokens: any) => {
    debug('onKeycloakTokens', tokens);
  };

  return (
    <KeycloakProvider
      keycloak={keycloakInstance}
      initConfig={Environment.keycloakInitConfig}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
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
