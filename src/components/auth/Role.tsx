import { useKeycloak } from "@react-keycloak/web";
import React from "react";

export const Role: React.FC<{ realmRole?: string; role?: string }> = ({
  children,
  role,
  realmRole,
}) => {
  const [keycloak, initialized] = useKeycloak();

  if (realmRole && role) {
    throw new Error("You can just apply one role!");
  }

  let hasRole = true;
  if (initialized && !!keycloak.authenticated) {
    if (role) {
      hasRole = keycloak.hasResourceRole(role);
    }

    if (realmRole) {
      hasRole = keycloak.hasRealmRole(realmRole);
    }
  }
  let needLogin = initialized && !keycloak.authenticated;
  return (
    <>
      {!needLogin && hasRole && children}
    </>
  )
};
