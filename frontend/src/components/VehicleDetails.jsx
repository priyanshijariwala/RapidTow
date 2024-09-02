import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Profile from './profile'
import Image from "react-bootstrap/Image";
import Black_update from "../icon/black_update.png";
import Black_delete from "../icon/black_delete.png";


function VehicleDetails() {
  return (
    <>
    <Profile/>
    <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <div className='form'>
        <div>
    <h4>VehicleDetails</h4>
    <Button variant="light" >
                    <Image src={Black_update} alt="Update" style={{height:30,width:25}}/>
                  </Button>
                  <Button variant="light"  >
                    <Image src={Black_delete} alt="Delete" style={{height:30,width:25}}/>
                  </Button>
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
        </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    
    </>
  )
}

export default VehicleDetails