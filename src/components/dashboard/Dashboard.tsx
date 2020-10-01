import { Layout } from "antd";
import React from "react";
import "./dashboard.less";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
const { Content } = Layout;

export const Dashboard: React.FC = ({ children }) => {
  return (
    <Layout className="dashboard-layout">
      <Topbar />
      <Layout>
        <Sidebar />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
