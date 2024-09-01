import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function VehicleDetails() {
  return (
    <>
    <div>
    <h4>VehicleDetails</h4>
    
    </div>
    <div>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Vehicle_model_name" />
            </Col>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Vehicle_company_name" />
            </Col>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Vehicle_number" />
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

export default VehicleDetails