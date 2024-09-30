import React,{useState} from 'react'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Profile from './profile';
import { Navigate, useNavigate } from 'react-router-dom';

function Feedback() {
  const host="http://localhost:5000";
  const navi = useNavigate();
  const[feedback,setFeedback]=useState({'feedback':''})

  const handleFeedback=async(e)=>{
    setFeedback({'feedback':e.target.value});
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:5000/api/feedbacks/give_feedback",{
        method:'POST',
        headers:{'Content-Type':'Application/json','car_tow_token':localStorage.getItem('car_tow_token')},
        body: JSON.stringify({ feedback: feedback.feedback })
      });
      const json = await response.json();
      console.log(json);
      navi("/")
    }catch{
      console.log("catch execute");
    }
  }
  return (
    <>
    <Profile/>
    <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
        <div className='form'>
        <div className="Feedback">
      <h4>FEEDBACK</h4>
      <Form onSubmit={handleSubmit}>
      <Row>
            <Col sm={3}>
              
            </Col>
            <Col sm={6}>
              <Form.Control type="text" onChange={handleFeedback} placeholder="You can tell us about your experiences" />
            </Col>
            <Col sm={3}>
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit">FeedBack</Button>
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

export default Feedback