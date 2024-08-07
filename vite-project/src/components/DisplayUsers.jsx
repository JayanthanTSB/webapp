import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Deleteuser } from "./Deleteuser";
import { EditUser } from "./EditUser";

export const DisplayUsers = ({ data, getData }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  console.log(data);

  const handleAddUser = () => {
    getData();
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="py-3">
        <table className="table text-center">
          <thead>
            <tr>
              <th className="mx-2">Name</th>
              <th className="mx-2">Email</th>
              <th className="mx-2">DOB</th>
              <th className="mx-2">Mobile</th>
              <th className="mx-2">Gender</th>
              <th className="mx-2">Type</th>
              <th className="mx-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((users) => {
                console.log("Rendering user:", users);
                return (
                  <tr key={users.id}>
                    <td id="id" style={{ display: "none" }}>
                      {users.id}
                    </td>
                    <td className="text-uppercase">{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.dob}</td>
                    <td>{users.mobile}</td>
                    <td className="text-uppercase">{users.sex}</td>
                    <td className="text-uppercase" style={{ display: "none" }}>
                      {users.address}
                    </td>
                    <td className="text-uppercase">{users.type}</td>
                    <td className="d-flex">
                      <button
                        className="btn btn-primary"
                        type="button"
                        data-toggle="modal"
                        data-target="#editUsers"
                        onClick={() => handleEditUser(users)}
                        style={{ width: "40%", height: "35px" }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </button>
                      <Deleteuser
                        userId={users.id}
                        getData={getData}
                        handleAddUser={handleAddUser}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {selectedUser && <EditUser {...selectedUser} />}
      </div>
    </>
  );
};
export default DisplayUsers;
