import React from "react";
import ReactDOM from "react-dom/client";
import AppTesting from "./AppTesting.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
