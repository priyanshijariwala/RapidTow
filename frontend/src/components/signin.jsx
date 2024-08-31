import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../style.css";

function Signin() {
  return (
    <>
        <div className="signin">
          <Form className="form ">
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
                <Form.Control type="email" placeholder="Email" />
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
                <Form.Control type="password" placeholder="Password" />
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
