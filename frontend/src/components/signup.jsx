import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "../style.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../validation_schema";
import { toast } from "react-toastify";
import { BASE_URL } from "../Services/Helper";

const initialValues = {
  username: "",
  email: "",
  fullname: "",
  contact_no: "",
  DOB: "",
  password: "",
};

function Signup() {
  const navigate = useNavigate();
  const host = BASE_URL;

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: async (values, action) => {
      try {
        if (
          values.email === "admin@gmail.com" &&
          values.password === "admin@123"
        ) {
          console.log("If execute");
          navigate("/Admin_Home");
        }

        const response = await fetch(`${host}/api/authentication/createuser`, {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            username: values.username,
            email: values.email,
            password: values.password,
            fullname: values.fullname,
            contact_no: values.contact_no,
            DOB: values.DOB,
          }),
        });
        const json = await response.json();
        console.log(json);

        if (json) {
          localStorage.setItem("car_tow_token", json);
          toast.success("Successfully Logged In !",{
            position : "top-center"
          });
          navigate("/");
        } else {
          toast.error(`${json.error}`, {
            position: "bottom-left",
          });
        }
      } catch (error) {
        console.error("Error occurred:", error.response.data.error);
        toast.error(`${error.response.data.error}`, {
          position: "bottom-left",
        });
      }

      action.resetForm();
    },
  });

  const errorMessage = Object.values(errors);

  const showToastMessage = () => {
    if (!localStorage.getItem("car_tow_token")) {
      errorMessage.map((er) => {
        toast.warning(`${er}`, {
          position: "bottom-left",
        });
      });
    }
  };

  return (
    <>
      <div style={{ height: "60px", backgroundColor: "transparent" }}></div>
      <div className="signup">
        <Form className="form signup_form" onSubmit={handleSubmit}>
          <h3 className="mt-3">SIGN UP</h3>
          <Row>
            <Col sm={6}>
              <Form.Control
                type="text"
                id="username"
                value={values.username}
                placeholder="Username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col sm={6}>
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                value={values.email}
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col sm={6}>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Fullname"
                name="fullname"
                id="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Contact Number"
                name="contact_no"
                value={values.contact_no}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="date"
                placeholder="DOB"
                name="DOB"
                value={values.DOB}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit" onClick={showToastMessage}>
                Sign Up
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default Signup;
