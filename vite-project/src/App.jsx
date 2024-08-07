import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import { AddUser } from "./components/AddUser";
import { DisplayUsers } from "./components/DisplayUsers";
import { Googleauth } from "./components/Googleauth";
import { Header } from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios.get("https://sample-deploy-pgaw.onrender.com/").then((res) => {
      setData(res.data.users);
    });
  };

  return (
    <>
      <div className="container">
        <Header />
        <div className="d-flex ">
          <AddUser getData={getData} />
          <GoogleOAuthProvider clientId="993849645069-gosqu0l8k7jgsjp8it21t2ggdao0deoa.apps.googleusercontent.com">
            <Googleauth getData={getData} />
          </GoogleOAuthProvider>
        </div>
        <DisplayUsers data={data} getData={getData} />
      </div>
    </>
  );
};

export default App;
