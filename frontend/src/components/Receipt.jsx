import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/esm/Button'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from "../Services/Helper"

function Receipt() {
  const navigate = useNavigate()
  const host = BASE_URL;

  const [userDet, setUserDet] = useState({
    username: '',
    email: ''
  });
  const [vehicleDet, setVehicleDet] = useState({
    _id:'',
    vehicle_model_name: '',
    vehicle_company_name: '',
    vehicle_number: '',
    status:''
  })

  // Get data
  const handleLoad = async () => {
    try {
      const response1 = await fetch(`${host}/api/authentication/getuser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'car_tow_token': localStorage.getItem('car_tow_token')
        }
      });
      const json1 = await response1.json();
      console.log(json1);

      const response2 = await fetch(`${host}/api/cartow/fetchallvehicle`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'car_tow_token': localStorage.getItem('car_tow_token')
        }
      });
      const json2 = await response2.json();
      console.log(json2);

      setUserDet(json1);
      setVehicleDet(json2[json2.length-1]);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  useEffect(() => {
    handleLoad();
  }, []);

  //update status

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/cartow/updatevehicle/${vehicleDet._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
        "car_tow_token": localStorage.getItem("car_tow_token")
      },
      body: JSON.stringify({ status: "Finish" })
    });
    const json = await response.json()
    console.log(json)

    if(json){
      navigate("/Feedback");
    }
  }

  return (
    <>
      <Row className='text-white'>
        <Col lg={2}></Col>
        <Col lg={8} className='form'>
          <h4>Tow Booking Receipt</h4>
          <h6>Request Accepted</h6>
          <h6>Processing start</h6>
          <hr />
          <p>Username : {userDet.username}</p>
          <p>Email : {userDet.email}</p>
          <p>Vehicle : {vehicleDet.vehicle_number} {vehicleDet.vehicle_model_name} {vehicleDet.vehicle_company_name}</p>
          <p>Cost : 2000rs </p>
          <p><i>Press done after fulfill your request.</i></p>
          <hr />
          <Button variant="outline-light" style={{ marginRight: 5 }} onClick={handleSubmit} >
            Done
          </Button>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </>
  )
}

export default Receipt