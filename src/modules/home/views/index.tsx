import React from "react";
import moment from "moment";
import logo from "../assets/logo.svg";
import './index.less';
import { Link } from "react-router-dom";

export const HomePage: React.FunctionComponent = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{moment().format("MMM Do YY")}</p>
      <p>
         Edit <code>src/App.tsx</code> and save to reload.
         <Link to="/example">Junda</Link>
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};
