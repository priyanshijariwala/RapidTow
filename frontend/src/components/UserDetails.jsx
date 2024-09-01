import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function UserDetails() {
  return (
    <>
    <div>
    <h4>UserDetails</h4>
    
    </div>
    <div>
          <Row>
            <Col sm={6}>
              <Form.Control type="text" placeholder="Username" />
            </Col>
            <Col sm={6}>
              <Form.Control type="email" placeholder="Email" />
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
              <Button type="submit">Edit</Button>
            </Col>
          </Form.Group>
    </div>
    </>
  )
}

export default UserDetails