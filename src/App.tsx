import React from "react";
import { AuthProvider } from "./components/auth";
import { I18nProvider } from "./components/i18n/I18nProvider";
import { RouterApp } from "./Router";
import './style/theme.less';
import './style/global.less';

function App() {
  return (
    <div className="App">
      <I18nProvider>
        <AuthProvider>
          <RouterApp />
        </AuthProvider>
      </I18nProvider>
    </div>
  );
}

export default App;
