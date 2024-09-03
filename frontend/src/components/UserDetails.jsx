import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Profile from './profile'
import Image from "react-bootstrap/Image";
import Black_update from "../icon/black_update.png";
import Black_delete from "../icon/black_delete.png";
import { useNavigate } from 'react-router-dom'


function UserDetails() {

  const navigate = useNavigate();
  const host = "http://localhost:5000"

  const [userDet, setUserDet] = useState()

  const handleLoad = async () => {
    const response = await fetch(`${host}/api/authentication/getuser`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'car_tow_token': localStorage.getItem('car_tow_token')
        }
      }
    );
    const json = await response.json()
    console.log(json)
    setUserDet(json)
  }

  useEffect(() => {
    handleLoad()
  }, [])

  return (
    <>
      <Profile />
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <div className='form'>
            <div>
              <h4>UserDetails</h4>
              <Button variant="light" >
                <Image src={Black_update} alt="Update" style={{ height: 30, width: 25 }} />
              </Button>
              <Button variant="light"  >
                <Image src={Black_delete} alt="Delete" style={{ height: 30, width: 25 }} />
              </Button>
            </div>
            <div>
              
              <Row>
                <Col sm={6}>
                  <Form.Control type="text" placeholder="Username" value={userDet?.username} disabled={true}/>
                </Col>
                <Col sm={6}>
                  <Form.Control type="email" placeholder="Email" value={userDet?.email} disabled={true}/>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <Form.Control type="text" placeholder="Fullname" value={userDet?.fullname} disabled={true}/>
                </Col>
                <Col sm={4}>
                  <Form.Control type="text" placeholder="Contact Number" disabled={true} value={userDet?.contact_no}/>
                </Col>
                <Col sm={4}>
                  <Form.Control type="date" placeholder="DOB" value={userDet?.DOB} disabled={true}/>
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

export default UserDetails