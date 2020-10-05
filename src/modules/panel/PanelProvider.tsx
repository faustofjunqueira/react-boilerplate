import { useKeycloak } from "@react-keycloak/web";
import { KeycloakProfile } from "keycloak-js";
import React from "react";
import { PromiseData, usePromise } from "../../hooks/promise";

export interface IPanelStore {
  data: {
    userInfo: PromiseData<{}>
    userProfile: PromiseData<KeycloakProfile>
  }
}

export const PanelContext = (React.createContext({}) as any) as React.Context<IPanelStore>;

export const PanelProvider: React.FC = ({ children }) => {
  const {keycloak, initialized} = useKeycloak();
  const userInfo = usePromise(initialized && keycloak?.authenticated ? () => keycloak.loadUserInfo() : undefined);
  const userProfile = usePromise(initialized && keycloak?.authenticated ? () => keycloak.loadUserProfile() : undefined);

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
