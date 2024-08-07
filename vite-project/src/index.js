import React from "react";
import ReactDOM from "react-dom/client";
import { UserProvider } from "./userContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
