import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../style.css';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
// import { useState } from 'react';




function Home() {


  return (
    <>
      <div className='main'>
        <div className="box"></div>
        <Navbar expand="lg" className="bg-body-tertiary navbar">
          <Container>

            <Navbar.Brand href="#home">RapidTow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className='navlink'>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#profile">Profile</Nav.Link>
                  <Button variant="dark">SignIn</Button>
                  <Button variant="light">SignUp</Button>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="title">
          <h1>Welcome To RapidTow!</h1>
          <h3>RoadSide Rescuers:When you need Help,We're <bold>On The Way.</bold></h3>
          <h5>We are a well-equipped towing service avialable to hep with towing your vehicle 24*7 We provide a fast,affordable,friendly and reliable towing service.</h5>


        </div>
      </div>
      <div id='top-services'>
        <h4>Top Services</h4>
        <div className='d-flex align-items-center justify-content-center'>
          <Row className='row '>
            <Col className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/image/rescuetruck_1.jpg" />
                <Card.Body>
                  <Card.Title>Rescue Rangers</Card.Title>
                  <Card.Text>
                    Top rescue team for rescue.
                  </Card.Text>
                  <Button variant="primary">Book</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='col'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../image/rescuetruck_2.jpg" />
                <Card.Body>
                  <Card.Title>Emergency Tow</Card.Title>
                  <Card.Text>
                    Provide fastest Tow
                  </Card.Text>
                  <Button variant="primary">Book</Button>
                </Card.Body>
              </Card>
            </Col>
            
          </Row>

        </div>
      </div>
      <div id='local-provider'>
        <h4>Local Providers</h4>
        <Row>
        <Col xs={4} md={3}>
          <Image src="../image/rescuetruck_3.jpg" rounded />
          <h6>Swift Tow</h6>
          <p>Gear Garrage.</p>
        </Col>
        <Col xs={4} md={3}>
          <Image src="./image/rescuetruck_4.jpg" roundedCircle />
          <h6>Road Rescuers</h6>
          <p>Quick Fix Center. </p>
        </Col>
        <Col xs={4} md={3}>
          <Image src="/image/rescuetruck_3.jpg" thumbnail />
          <h6>Tow Titans</h6>
          <p>Auto Depot.</p>
        </Col>
        <Col xs={4} md={3}>
          <Image src="image/rescuetruck_4.jpg" thumbnail />
          <h6>Rescue Me</h6>
          <p>Tow Zone.</p>
        </Col>
      </Row>
      </div>
      <div id='services'>
        <h4>Services</h4>
        <Row>
        <Col xs={3} md={2}>
          <p className='service'>Tow</p>
        </Col>
        <Col xs={3} md={2}>
          <p className='service'>Assist</p>
        </Col>
        <Col xs={3} md={2}>
          <p className='service'>Help</p>
        </Col>
        <Col xs={3} md={2}>
          <p className='service'>Rescue</p>
        </Col>
        <Col xs={3} md={2}>
          <p className='service'>Support</p>
        </Col>
        <Col xs={3} md={2}>
          <p className='service'>6</p>
        </Col>
      </Row>
      </div>
    </>
  )
}

export default Home