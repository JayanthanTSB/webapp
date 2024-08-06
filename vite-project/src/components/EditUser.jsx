import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

export const EditUser = ({ id, name, email, dob, mobile, sex, address }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    dob: "",
    mobile: "",
    sex: "",
    address: "",
  });

  useEffect(() => {
    setData({ name, email, dob, mobile, sex, address });
  }, [name, email, dob, mobile, sex, address]);

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const update = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        `https://sample-deploy-pgaw.onrender.com/users/${id}`,
        data
      );
      console.log("Fetched data:", res.data);
      window.location.reload();
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  return (
    <div className="modal fade" id="editUsers" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addUser">
              Update User
            </h1>
          </div>
          <form id="userForm" onSubmit={update}>
            <div className="modal-body">
              <div className="container">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={data.name}
                    required
                    name="name"
                    onChange={handleDataChange}
                  />
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    value={data.email}
                    name="email"
                    onChange={handleDataChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    id="dob"
                    onChange={handleDataChange}
                    value={data.dob}
                    required
                  />
                </div>
                <div className="my-3">
                  <input
                    type="number"
                    name="mobile"
                    className="form-control"
                    id="mobile"
                    onChange={handleDataChange}
                    placeholder="Mobile"
                    value={data.mobile}
                    required
                  />
                </div>
                <div className="d-flex">
                  <div className="input-text d-flex my-3">Gender</div>
                  <div className="form-check mx-4 my-3 d-inline">
                    <input
                      className="form-check-input"
                      name="sex"
                      value="F"
                      onChange={handleDataChange}
                      type="radio"
                      id="female"
                      checked={data.sex === "F"}
                    />
                    <label className="form-check-label" htmlFor="female">
                      F
                    </label>
                  </div>
                  <div className="form-check my-3 d-inline">
                    <input
                      className="form-check-input"
                      name="sex"
                      type="radio"
                      onChange={handleDataChange}
                      value="M"
                      id="male"
                      checked={data.sex === "M"}
                    />
                    <label className="form-check-label" htmlFor="male">
                      M
                    </label>
                  </div>
                </div>
                <div className="mb-3 my-3">
                  <textarea
                    className="form-control"
                    name="address"
                    placeholder="Address"
                    onChange={handleDataChange}
                    value={data.address}
                    id="address"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="addUserButton"
                className="btn btn-primary"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
