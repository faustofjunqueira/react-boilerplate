import { Layout } from "antd";
import React from "react";
import { PanelMenu } from "../Menu";
import { PanelRouter } from "../Router";
import "./panel.less";
const { Content, Header, Sider } = Layout;

export const PanelPage: React.FC = () => {
  return (
    <Layout className="panel-layout">
      <Sider>
        <PanelMenu />
      </Sider>
      <Layout>
        <Header>My Auth header</Header>
        <Content>
          <PanelRouter />
        </Content>
      </Layout>
    </Layout>
  );
};
