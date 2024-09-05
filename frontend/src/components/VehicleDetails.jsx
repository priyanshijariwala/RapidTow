import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Profile from './profile';
import Image from "react-bootstrap/Image";
import Black_update from "../icon/black_update.png";
import Black_delete from "../icon/black_delete.png";
import { Navigate } from 'react-router-dom';

function VehicleDetails() {
  const host = "http://localhost:5000";

  const [userDet, setUserDet] = useState({
    _id: '',
    vehicle_model_name: '',
    vehicle_company_name: '',
    vehicle_number: ''
  });



  const handleLoad = async () => {
    try {
      const response = await fetch(`${host}/api/cartow/fetchallvehicle`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'car_tow_token': localStorage.getItem('car_tow_token')
        }
      });
      const json = await response.json();
      console.log(json[json.length - 1])
      setUserDet(json[json.length - 1])
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };


  useEffect(() => {
    handleLoad();
  }, []);

  //update details

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/cartow/updatevehicle/${userDet._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
        "car_tow_token": localStorage.getItem("car_tow_token")
      },
      body: JSON.stringify({ vehicle_model_name: userDet.vehicle_model_name, vehicle_company_name: userDet.vehicle_company_name, vehicle_number: userDet.vehicle_number })
    });
    const json = await response.json()
    console.log(json)
  }

  //delete vehicle details and booking
  const handleDelete = async (e) => {
    if (!userDet._id) {
      console.error('User ID is missing');
      return;
    }
    const response = await fetch(`${host}/api/authentication/deleteuser/${userDet._id}`, {
      method: "DELETE",
      headers: { 'Content-Type': 'Application/json', "car_tow_token": localStorage.getItem("car_tow_token") }
    });
    if ({ response }) {

      setUserDet({
        vehicle_model_name: '',
        vehicle_company_name: '',
        vehicle_number: ''
      })

    };
  };

  return (
    <>
      <Profile />
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <Form onSubmit={handleSubmit}>
            <div className='form'>
              <div>
                <h4>VehicleDetails</h4>
                <Button variant="light">
                  <Image src={Black_update} alt="Update" style={{ height: 30, width: 25 }} />
                </Button>
                <Button variant="light">
                  <Image src={Black_delete} alt="Delete" style={{ height: 30, width: 25 }} onClick={handleDelete} />
                </Button>
              </div>
              <div>
                <Row>
                  <Col sm={4}>
                    <Form.Control
                      type="text" name='vehicle_model_name'
                      placeholder="Vehicle model name"
                      value={userDet.vehicle_model_name || ''}  // Ensure a default empty string
                      onChange={(e) => setUserDet({ ...userDet, vehicle_model_name: e.target.value })}
                    />
                  </Col>
                  <Col sm={4}>
                    <Form.Control
                      type="text" name='vehicle_company_name'
                      placeholder="Vehicle company name"
                      value={userDet.vehicle_company_name || ''}  // Ensure a default empty string
                      onChange={(e) => setUserDet({ ...userDet, vehicle_company_name: e.target.value })}
                    />
                  </Col>
                  <Col sm={4}>
                    <Form.Control
                      type="text" name='vehicle_number'
                      placeholder="Vehicle number"
                      value={userDet.vehicle_number || ''}  // Ensure a default empty string
                      onChange={(e) => setUserDet({ ...userDet, vehicle_number: e.target.value })}
                    />

                  </Col>
                </Row>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 1 }}>
                    <Button type="submit">Edit</Button>
                  </Col>
                </Form.Group>
                <Button onClick={()=>{Navigate("/Receipt")}}>Receipt</Button>
              </div>
            </div>
          </Form>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </>
  );
}

export default VehicleDetails;
