import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { store } from "./store/store";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
