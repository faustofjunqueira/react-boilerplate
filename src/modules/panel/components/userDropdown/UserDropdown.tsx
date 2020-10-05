import { LogoutOutlined } from "@ant-design/icons";
import { useKeycloak } from "@react-keycloak/web";
import { Avatar, Dropdown, Menu } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { WaitData } from "../../../../components/waitData/WaitData";
import { PromiseData } from "../../../../hooks/promise";
import "./userDropdown.less";

export const UserDropdown: React.FC<{ userInfo:  PromiseData<any> }> = ({
  userInfo,
}) => {
  const { t } = useTranslation("panel");
  const history = useHistory();
  const [keycloak] = useKeycloak();

  const logout = () => keycloak.authenticated && history.push('/logout');
  const initialsName = userInfo.data?.name?.split(' ').map((x: string) => x[0]).join('').substring(0, 2);

  const menu = (
    <Menu>
      <Menu.Item>
          <a href="#logout" onClick={logout}>
            <LogoutOutlined /> {t("logout")}
          </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <WaitData noLoading loading={userInfo.loading} >
      <Dropdown overlay={menu}>
        <a href="#dropdown" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          <Avatar style={{ verticalAlign: "middle" }} gap={1}>
            {initialsName}
          </Avatar> {userInfo.data?.name}
        </a>
      </Dropdown>
    </WaitData>
  );
};
