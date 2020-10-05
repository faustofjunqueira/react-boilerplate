import "moment/locale/pt-br";
import React from "react";
import { AntdConfigProvider } from "./components/antd/AntdConfigProvider";
import { CustomApolloProvider } from "./components/apollo/CustomApolloProvider";
import { AuthProvider } from "./components/auth";
import { RouterApp } from "./Router";
import "./style/global.less";
import "./style/theme.less";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CustomApolloProvider>
          <AntdConfigProvider>
            <RouterApp />
          </AntdConfigProvider>
        </CustomApolloProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
