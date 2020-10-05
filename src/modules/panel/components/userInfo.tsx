import React, { useContext } from "react";
import JSONPretty from 'react-json-pretty';
import { PanelContext } from "../PanelProvider";

export const UserInfo = () => {
  const panelStore = useContext(PanelContext);

  return (
    <JSONPretty data={panelStore.data} />
  )
}
