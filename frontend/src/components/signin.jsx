import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../style.css";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate()
  const host = "http://localhost:5000"

  const [email, setEmail] = useState({ "email": "" })
  const [password, setPassword] = useState({ "password": "" })

  const handleEmail = async (e) => {
    setEmail({ email: e.target.value })
  }
  const handlePassword = async (e) => {
    setPassword({ password: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (email.email==='admin@gmail.com' && password.password === 'admin@123') {
      console.log("If execute");
      navigate("/Admin_Home");
    }
    else {
      const response = await fetch(`${host}/api/authentication/login`, {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ email: email.email, password: password.password })
      });
      const json = await response.json()
      console.log(json)

      if (json.success) {
        localStorage.setItem('car_tow_token', json.authtoken);
        navigate("/")
      }
    }
  }

  return (
    <>
      <div className="signin">
        <Form className="form " onSubmit={handleSubmit}>
          <h3>SIGN IN</h3>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalEmail"
          >
            <Form.Label column sm={3} className="form-label">
              Email
            </Form.Label>
            <Col sm={12}>
              <Form.Control type="email" placeholder="Email" name="email" onChange={handleEmail} />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={3} className="form-label">
              Password
            </Form.Label>
            <Col sm={12}>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handlePassword} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default Signin;
