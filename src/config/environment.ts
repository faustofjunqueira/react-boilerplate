import { ApolloLink, createHttpLink } from "@apollo/client";
import { InitOptions } from "i18next";
import { KeycloakConfig, KeycloakInitOptions, KeycloakLoginOptions } from "keycloak-js";

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


  get keycloakLoginConfig(): KeycloakLoginOptions {
    return {
      scope: process.env.REACT_APP_KEYCLOAK_SCOPE as string,
    };
  },

  get i18nInitOptions() : InitOptions {
    return {
      fallbackLng: "en",
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
      detection: {
        order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      },
    }
  },

  get graphqlLink(): ApolloLink {
    return createHttpLink({
      uri: process.env.REACT_APP_GRAPHQL_BASE_URI
    })
  }

};
