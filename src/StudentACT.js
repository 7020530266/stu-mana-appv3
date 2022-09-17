import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

export default function StudentACT() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    address: ""
  });

  const handleSubmit = () => {
    if (id) {
      fetch("https://62c55935134fa108c24f3d4d.mockapi.io/profile/" + id, {
        method: "PUT",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((data) => data.json())
        .then((response) => navigate("/"));
    } else {
      fetch("https://62c55935134fa108c24f3d4d.mockapi.io/profile", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((data) => data.json())
        .then((response) => navigate("/"));
    }
  };
  const handleChange = (e) => {
    console.log(formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (id) {
      fetch("https://62c55935134fa108c24f3d4d.mockapi.io/profile/" + id)
        .then((data) => data.json())
        .then((response) => setFormData(response));
    }
  }, [id]);
  return (
    <Container>
      <h1>{id ? "Update" : "Create"} Profile</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            onChange={handleChange}
            value={formData.name}
            id="name"
            name="name"
            placeholder="Enter Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={handleChange}
            value={formData.email}
            id="email"
            name="email"
            placeholder="Enter Email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            onChange={handleChange}
            value={formData.username}
            id="username"
            name="username"
            placeholder="Enter Username"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            id="address"
            onChange={handleChange}
            value={formData.address}
            name="address"
            placeholder="Enter address"
            type="text"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}
