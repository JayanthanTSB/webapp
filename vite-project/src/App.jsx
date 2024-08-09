import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { React, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { AddUser } from "./components/AddUser";
import { DisplayUsers } from "./components/DisplayUsers";
import { Googleauth } from "./components/Googleauth";
import { Header } from "./components/Header";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   if (data.length != 0) {
  //     setLoading(false);
  //   }
  // }, []);

  const getData = async () => {
    setLoading(true);
    await axios.get("https://sample-deploy-pgaw.onrender.com/").then((res) => {
      setData(res.data.users);
      setLoading(false);
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
        {loading ? (
          <ClipLoader
            size={150}
            color={"#0D6EFD"}
            loading={loading}
            speedMultiplier={0.5}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <DisplayUsers data={data} getData={getData} />
        )}
      </div>
    </>
  );
};
// 694200651230-dm6tfpbg5os334bhh601ebk1h0jgvnl1.apps.googleusercontent.com live
// 993849645069-gosqu0l8k7jgsjp8it21t2ggdao0deoa.apps.googleusercontent.com local
export default App;
