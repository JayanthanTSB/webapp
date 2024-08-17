import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { React, useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

      setTimeout(() => {
        toast.success("User added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }, 500);
      getData();
    } catch (error) {
      console.error(error);
      toast.error("User already exist", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <button className="btn btn-outline-dark " onClick={() => login()}>
        Sign in with Google{" "}
      </button>
    </>
  );
};
export default Googleauth;
