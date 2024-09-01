import React from 'react'
import Image from "react-bootstrap/Image";
import img_user from "../image/user.png";
import "../style.css";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import UserDetails from './UserDetails';
import VehicleDetails from './VehicleDetails';
import ChangePassword from './ChangePassword';
import Help from './Help';
import Feedback from './Feedback';

function profile() {
  return (
    <>
      <div className="profile">
        <div >
          <Image src={img_user} roundedCircle />
        </div>
        <div>
          <div className='profile_nav text-white'>
            <span>UserDetails</span>
            <span>VehicleDetails</span>
            <span>ChangePassword</span>
            <span>Help</span>
            <span>Feedback</span>
          </div>
        </div>
        {/* <div>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="form">
                <span>
                  <UserDetails />
                  <VehicleDetails /
                  <ChangePassword />
                  <Help />
                  <Feedback />
                </span>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div> */}
        <div>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="form">
                <span>
                  <UserDetails />

                </span>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="form">
                <span>
                  <VehicleDetails />

                </span>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="form">
                <span>
                  <ChangePassword />

                </span>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="form">
                <span>
                  <Help />
                </span>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="form">
                <span>
                  <Feedback />
                </span>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default profile