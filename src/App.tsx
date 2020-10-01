import "moment/locale/pt-br";
import React from "react";
import { AntdConfigProvider } from "./components/antd/AntdConfigProvider";
import { AuthProvider } from "./components/auth";
import { I18nProvider } from "./components/i18n/I18nProvider";
import { RouterApp } from "./Router";
import "./style/global.less";
import "./style/theme.less";

function App() {
  return (
    <div className="App">
      <I18nProvider>
        <AuthProvider>
          <AntdConfigProvider>
            <RouterApp />
          </AntdConfigProvider>
        </AuthProvider>
      </I18nProvider>
    </div>
  );
}

export default App;
