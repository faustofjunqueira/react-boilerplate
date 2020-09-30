import React from 'react';
import './App.css';
import { AuthenticationProvider } from './components/auth/AuthenticationProvider';
import { RouterApp } from './Router';

function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <RouterApp />
      </AuthenticationProvider>
    </div>
  );
}

export default App;
