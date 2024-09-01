import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Profile from './profile';


function ChangePassword() {
  return (
    <>
    <Profile/>
    <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <div className='form'>
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
        </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
      
    </>
  )
}

export default ChangePassword