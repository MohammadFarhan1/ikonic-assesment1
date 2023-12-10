import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/getUser/" + id).then((result) => {
      console.log(result);
      setName(result.data.name);
      setEmail(result.data.email);
      setAge(result.data.age);
    });
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/editUser/" + id, {
        name:Name,
        email:Email,
        age:Age,
      })
      .then((result) => console.log(result), navigate("/"))
      .catch((err) => console.error(err));
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2>Edit User</h2>
        <Form onSubmit={Update}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Age"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button variant="success" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditUser;
