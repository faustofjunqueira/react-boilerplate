import React, { useContext } from "react";
import JSONPretty from 'react-json-pretty';
import { WaitData } from "../../../components/waitData/WaitData";
import { PanelContext } from "../PanelProvider";

export const UserInfo = () => {
  const panelStore = useContext(PanelContext);

  return (
    <>
      <WaitData loading={panelStore.data.userInfo.loading}>
          <p>User Info</p>
          <JSONPretty data={panelStore.data.userInfo.data} />
      </WaitData>
      <WaitData loading={panelStore.data.userProfile.loading}>
          <p>User Profile</p>
          <JSONPretty data={panelStore.data.userInfo.data} />
      </WaitData>
    </>
  )
}
