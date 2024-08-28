import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../style.css';



function home() {
  return (
    <>
    <div className='main'>
      <div className="box"></div>
      <Navbar expand="lg" className="bg-body-tertiary">
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
    
    </>
  )
}

export default home