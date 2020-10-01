import { RocketOutlined } from "@ant-design/icons";
import { Button, Layout, Space } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./index.less";

export const HomePage: React.FunctionComponent = () => {
  const {t} = useTranslation("home");

  return (
    <Layout>
      <Space>
        <p>
          Você está na Home do AllowmeId dashboard{" "}
          <strong>delete isso e use i18n! ;-)</strong>
        </p>
        <Link to="/panel">
          <Button type="link">
            {t('signin')}
          </Button>
        </Link>
        <Link to="">
          <Button type="primary" shape="round" icon={<RocketOutlined />}>
          {t('signup')}
          </Button>
        </Link>
      </Space>
    </Layout>
  );
};
