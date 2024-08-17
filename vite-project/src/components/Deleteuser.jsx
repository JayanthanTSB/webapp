import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Deleteuser = (props) => {
  const onc = async () => {
    console.log(props.userId);

    const confirm = window.confirm(
      "Are you Sure you want to delete this user ?"
    );

    if (confirm) {
      await axios
        .delete(`https://sample-deploy-pgaw.onrender.com/users/${props.userId}`)
        .then((res) => {
          console.log("Deleted data :", props.userId);
          console.log("Response data:", res.data);
          props.getData();
          setTimeout(() => {
            toast.success("User deleted", {
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
          // props.getData();
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
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
      <button
        className="btn btn-danger delete-button px-1"
        style={{ width: "40%", height: " 35px" }}
        onClick={onc}
      >
        <i className="bi bi-trash-fill"></i>
      </button>
    </>
  );
};

export default Deleteuser;
