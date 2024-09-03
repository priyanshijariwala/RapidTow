import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Profile from './profile';
import Image from "react-bootstrap/Image";
import Black_update from "../icon/black_update.png";
import Black_delete from "../icon/black_delete.png";

function UserDetails() {
  const host = "http://localhost:5000";

  const [userDet, setUserDet] = useState({
    username: '',
    email: '',
    fullname: '',
    contact_no: '',
    DOB: ''
  });

  // Get data
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
      if (json && json._id) { // Check if _id exists
        setUserDet({
          _id: json._id,
          username: json.username || '',
          email: json.email || '',
          fullname: json.fullname || '',
          contact_no: json.contact_no || '',
          DOB: json.DOB || ''
        });
      } else {
        console.error('No user ID returned');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  

  useEffect(() => {
    handleLoad();
  }, []);

  // Update data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!userDet._id) {
        console.error('User ID is missing');
        return;
      }
  
      const response = await fetch(`${host}/api/authentication/updateuser/${userDet._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          username: userDet.username,
          email: userDet.email,
          password: userDet.password,
          fullname: userDet.fullname,
          contact_no: userDet.contact_no,
          DOB: userDet.DOB
        })
      });
      const json2 = await response.json()
    console.log(json2)

  
      // if (!response.ok) {
        
      //   const errorText = await response.text(); // Get error response as text
      //   console.error('Error response:', errorText);
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }
  
      const json = await response.json();
      console.log(json);
      
      if (json.authtoken) {
        localStorage.setItem('car_tow_token', json.authtoken);
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };
  
  return (
    <>
      <Profile />
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <Form onSubmit={handleSubmit}>
            <div className='form'>
              <div>
                <h4>UserDetails</h4>
                <Button variant="light">
                  <Image src={Black_update} alt="Update" style={{ height: 30, width: 25 }} />
                </Button>
                <Button variant="light">
                  <Image src={Black_delete} alt="Delete" style={{ height: 30, width: 25 }} />
                </Button>
              </div>
              <div>
                <Row>
                  <Col sm={6}>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUserDet({ ...userDet, username: e.target.value })}
                      placeholder="Username"
                      name='username'
                      value={userDet.username}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="email"
                      onChange={(e) => setUserDet({ ...userDet, email: e.target.value })}
                      placeholder="Email"
                      name='email'
                      value={userDet.email}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={4}>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUserDet({ ...userDet, fullname: e.target.value })}
                      placeholder="Fullname"
                      name='fullname'
                      value={userDet.fullname}
                    />
                  </Col>
                  <Col sm={4}>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUserDet({ ...userDet, contact_no: e.target.value })}
                      placeholder="Contact Number"
                      name='contact_no'
                      value={userDet.contact_no}
                    />
                  </Col>
                  <Col sm={4}>
                    <Form.Control
                      type="date"
                      onChange={(e) => setUserDet({ ...userDet, DOB: e.target.value })}
                      placeholder="DOB"
                      name='DOB'
                      value={userDet.DOB}
                    />
                  </Col>
                </Row>

                <Form.Group as={Row} className="mb-3">
                  <Col sm={{ span: 10, offset: 1 }}>
                    <Button type="submit">Edit</Button>
                  </Col>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </>
  );
}

export default UserDetails;
