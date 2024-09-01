import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function ChangePassword() {
  return (
    <>
      <div >
        <Form>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Form.Control type="password" placeholder="Current Password" />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Form.Control type="password" placeholder="New Password" />
            </Col>
            <Col sm={4}>
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
              <Form.Control type="password" placeholder="Confirm Password" />

            </Col>
            <Col sm={4}>
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit">Change</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default ChangePassword