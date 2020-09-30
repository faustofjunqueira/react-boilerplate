import { useKeycloak } from '@react-keycloak/web';
import React, { useEffect } from 'react';

export const AuthLogin = () => {
  const [keycloak] = useKeycloak();
  useEffect(() => {
    console.log("invocando login")
    keycloak.login();
  }, []);
  return <></>;
}
