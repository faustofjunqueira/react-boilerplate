import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react';
import { Environment } from '../../config/environment';
import { debug } from '../../shared/log';

export const AuthLogin = () => {
  const [keycloak] = useKeycloak();

  useEffect(() => {
    debug("login", Environment.keycloakLoginConfig);
    keycloak.login(Environment.keycloakLoginConfig);
  }, [keycloak]);

  return <></>;
}
