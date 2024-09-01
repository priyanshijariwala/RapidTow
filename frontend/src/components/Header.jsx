import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar w-100 top-0"
        style={{ backgroundColor: "transparent" }}
      >
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            RapidTow
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{ width: "100%" }} className="navlink">
              <Nav
                style={{ width: "100%", color: "white" }}
                className="me-auto d-flex align-items-center justify-content-between w-100"
              >
                <div className="d-flex ">
                  <Nav.Link
                    className="text-white"
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="text-white"
                    onClick={() => navigate("/Profile")}
                  >
                    Profile
                  </Nav.Link>
                </div>
                <div className="d-flex">
                  <Button
                    variant="dark me-2" onClick={() => navigate("/SignIn")}>
                    SignIn
                  </Button>
                  <Button variant="light" onClick={() => navigate("/SignUp")}>
                    SignUp
                  </Button>
                  <Button variant="light" onClick={() => navigate("/Admin_Signin")} style={{width:30,height:30,borderRadius:50,marginLeft:20}}>
                    A
                  </Button>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
