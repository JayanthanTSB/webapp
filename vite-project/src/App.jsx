import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { AddUser } from "./components/AddUser";
import { DisplayUsers } from "./components/DisplayUsers";
import { Googleauth } from "./components/Googleauth";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="d-flex ">
          <AddUser /> <Googleauth />
        </div>
        <DisplayUsers />
      </div>
    </>
  );
};

export default App;
