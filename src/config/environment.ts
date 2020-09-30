import { KeycloakConfig, KeycloakInitOptions } from "keycloak-js";

export const Environment = {
  get keycloakConfig(): KeycloakConfig {
    return {
      realm: process.env.REACT_APP_KEYCLOAK_REALM as string,
      url: process.env.REACT_APP_KEYCLOAK_URL as string,
      clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID as string,
    };
  },

  get keycloakInitConfig(): KeycloakInitOptions {
    return {
      onLoad: "check-sso",
      pkceMethod: "S256",
    };
  },
};
