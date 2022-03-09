import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context /UserContext";
import { SearchProvider } from "./context /SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
