import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="694200651230-dm6tfpbg5os334bhh601ebk1h0jgvnl1.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
