import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Black_update from "../icon/black_update.png";
import Black_delete from "../icon/black_delete.png";
import { useNavigate } from "react-router-dom";

import "../style.css";

function Book() {
  const navigate = useNavigate();
  const host = "http://localhost:5000"

  const [vehicle_model_name, setModel] = useState({ vehicle_model_name: "" })
  const [vehicle_company_name, setCompany] = useState({ vehicle_company_name: "" })
  const [vehicle_number, setNumber] = useState({ vehicle_number: "" })
  const [old_destination, setOdestination] = useState({ old_destination: "" })
  const [new_destination, setNdestination] = useState({ new_destination: "" })
  const [payment_mode, setPmode] = useState({ payment_mode: "" })

  const handleModel = (e) => {
    setModel({ vehicle_model_name: e.target.value })
  }
  const handleCompany = (e) => {
    setCompany({ vehicle_company_name: e.target.value })
  }
  const handleNumber = (e) => {
    setNumber({ vehicle_number: e.target.value })
  }
  const handleOdestination = (e) => {
    setOdestination({ old_destination: e.target.value })
  }
  const handleNdestination = (e) => {
    setNdestination({ new_destination: e.target.value })
  }
  const handlePmode = (e) => {
    setPmode({ payment_mode: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/cartow/register`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json', 'car_tow_token': localStorage.getItem("car_tow_token") },
        body: JSON.stringify({ vehicle_model_name: vehicle_model_name.vehicle_model_name, vehicle_company_name: vehicle_company_name.vehicle_company_name, vehicle_number: vehicle_number.vehicle_number, old_destination: old_destination.old_destination, new_destination: new_destination.new_destination, payment_mode: payment_mode.payment_mode })
      }
    );
    const json = await response.json()
    console.log(json)

    if (json) {
      localStorage.setItem('car_tow_token', json);
      navigate("/")
    }
  }

  return (
    <>
      <p>booking on </p>
      <div style={{ height: "60px", backgroundColor: "transparent" }}></div>
      <div className="signup">
        <Form className="form signup_form" onSubmit={handleSubmit}>
          <h3>Book</h3>
          <Button variant="light" >
            <Image src={Black_update} alt="Update" style={{ height: 30, width: 25 }} />
          </Button>
          <Button variant="light"  >
            <Image src={Black_delete} alt="Delete" style={{ height: 30, width: 25 }} />
          </Button>
          <Row>
            <Col sm={6}>
              <Form.Control type="text" name="vehicle_model_name" onChange={handleModel} placeholder="Vehicle_model_name" />
            </Col>
            <Col sm={6}>
              <Form.Control type="text" name="vehicle_company_name" onChange={handleCompany} placeholder="Vehicle_company_name" />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control type="text" name="vehicle_number" onChange={handleNumber} placeholder="Vehicle_number" />
            </Col>
            <Col sm={6}>
              <Form.Control type="text" name="payment_mode" onChange={handlePmode} placeholder="Payment_Mode..Cash or Cheque" />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control type="text" name="old_destination" onChange={handleOdestination} placeholder="Old_Destination" />
            </Col>
            <Col sm={6}>
              <Form.Control type="text" name="new_destination" onChange={handleNdestination} placeholder="New_Destination" />
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit">Book</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default Book;
