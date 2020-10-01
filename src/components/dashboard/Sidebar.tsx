import { Layout } from "antd";
import React from "react";
import "./dashboard.less";
const { Sider } = Layout;

export const Sidebar: React.FC = ({ children }) => {
  return (
    <Sider>
      My Sidebar
    </Sider>
  );
};
