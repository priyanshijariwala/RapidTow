import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { loginSchema } from '../validation_schema';
import { toast } from 'react-toastify';
import {BASE_URL} from "../Services/Helper"

const initialValues = {
  email: "",
  password: "",
};

function Signin() {
  const navigate = useNavigate();
  const host = BASE_URL;
  
  const [btnDisable, setDisable] = useState(false)

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      try {
        setDisable(true)
        if (
          values.email === "admin@gmail.com" &&
          values.password === "admin@123"
        ) {
          console.log("If execute");
          navigate("/Admin_Home");
        }

        const response = await fetch(`${host}/api/authentication/login`, {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify({
            email: values.email,
            password: values.password,
          }),
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
          localStorage.setItem("car_tow_token", json.authtoken);
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
      }finally{
        setDisable(false)
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
      <div className="signin">
        <Form className="form " onSubmit={handleSubmit}>
          <h3 className="mt-3">SIGN IN</h3>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={3} className="form-label">
              Email
            </Form.Label>
            <Col sm={12}>
              <Form.Control
                type="email"
                id="email"
                value={values.email}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={3} className="form-label">
              Password
            </Form.Label>
            <Col sm={12}>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit" disabled={btnDisable} onClick={showToastMessage}>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default Signin;
