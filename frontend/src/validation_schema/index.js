import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email !!!")
    .required("Email is required field.")
    .transform((value) => value.toLowerCase()),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required field."),
});

export const signupSchema = Yup.object({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Username is required field."),
  fullname: Yup.string()
    .min(5, "FullName must be at least 5 characters"),
  email: Yup.string()
    .email("Invalid Email !!!")
    .required("Email is required field.")
    .transform((value) => value.toLowerCase()),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required."),
  contact_no: Yup.string()
    .matches(/^\d{10}$/, "PersonalNumber must be a 10-digit number")
    .required("PersonalNumber is a required field"),
  DOB: Yup.date().required("Birth date is required"),
});

export const createVehicleSchema = Yup.object({
    vehicle_model_name: Yup.string()
    .min(3, "Model Name must contain minimum 3 Chars")
    .required("Model Name is Required Field..."),
    vehicle_company_name: Yup.string()
    .min(3, "Company must contain minimum 3 Chars")
    .required("Company is Required Field..."),
    vehicle_number: Yup.string().min(4, "Number must contain minimum 4 Char").required("Vehicle Number is Required"),
    old_destination: Yup.string().min(3, "Old Destination must contain minimum 3 Char"),
    new_destination: Yup.string().min(3, "New Destination must contain minimum 3 Char"),
});
