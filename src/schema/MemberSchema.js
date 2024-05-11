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
