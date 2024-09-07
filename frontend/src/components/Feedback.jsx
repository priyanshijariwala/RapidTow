import React from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Profile from './profile';

function Feedback() {

  return (
    <>
    <Profile/>
    <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <div className='form'>
        <div className="Feedback">
      <h4>FEEDBACK</h4>
      <Form>
      <Row>
            <Col sm={3}>
              
            </Col>
            <Col sm={6}>
              <Form.Control type="text" placeholder="You can tell us about your experiences" />
            </Col>
            <Col sm={3}>
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit">FeedBack</Button>
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

export default Feedback