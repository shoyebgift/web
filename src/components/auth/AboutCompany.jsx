import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import industry from "../../assets/svg/signup/industry.svg";
import briefcase from "../../assets/svg/signup/briefcase.svg";
import Form from "./Form";

const AboutCompany = ({
  currentStage,
  setCurrentStage,
  formData,
  setFormData,
}) => {
  const [aboutCompanyData, setAboutCompanyData] = useState({
    company_name: formData.company_name || "",
    industry: formData.industry || "",
    type: formData.type || "",
  });

  const errorMessage = {
    company_name: { message: "Company name is required!" },
    industry: { message: "Industry name is required!" },
    type: { message: "Type is required!" },
  };

  const [formError, setFormError] = useState({
    company_name: false,
    industry: false,
    type: false,
  });

  const handleChange = (name, value) => {
    if (name === "type") {
      setFormData((prev) => {
        return {
          name: prev.name,
          email: prev.email,
          phone: prev.phone,
          password: prev.password,
          confirmPassword: prev.confirmPassword,
          company_name: prev.company_name,
          industry: prev.industry,
        };
      });
    }
    setAboutCompanyData((prev) => ({ ...prev, [name]: value }));
    setFormError({ ...formError, [name]: false });
  };

  const validateField = (fieldName, value) => {
    let isValid = false;

    switch (fieldName) {
      case "company_name":
        isValid = value.trim().length > 2;
        break;
      case "industry":
        isValid = value.trim().length > 2;
        break;
      case "type":
        isValid = value.trim().length > 2;
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

  const handleBack = () => {
    setCurrentStage((prev) => prev - 1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    // Validate all fields before submitting
    Object.keys(aboutCompanyData).forEach((key) => {
      const isValid = validateField(key, aboutCompanyData[key]);
      if (!isValid) {
        isError = true;
      }
    });
    if (isError) return;

    setFormData({ ...formData, ...aboutCompanyData });
    setCurrentStage((prev) => prev + 1);
  };

  const formFields = [
    {
      name: "company_name",
      label: "Company Name",
      type: "text",
      required: true,
      startAdornment: <Box component="img" src={briefcase} alt="industry" />,
      value: aboutCompanyData.company_name,
      onChange: handleChange,
    },
    {
      name: "industry",
      label: "Industry",
      type: "text",
      required: true,
      startAdornment: <Box component="img" src={industry} alt="industry" />,
      value: aboutCompanyData.industry,
      onChange: handleChange,
    },
    {
      name: "type",
      label: "Type",
      type: "dropdown",
      options: [
        "Private Limited Company",
        "Public Limited Company",
        "Limited Liability Partnership (LLP)",
        "Section 8 Company (Non-Profit)",
        "Sole Proprietorship",
        "One Person Company (OPC)",
        "Partnership Firm",
      ],
      required: true,
      value: aboutCompanyData.type,
      onChange: handleChange,
    },
  ];

  return (
    <Box width={"100%"} mx={"auto"} maxWidth={"500px"}>
      <Typography fontSize={"16px"} fontWeight={500} mb={1} color="#3E3E3E">
        Add about company
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
        handleBack={handleBack}
      />
    </Box>
  );
};

export default AboutCompany;
