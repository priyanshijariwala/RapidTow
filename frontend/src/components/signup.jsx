import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../style.css";

function Signup() {
  return (
    <>
      <div style={{ height: "60px", backgroundColor: "transparent" }}></div>
      <div className="signup">
        <Form className="form signup_form">
          <h3>SIGN UP</h3>
          <Row>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Username" />
            </Col>
            <Col sm={6}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
            <Col sm={6}>
              <Form.Control type="pasword" placeholder="Confirm Password" />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Fullname" />
            </Col>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Contact Number" />
            </Col>
            <Col sm={4}>
              <Form.Control type="date" placeholder="DOB" />
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
