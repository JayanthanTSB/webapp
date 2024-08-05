import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

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
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    }
  };

  return (
    <button
      className="btn btn-danger delete-button px-1"
      style={{ width: "40%", height: " 35px" }}
      onClick={onc}
    >
      <i className="bi bi-trash-fill"></i>
    </button>
  );
};
