import { Layout } from "antd";
import React, { useContext } from "react";
import { Brand } from "../../../components/brand/Brand";
import { useTheme } from "../../../hooks/theme";
import { UserDropdown } from "../components/userDropdown/UserDropdown";
import { PanelMenu } from "../Menu";
import { PanelContext } from "../PanelProvider";
import { PanelRouter } from "../Router";
import "./panel.less";
const { Content, Header, Sider } = Layout;

export const PanelPage: React.FC = () => {
  const panelStore = useContext(PanelContext);
  const { theme } = useTheme();

  return (
    <Layout className="panel-layout">
      <Header className="panel-header">
        <div>
          <div className="panel-header-left">
            <Brand />
          </div>
          <div className="panel-header-right">
            {panelStore.data.userInfo && (
              <UserDropdown userInfo={panelStore.data.userInfo} />
            )}
          </div>
        </div>
      </Header>
      <Layout>
        <Sider theme={theme}>
          <PanelMenu theme={theme} />
        </Sider>
        <Content className="panel-content">
          <PanelRouter />
        </Content>
      </Layout>
    </Layout>
  );
};
