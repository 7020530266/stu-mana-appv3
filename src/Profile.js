import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Table } from "reactstrap";
import { FaPen, FaTrashAlt } from "react-icons/fa";
const Profile = () => {
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
      method: "DELETE"
    })
      .then((data) => data.json())
      .then((response) => getData());
  };
  return (
    <Container>
      <Button color="primary" onClick={() => navigate("/create")}>
        Create Profile
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>S NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Address</th>
            <th>Actions</th>
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
                  <Button
                    color="danger"
                    onClick={() => {
                      handleDelete(value.id);
                    }}
                  >
                    <FaTrashAlt />
                  </Button>
                  <Button
                    color="primary"
                    onClick={() => navigate("/create/" + value.id)}
                  >
                    <FaPen />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Profile;
