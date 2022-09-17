
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

export default function TeacherV() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://62c55935134fa108c24f3d4d.mockapi.io/profile")
      .then((data) => data.json())
      .then((response) => setData(response));
  };
  useEffect(() => {
    getData();
  }, []);

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
              </tr>
            );
          })}
        </tbody>
      </Table>
      
    </div>
  );
}
