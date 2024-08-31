import React from "react";

import Button from "react-bootstrap/Button";
import "../style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
// import { useState } from 'react';

import img_1 from "../image/rescuetruck_1.jpg";
import img_2 from "../image/rescuetruck_2.jpg";
import img_3 from "../image/rescuetruck_3.jpg";
import img_4 from "../image/rescuetruck_4.jpg";
import img_5 from "../image/rescuetruck_5.jpg";
import img_6 from "../image/rescuetruck_6.jpg";
import Signin from "./signin";
import Signup from "./signup";
import Profile from "./profile";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="title">
        <h1>Welcome To RapidTow!</h1>
        <h3>
          RoadSide Rescuers:When you need Help,We're <bold>On The Way.</bold>
        </h3>
        <h5>
          We are a well-equipped towing service avialable to hep with towing
          your vehicle 24*7 We provide a fast,affordable,friendly and reliable
          towing service.
        </h5>
      </div>
      <div id="top-services">
        <h4>Top Services</h4>
        <div className="d-flex align-items-center justify-content-center">
          <Row className="row ">
            <Col className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img_1} />
                <Card.Body>
                  <Card.Title>Rescue Rangers</Card.Title>
                  <Card.Text>Top rescue team for rescue.</Card.Text>
                  <Button variant="primary">Book</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="col">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={img_2} />
                <Card.Body>
                  <Card.Title>Emergency Tow</Card.Title>
                  <Card.Text>Provide fastest Tow</Card.Text>
                  <Button variant="primary">Book</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div id="local-provider">
        <h4>Local Providers</h4>
        <Row>
          <Col xs={4} md={3}>
            {/*  */}
            <Image src={img_3} thumbnail />
            <h6>Swift Tow</h6>
            <p>Gear Garrage.</p>
          </Col>
          <Col xs={4} md={3}>
            <Image src={img_4} thumbnail />
            <h6>Road Rescuers</h6>
            <p>Quick Fix Center. </p>
          </Col>
          <Col xs={4} md={3}>
            <Image src={img_5} thumbnail />
            <h6>Tow Titans</h6>
            <p>Auto Depot.</p>
          </Col>
          <Col xs={4} md={3}>
            <Image src={img_6} thumbnail />
            <h6>Rescue Me</h6>
            <p>Tow Zone.</p>
          </Col>
        </Row>
      </div>
      <div id="services">
        <h4>Services</h4>
        <Row>
          <Col>
            <p className="service">Tow</p>
          </Col>
          <Col>
            <p className="service">Assist</p>
          </Col>
          <Col>
            <p className="service">Help</p>
          </Col>
          <Col>
            <p className="service">Rescue</p>
          </Col>
          <Col>
            <p className="service">Support</p>
          </Col>
          <Col>
            <p className="service">6</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
