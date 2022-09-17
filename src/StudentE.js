
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function StudentE() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://62c55935134fa108c24f3d4d.mockapi.io/profile")
      .then((data) => data.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = (id) => {
    fetch("https://62c55935134fa108c24f3d4d.mockapi.io/profile/" + id, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((response) => getData());
  };
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>S NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Address</th>
            <th>Create</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.username}</td>
                <td>{value.address}</td>
                <td>
                  {" "}
                  <button
                    color="primary"
                    onClick={() => navigate("/StudentACT")}
                  >
                    Create Profile
                  </button>
                </td>
                <td>
                  <button
                    color="primary"
                    onClick={() => navigate("/StudentACT/" + value.id)}
                  >
                    <FaPen />
                  </button>
                </td>
                <td>
                  <button
                    color="danger"
                    onClick={() => {
                      handleDelete(value.id);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </td>              
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
