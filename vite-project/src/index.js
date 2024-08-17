import React from "react";
import ReactDOM from "react-dom/client";
import { Bounce, ToastContainer } from "react-toastify";
import App from "./App";
import { UserProvider } from "./userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App></App>
    </UserProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
    {/* Same as */}
    <ToastContainer />
  </React.StrictMode>
);
