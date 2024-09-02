import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Black_logout from "../icon/black_logout.png";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking the token in localStorage
    const token = localStorage.getItem("car_tow_token");
    setIsLoggedIn(!!token); // Update isLoggedIn state based on token existence
  }, []); // Empty dependency array means this runs only once on component mount

  const handleLogout = () => {
    localStorage.removeItem("car_tow_token");
    setIsLoggedIn(false); // Update state to reflect that the user is logged out
    navigate("/signin");
  };

  return (
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
              <div className="d-flex">
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
                {!isLoggedIn && (
                  <>
                    <Button
                      variant="dark me-2"
                      onClick={() => navigate("/SignIn")}
                    >
                      SignIn
                    </Button>
                    <Button
                      variant="light"
                      onClick={() => navigate("/SignUp")}
                    >
                      SignUp
                    </Button>
                  </>
                )}
                {isLoggedIn && (
                  <Button
                    variant="light"
                    onClick={handleLogout}
                  >
                    <Image src={Black_logout} alt="Logout" style={{ height: 30, width: 25 }} />
                  </Button>
                )}
                <Button
                  variant="light"
                  onClick={() => navigate("/Admin_Signin")}
                  style={{ width: 45, height: 45, marginLeft: 10, marginRight: 10 }}
                >
                  A
                </Button>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
