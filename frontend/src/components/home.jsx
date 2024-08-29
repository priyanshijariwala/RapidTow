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
        <div className="line"></div>
      </div>

      <div>
        <Row className='row text-center'>
          <Col>
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
          <Col>
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
          {/* <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>

      </div>
    </>
  )
}

export default Home