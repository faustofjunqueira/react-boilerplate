import React from "react";
import "./App.css";
import { AuthenticationProvider } from "./components/auth/AuthenticationProvider";
import { I18nProvider } from "./components/i18n/I18nProvider";
import { RouterApp } from "./Router";

function App() {
  return (
    <div className="App">
      <I18nProvider>
        <AuthenticationProvider>
          <RouterApp />
        </AuthenticationProvider>
      </I18nProvider>
    </div>
  );
}

export default App;
