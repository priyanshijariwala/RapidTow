import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../style.css";

function book() {
  return (
    <>
    <p>booking on </p>
      <div style={{ height: "60px", backgroundColor: "transparent" }}></div>
      <div className="signup">
        <Form className="form signup_form">
          <h3>SIGN UP</h3>
          <Row>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Vehicle_model_name" />
            </Col>
            <Col sm={6}>
              <Form.Control type="email" placeholder="Vehicle_company_name" />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control type="password" placeholder="Vehicle_number" />
            </Col>
            <Col sm={6}>
              <Form.Control type="pasword" placeholder="Payment_Mode..Cash or Cheque" />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Old_Destination" />
            </Col>
            <Col sm={6}>
              <Form.Control type="text" placeholder="New_Destination" />
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit">Book</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default book;
