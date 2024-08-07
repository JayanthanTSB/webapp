import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

export const AddUser = ({ getData }) => {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    dob: "",
    mobile: "",
    sex: "",
    address: "",
    type: "N",
  });

  const adduser = async (event) => {
    event.preventDefault();
    try {
      await axios
        .post(`https://sample-deploy-pgaw.onrender.com/users`, data)
        .then((res) => {
          getData();
          console.log("adduser to db", res.data);
          setData({
            name: "",
            email: "",
            dob: "",
            mobile: "",
            sex: "",
            address: "",
            type: "N",
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handledata = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    if (e.target.type === "radio") {
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
    console.log("sample", data);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary px-5 mx-5"
        data-toggle="modal"
        data-target="#addUser"
      >
        Add User
      </button>

      <div
        className="modal fade"
        id="addUser"
        aria-labelledby="addUser"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addUser">
                Add User
              </h1>
            </div>
            <form id="userForm" onSubmit={adduser}>
              <div className="modal-body">
                <div className="container">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      value={data.name}
                      name="name"
                      onChange={handledata}
                      required
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
                      onChange={handledata}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      id="dob"
                      onChange={handledata}
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
                      onChange={handledata}
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
                        onChange={handledata}
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
                        onChange={handledata}
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
                      onChange={handledata}
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
                  onClick={adduser}
                  type="button"
                  id="addUserButton"
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddUser;
