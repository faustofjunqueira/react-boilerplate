import { useKeycloak } from "@react-keycloak/web";
import { KeycloakProfile } from "keycloak-js";
import React, { useEffect, useState } from "react";
import { debug } from "../../shared/log";

export interface IPanelStore {
  data: {
    userInfo: {}
    userProfile: KeycloakProfile
  }
}

export const PanelContext = (React.createContext({}) as any) as React.Context<IPanelStore>;

export const PanelProvider: React.FC = ({ children }) => {
  const [keycloak] = useKeycloak();
  const [userInfo, setUserInfo] = useState<{}>({});
  const [userProfile, setUserProfile] = useState<KeycloakProfile>({});

  useEffect(() => {
    debug(">> keycloak.authenticated=",keycloak.authenticated)
    if(keycloak.authenticated) {
      debug("loading users in keycloak");
      keycloak.loadUserProfile().then(setUserProfile);
      keycloak.loadUserInfo().then(setUserInfo);
    }
  }, [keycloak]);

  const value: IPanelStore = {
    data: {
      userProfile,
      userInfo
    }
  };

  return (
    <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
  );
};
