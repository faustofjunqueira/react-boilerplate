import { Menu } from "antd"
import React from "react"
import { Link, useRouteMatch } from "react-router-dom"

export const PanelMenu: React.FC<{theme?: "light" | "dark"}> = ({theme}) => {
  let { path } = useRouteMatch();
  return (
    <Menu mode="vertical" theme={theme}>
      <Menu.Item>
        <Link to={path}>Raiz</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`${path}/:exampleId`}>filho!</Link>
      </Menu.Item>
    </Menu>
  )
}
