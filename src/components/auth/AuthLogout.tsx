import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react';
import { debug } from '../../shared/log';

export const AuthLogout: React.FC<{redirect: string}> = ({redirect}) => {
  const [keycloak] = useKeycloak();

  useEffect(() => {
    debug("logout");
    keycloak.logout({redirectUri: window.location.origin + redirect})
  }, [keycloak, redirect]);

  return <></>;
}
