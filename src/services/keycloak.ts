import { Environment } from "../config/environment";
import Keycloak, { KeycloakConfig } from "keycloak-js";

export const KeycloakService = {
  createKeycloak(config: KeycloakConfig = Environment.keycloakConfig) {
    return Keycloak(config);
  },
};
