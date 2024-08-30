import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import '../style.css';


function Signin() {


    return (
        <>
            <div className='main'>
                <div className="box"></div>
                <Navbar expand="lg" className="bg-body-tertiary navbar">
                    <Container>
                    <Navbar.Brand className='text-white' href="#home">RapidTow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div style={{width : "100%"}} className='navlink'>
                <Nav style={{width : "100%", color : "white"}} className="me-auto d-flex align-items-center justify-content-between w-100">
                  <div className='d-flex '>
                    <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                    <Nav.Link className='text-white' href="#profile">Profile</Nav.Link>
                  </div>
                  <div className='d-flex'>
                    <Button variant="dark me-2">SignIn</Button>
                    <Button variant="light">SignUp</Button>
                  </div>
                </Nav>
              </div>
            </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div className="signin">

                    <Form className='form '>
                        <h3>SIGN IN</h3>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={3} className='form-label'>
                                Email
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={3} className='form-label'>
                                Password
                            </Form.Label>
                            <Col sm={12}>
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 1 }}>
                                <Button type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Signin