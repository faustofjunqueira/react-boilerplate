import "moment/locale/pt-br";
import React from "react";
import { AntdConfigProvider } from "./components/antd/AntdConfigProvider";
import { AuthProvider } from "./components/auth";
import { RouterApp } from "./Router";
import "./style/global.less";
import "./style/theme.less";

function App() {
  return (
    <div className="App">
      <AntdConfigProvider>
        <AuthProvider>
          <RouterApp />
        </AuthProvider>
      </AntdConfigProvider>
    </div>
  );
}

export default App;
