import { Layout } from "antd";
import React from "react";
import "./dashboard.less";
const { Header } = Layout;

export const Topbar: React.FC = ({ children }) => {
  return (
    <Header>
      My Toolbar
    </Header>
  );
};
