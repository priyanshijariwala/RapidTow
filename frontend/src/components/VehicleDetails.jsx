import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Profile from './profile';
import Image from "react-bootstrap/Image";
import Black_update from "../icon/black_update.png";
import Black_delete from "../icon/black_delete.png";

function VehicleDetails() {
  const host = "http://localhost:5000";

  const [userDet, setUserDet] = useState({
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
      console.log(json);
  
      // Assuming json is an array and you want to set the first item
      if (Array.isArray(json) && json.length > 0) {
        setUserDet({
          vehicle_model_name: json[0].vehicle_model_name || '',
          vehicle_company_name: json[0].vehicle_company_name || '',
          vehicle_number: json[0].vehicle_number || ''
        });
      } else {
        // Handle case where no vehicles are returned or json is not an array
        setUserDet({
          vehicle_model_name: '',
          vehicle_company_name: '',
          vehicle_number: ''
        });
      }
    } catch (error) {
      console.error('Error fetching vehicle details:', error);
    }
  };
  
  
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Profile />
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <div className='form'>
            <div>
              <h4>VehicleDetails</h4>
              <Button variant="light">
                <Image src={Black_update} alt="Update" style={{ height: 30, width: 25 }} />
              </Button>
              <Button variant="light">
                <Image src={Black_delete} alt="Delete" style={{ height: 30, width: 25 }} />
              </Button>
            </div>
            <div>
              <Row>
                <Col sm={4}>
                <Form.Control
  type="text"
  placeholder="Vehicle model name"
  value={userDet.vehicle_model_name || ''}  // Ensure a default empty string
  onChange={(e) => setUserDet({ ...userDet, vehicle_model_name: e.target.value })}
/>
                </Col>
                <Col sm={4}>
                <Form.Control
  type="text"
  placeholder="Vehicle company name"
  value={userDet.vehicle_company_name || ''}  // Ensure a default empty string
  onChange={(e) => setUserDet({ ...userDet, vehicle_company_name: e.target.value })}
/>
                </Col>
                <Col sm={4}>
                <Form.Control
  type="text"
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
            </div>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </>
  );
}

export default VehicleDetails;
