import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { React, useEffect } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
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

      console.log("adduser to db", response.request.status);
      var code = response.status;
      if (code == 400) {
        toast.err(response.data, {
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
      } else if (code == 200) {
        toast.success(response.data, {
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
      getData();
    } catch (err) {
      console.error(err);
      toast.error(response.data, {
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
    </>
  );
};
export default Googleauth;
