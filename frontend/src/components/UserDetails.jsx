import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Profile from './profile';
import Image from "react-bootstrap/Image";
import White_update from "../icon/white_update.png";
import White_delete from "../icon/white_delete.png";

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
        headers: { 'Content-Type': 'Application/json', "car_tow_token": localStorage.getItem("car_tow_token") },
        body: JSON.stringify({
          username: userDet.username,
          email: userDet.email,
          password: userDet.password,
          fullname: userDet.fullname,
          contact_no: userDet.contact_no,
          DOB: userDet.DOB
        })
      });

      const json = await response.json();
      console.log(json);

      if (json.authtoken) {
        localStorage.setItem('car_tow_token', json.authtoken);
      }
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  //delete user account

  const handleDelete=async(e)=>{
    if (!userDet._id) {
      console.error('User ID is missing');
      return;
    }
    const response=await fetch(`${host}/api/authentication/deleteuser/${userDet._id}`,{
      method:"DELETE",
      headers: { 'Content-Type': 'Application/json', "car_tow_token": localStorage.getItem("car_tow_token") }
    });
    if({response}){

      setUserDet({
        username: '',
        email: '',
        fullname: '',
        contact_no: '',
        DOB: ''})
        
      };
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
                <Button variant='outline-light' style={{border:0}}>
                  <Image src={White_update} alt="Update" style={{ height: 20, width: 20 }} />
                </Button>
                <Button variant='outline-light' style={{border:0}}>
                  <Image src={White_delete} alt="Delete" style={{ height: 20, width: 20 }} onClick={handleDelete} />
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
                    <Button type="submit">Done</Button>
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
