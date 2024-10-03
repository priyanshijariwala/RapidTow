import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Profile from './profile';
import BASE_URL from "../Services/Helper"

function ChangePassword() {

  const host = BASE_URL;

  // User Data 
  const [userDet, setUserDet] = useState({});
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  // Get user details
  const handleLoad = async () => {
    try {
      const token = localStorage.getItem('car_tow_token');
      if (!token) {
        setError("Token is missing. Please log in again.");
        return;
      }

      const response = await fetch(`${host}/api/authentication/getuser`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'car_tow_token': token,
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text(); // Read the error as text
        setError(`Error fetching user details: ${errorMessage}`);
        return;
      }

      const json = await response.json();
      setUserDet(json);
    } catch (error) {
      console.error('Error fetching user details:', error);
      setError("There was an issue fetching user details.");
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  // Change password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userDet._id) {
        console.error('User ID is missing');
        setError("User ID is missing.");
        return;
      }

      const response = await fetch(`${host}/api/authentication/changepass/${userDet._id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json', 
          'car_tow_token': localStorage.getItem('car_tow_token') 
        },
        body: JSON.stringify({
          confirm_password: confirmPassword,
          new_password: newPassword
        })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        setError(`Error updating password: ${errorMessage}`);
        return;
      }

      const json = await response.json();
      if (json.success) {
        console.log("Password changed successfully");
      } else {
        setError(json.error);
      }

    } catch (error) {
      console.error('Error updating user password:', error);
      setError("There was an issue updating the password.");
    }
  };

  return (
    <>
      <Profile />
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <div className='form'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                  <Form.Control 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Current Password" 
                  />
                </Col>
                <Col sm={4}></Col>
              </Row>
              <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                  <Form.Control 
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password" 
                  />
                </Col>
                <Col sm={4}></Col>
              </Row>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 1 }}>
                  <Button type="submit">Change</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </>
  )
}

export default ChangePassword;
