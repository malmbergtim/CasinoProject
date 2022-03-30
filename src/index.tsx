import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context /UserContext";

import { SearchProvider } from "./context /SearchContext";

import { FavoritesProvider } from "./context /FavoritesContext";


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <SearchProvider>
        <FavoritesProvider>
        <App />
        </FavoritesProvider>
      </SearchProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
