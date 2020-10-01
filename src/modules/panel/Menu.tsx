import { Menu } from "antd"
import React from "react"
import { Link, useRouteMatch } from "react-router-dom"

export const PanelMenu: React.FC = () => {
  let { path } = useRouteMatch();
  return (
    <Menu mode="vertical" theme={"dark"}>
      <Menu.Item>
        <Link to={path}>Raiz</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`${path}/:exampleId`}>filho!</Link>
      </Menu.Item>
    </Menu>
  )
}
