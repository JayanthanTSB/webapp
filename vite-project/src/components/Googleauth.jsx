import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { React, useEffect } from "react";

export const Googleauth = ({ getData }) => {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        const userData = {
          name: res.data.name,
          email: res.data.email,
          dob: "",
          mobile: "",
          sex: "",
          address: "",
          type: "G",
        };
        await adduser(userData);
      } catch (err) {
        console.log(err);
      }
    },
  });
  useEffect(() => {
    getData();
  }, []);
  const adduser = async (Data) => {
    try {
      const response = await axios.post(
        `https://sample-deploy-pgaw.onrender.com/users`,
        Data
      );

      console.log("adduser to db", response.request.status);
      var code = response.status;
      if (code == 400) {
        window.alert("User already exist!!!");
      } else if (code == 200) {
        window.alert("User added!!!");
      } else {
        window.alert("Error!!!");
      }
      getData();
    } catch (err) {
      console.error(err);
      window.alert("user already exist!!!");
    }
  };

  return (
    <button className="btn btn-outline-dark " onClick={() => login()}>
      Sign in with Google{" "}
    </button>
  );
};
export default Googleauth;
