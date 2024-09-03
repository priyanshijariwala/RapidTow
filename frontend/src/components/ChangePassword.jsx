import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Profile from './profile';


function ChangePassword() {

  const host = "http://localhost:5000";

  // User Data 
  const [userDet, setUserDet] = useState();
  const [cpassowrd, setCpassword] = useState();

  //get password
  const handleLoad = async () => {
    try {
      const response = await fetch(`${host}/api/authentication/getuser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'car_tow_token': localStorage.getItem('car_tow_token')
        }
      });
      const json = await response.json();
      console.log(json);

      setUserDet(json) // Jo Simply set thai gayu ne array nu su kaam
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  //change password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userDet._id) {
        console.error('User ID is missing');
        return;
      }
      if (userDet?.password !== cpassowrd) {
        const response = await fetch(`${host}/api/authentication/updateuser/${userDet._id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'Application/json', "car_tow_token": localStorage.getItem("car_tow_token") },
          body: JSON.stringify({
            password: userDet?.npassword
          })
        });

        const json = await response.json();
        console.log(json);
      } else { console.log("New password and Confirm password is not same.") }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  console.log(cpassowrd, " - ", userDet?.password)
  return (
    <>
      <Profile />
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <div className='form'>
            <div >
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={4}>
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="password"
                      onChange={(e) => setCpassword(e.target.value)}
                      placeholder="Current Password" />

                  </Col>
                  <Col sm={4}>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="password"
                      onChange={(e) => setUserDet({ ...userDet, npassword: e.target.value })}
                      placeholder="New Password" />
                  </Col>
                  <Col sm={4}>
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                  </Col>
                  <Col sm={4}>
                    <Form.Control type="password"
                      onChange={(e) => setUserDet({ ...userDet, password: e.target.value })} placeholder="Confirm Password" />

                  </Col>
                  <Col sm={4}>
                  </Col>
                </Row>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 1 }}>
                    <Button type="submit">Change</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>

    </>
  )
}

export default ChangePassword