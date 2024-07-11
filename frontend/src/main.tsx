import React from "react";
import ReactDOM from "react-dom/client";
import AppTesting from "./AppTesting.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTesting />
    </Provider>
  </React.StrictMode>
);
