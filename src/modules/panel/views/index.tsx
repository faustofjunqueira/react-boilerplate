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
  const panelStore = useContext(PanelContext);
  return (
    <Layout className="panel-layout">
      <Sider>
        <Brand />
        <PanelMenu />
      </Sider>
      <Layout>
        <Header>
          <UserDropdown userInfo={panelStore.data.userInfo} />
        </Header>
        <Content>
          <PanelRouter />
        </Content>
      </Layout>
    </Layout>
  );
};
