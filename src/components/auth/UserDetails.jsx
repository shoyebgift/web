import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import logo from "../../assets/svg/OptiFii.svg";
import Form from "./Form";

const UserDetails = ({
  currentStage,
  setCurrentStage,
  formData,
  setFormData,
}) => {
  const [userData, setUserData] = useState({
    name: formData.name || "",
    email: formData.email || "",
    phone: formData.phone || "",
    password: formData.password || "",
    confirmPassword: formData.confirmPassword || "",
  });

  const [errorMessage, setErrorMessage] = useState({
    name: { message: "Name should be on atleast 3 characters long!" },
    email: { message: "Valid email is required!" },
    phone: { message: "Valid phone number is required!" },
    password: {
      message:
        "Password must be at least 8 characters and contain at least one letter and one number!",
    },
    confirmPassword: { message: "Passwords do not match!" },
  });

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (name, value) => {
    setUserData({ ...userData, [name]: value });
    setFormError({ ...formError, [name]: false });
  };

  const validateField = (fieldName, value) => {
    let isValid = false;

    switch (fieldName) {
      case "name":
        isValid = value.trim().length > 2;
        break;
      case "email":
        const isEmailValid = /\S+@\S+\.\S+/.test(value.toLowerCase());
        const commonEmailDomains =
          /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|aol\.com|live\.com|msn\.com)$/i;
        const isCommonEmail = commonEmailDomains.test(value.toLowerCase());
        if (!isEmailValid) {
          setErrorMessage((prev) => ({
            ...prev,
            email: { message: "Valid email is required!" },
          }));
        } else if (isCommonEmail) {
          setErrorMessage((prev) => ({
            ...prev,
            email: { message: "Please enter a company email address." },
          }));
        }
        isValid = isEmailValid && !isCommonEmail;

        break;
      case "phone":
        isValid = /^\d{10}$/.test(value);
        break;
      case "password":
        const isAlphanumeric = /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(value);
        const isLengthValid = value.trim().length >= 8;

        if (!isLengthValid) {
          setErrorMessage((prev) => ({
            ...prev,
            password: { message: "Password must be at least 8 characters!" },
          }));
        } else if (!isAlphanumeric) {
          setErrorMessage((prev) => ({
            ...prev,
            password: {
              message: "Password must Alphanumeric(no special characters)!",
            },
          }));
        }
        isValid = isLengthValid && isAlphanumeric;
        break;
      case "confirmPassword":
        isValid = value === userData.password;
        break;
      default:
        break;
    }

    setFormError((prev) => ({
      ...prev,
      [fieldName]: !isValid,
    }));
    return isValid;
  };

  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      value: formData.name,
      startAdornment: <PersonOutlineOutlinedIcon />,
      onChange: handleChange,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      required: true,
      value: formData.email,
      startAdornment: <EmailOutlinedIcon />,
      onChange: handleChange,
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      value: formData.phone,
      startAdornment: "IND +91",
      onChange: handleChange,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      value: formData.password,
      endAdornment: "password",
      onChange: handleChange,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      required: true,
      value: formData.confirmPassword,
      endAdornment: "password",
      onChange: handleChange,
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    // Validate all fields before submitting
    Object.keys(userData).forEach((key) => {
      const isValid = validateField(key, userData[key]);
      if (!isValid) {
        isError = true;
      }
    });
    if (isError) return;

    setFormData({ ...formData, ...userData });
    setCurrentStage((prev) => prev + 1);
  };

  return (
    <Box width={"100%"} mx={"auto"} maxWidth={"500px"}>
      <Box component={"img"} src={logo} width={"80px"} alt="OptiFii" />
      <Typography fontSize={"18px"} fontWeight={600} my={1}>
        Streamlined Solutions for Seamless Reimbursements!
      </Typography>
      <Typography fontSize={"16px"} fontWeight={500} mb={1} color="#3E3E3E">
        Add your details
      </Typography>
      <Typography fontSize={"14px"} fontWeight={500} mb={1} color="#323232">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
      </Typography>

      <Form
        formError={formError}
        formFields={formFields}
        onSubmit={onSubmit}
        errorMessage={errorMessage}
        buttonText="Next step"
        setCurrentStage={setCurrentStage}
        backButtonDisable={currentStage === 0}
      />
    </Box>
  );
};

export default UserDetails;
