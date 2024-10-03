import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Black_logout from "../icon/black_logout.png";
import BASE_URL from "../Services/Helper"

function Header() {
  const navigate = useNavigate();
  const [btnVis, setBtnVisible] = useState(true);

  useEffect(() => {
    // Check if the user is logged in by checking the token in localStorage
    const token = localStorage.getItem("car_tow_token");
    setBtnVisible(!token); // If token exists, buttons should be invisible
  }, [localStorage.getItem("car_tow_token")]); // Empty dependency array means this runs only once on component mount

  const btnLogoutClicked = () => {
    localStorage.removeItem("car_tow_token")
    navigate("/signin")
  }
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
                {btnVis && (
                  <>
                    <Button
                      variant="outline-light"
                      style={{marginRight:5}} 
                      hidden={localStorage.getItem("car_tow_token")?true:false}
                      onClick={() => navigate("/SignIn")}
                    >
                      SignIn
                    </Button>
                    <Button
                      variant="light" 
                      hidden={localStorage.getItem("car_tow_token")?true:false}
                      onClick={() => navigate("/SignUp")}
                    >
                      SignUp
                    </Button>
                  </>
                )}
                <Button
                  variant="light" hidden={localStorage.getItem("car_tow_token")?false:true} onClick={btnLogoutClicked}>
                  <Image src={Black_logout} alt="Logout" style={{ height: 30, width: 25 }} />
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