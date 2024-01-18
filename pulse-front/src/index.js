import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import MainProvider from "./context/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <MainProvider>
        <App />
      </MainProvider>
    </HelmetProvider>
  </React.StrictMode>
);
