import { useKeycloak } from "@react-keycloak/web";
import { Layout } from "antd";
import React, { useContext } from "react";
import { Brand } from "../../../components/brand/Brand";
import { UserDropdown } from "../components/userDropdown/UserDropdown";
import { PanelMenu } from "../Menu";
import { PanelContext } from "../PanelProvider";
import { PanelRouter } from "../Router";
import "./panel.less";
const { Content, Header, Sider } = Layout;

export const PanelPage: React.FC = () => {
  const {keycloak, initialized} = useKeycloak();
  const panelStore = useContext(PanelContext);

  if(!initialized || !keycloak?.authenticated) {
    return <></>;
  }

  return (
    <Layout className="panel-layout">
      <Sider>
        <Brand />
        <PanelMenu />
      </Sider>
      <Layout>
        <Header className="panel-header">
          {panelStore.data.userInfo && <UserDropdown userInfo={panelStore.data.userInfo} />}
        </Header>
        <Content>
          {JSON.stringify(panelStore.data)}
          <PanelRouter />
        </Content>
      </Layout>
    </Layout>
  );
};
