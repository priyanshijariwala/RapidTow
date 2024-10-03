import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { createVehicleSchema } from "../validation_schema";
import { toast } from "react-toastify";
import BASE_URL from "../Services/Helper"

import "../style.css";

const initialValues = {
  vehicle_model_name: "",
  vehicle_company_name: "",
  vehicle_number: "",
  old_destination: "",
  new_destination: "",
  payment_mode: "",
};

function Book() {
  const navigate = useNavigate();
  const host = BASE_URL;

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: createVehicleSchema,
    onSubmit: async (values, action) => {
      try {
        console.log("hey");
        const response = await fetch(`${host}/api/cartow/register`, {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            car_tow_token: localStorage.getItem("car_tow_token"),
          },
          body: JSON.stringify({
            vehicle_model_name: values.vehicle_model_name,
            vehicle_company_name: values.vehicle_company_name,
            vehicle_number: values.vehicle_number,
            old_destination: values.old_destination,
            new_destination: values.new_destination,
            payment_mode: values.payment_mode,
          }),
        });
        const json = await response.json();
        console.log(json);

        if (json) {
          toast.success("Successfully Booked Appointment !", {
            position: "top-center",
          });
          navigate("/Receipt");
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
    errorMessage.map((er) => {
      toast.warning(`${er}`, {
        position: "bottom-left",
      });
    });
  };

  return (
    <>
      <div style={{ height: "60px", backgroundColor: "transparent" }}></div>
      <div className="signup">
        <Form className="form signup_form" onSubmit={handleSubmit}>
          <h3 className="mt-3">Book</h3>
          <Row>
            <Col sm={6}>
              <Form.Control
                type="text"
                id="vehicle_model_name"
                name="vehicle_model_name"
                value={values.vehicle_model_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Vehicle_model_name"
              />
            </Col>
            <Col sm={6}>
              <Form.Control
                type="text"
                id="vehicle_company_name"
                name="vehicle_company_name"
                value={values.vehicle_company_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Vehicle_company_name"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control
                type="text"
                id="vehicle_number"
                name="vehicle_number"
                value={values.vehicle_number}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Vehicle_number"
              />
            </Col>
            <Col sm={6}>
              <Form.Control
                type="text"
                id="payment_mode"
                name="payment_mode"
                value={values.payment_mode}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Payment_Mode..Cash or Cheque"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Form.Control
                type="text"
                id="old_destination"
                value={values.old_destination}
                name="old_destination"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Old_Destination"
              />
            </Col>
            <Col sm={6}>
              <Form.Control
                type="text"
                id="new_destination"
                value={values.new_destination}
                name="new_destination"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="New_Destination"
              />
            </Col>
          </Row>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 1 }}>
              <Button type="submit" onClick={showToastMessage}>
                Book
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
export default Book;
