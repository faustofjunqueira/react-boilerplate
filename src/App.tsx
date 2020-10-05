import { ApolloProvider } from "@apollo/client";
import "moment/locale/pt-br";
import React from "react";
import { AntdConfigProvider } from "./components/antd/AntdConfigProvider";
import { AuthProvider } from "./components/auth";
import { RouterApp } from "./Router";
import { graphqlClient } from "./services/graphql";
import "./style/global.less";
import "./style/theme.less";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={graphqlClient}>
        <AuthProvider>
          <AntdConfigProvider>
            <RouterApp />
          </AntdConfigProvider>
        </AuthProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
