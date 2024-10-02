import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../style.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const host = "http://localhost:5000"

  const [username, setUsername] = useState({ username: "" })
  const [email, setEmail] = useState({ email: "" })
  const [password, setPassword] = useState({ password: "" })
  const [cpassword, setCpassword] = useState({ cpassword: "" })
  const [fullname, setFullname] = useState({ fullname: "" })
  const [contact_no, setContact_no] = useState({ contact_no: "" })
  const [DOB, setDOB] = useState({ DOB: "" })

  const handleUsername = (e) => {
    setUsername({ username: e.target.value })
  }
  const handleEmail = (e) => {
    setEmail({ email: e.target.value })
  }
  const handlePassword = (e) => {
    setPassword({ password: e.target.value })
  }
  const handleCpassword = (e) => {
    setCpassword({ cpassword: e.target.value })
  }
  const handleFullname = (e) => {
    setFullname({ fullname: e.target.value })
  }
  const handleContact = (e) => {
    setContact_no({ contact_no: e.target.value })
  }
  const handleDOB = (e) => {
    setDOB({ DOB: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/authentication/createuser`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ username: username.username, email: email.email, password: password.password, fullname: fullname.fullname, contact_no: contact_no.contact_no, DOB: DOB.DOB })
      }
    );
    const json = await response.json()
    console.log(json)

    if (response.status === 400 && json.error) {
      alert(json.error); // Show error message to the user
    } else {
      console.log(json)
      localStorage.setItem('car_tow_token', json);
      navigate("/");
    }
  
  }
  
  return (
    <>
    <div style={{ height: "60px", backgroundColor: "transparent" }}></div>
    <div className="signup">
      <Form className="form signup_form" onSubmit={handleSubmit}>
        <h3>SIGN UP</h3>
        <Row>
          <Col sm={6}>
            <Form.Control type="text" placeholder="Username" name="username" onChange={handleUsername} />
          </Col>
          <Col sm={6}>
            <Form.Control type="email" placeholder="Email" name="email" onChange={handleEmail} />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handlePassword} />
          </Col>
          <Col sm={6}>
            <Form.Control type="password" placeholder="Confirm Password" name="cpassword" onChange={handleCpassword} />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Fullname" name="fullname" onChange={handleFullname} />
          </Col>
          <Col sm={4}>
            <Form.Control type="text" placeholder="Contact Number" name="contact_no" onChange={handleContact} />
          </Col>
          <Col sm={4}>
            <Form.Control type="date" placeholder="DOB" name="DOB" onChange={handleDOB} />
          </Col>
        </Row>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 1 }}>
            <Button type="submit">Sign Up</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  </>
);
}

export default Signup;
