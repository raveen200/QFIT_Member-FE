import * as yup from "yup";

export const MemberSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  mobileNumber: yup.string().required("Mobile Number is required"),
  nic: yup.string().required("NIC Number is required"),
  address: yup.string().required("Address is required")
});

export const MemberPersonalInfoEdit = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  mobileNumber: yup.string().required("Mobile Number is required"),
  address: yup.string().required("Address is required")
});

export const MemberGeneralInfoEdit = yup.object().shape({
  age: yup.number("Enter Valid Age").typeError("Enter Valid Age"),
  weight: yup.number("Enter Valid Weight").typeError("Enter Valid Weight"),
  height: yup.number("Enter Valid Height").typeError("Enter Valid Height")
});
