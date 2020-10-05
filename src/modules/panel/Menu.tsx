import { BuildOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd"
import React from "react"
import { Link, useRouteMatch } from "react-router-dom"

export const PanelMenu: React.FC<{theme?: "light" | "dark"}> = ({theme}) => {
  let { path } = useRouteMatch();
  return (
    <Menu mode="vertical" theme={theme}>
      <Menu.Item icon={<UserOutlined />}>
        <Link to={path}>UserInfo</Link>
      </Menu.Item>
      <Menu.Item icon={<BuildOutlined />}>
        <Link to={`${path}/graphql`}>Graphql</Link>
      </Menu.Item>
    </Menu>
  )
}
