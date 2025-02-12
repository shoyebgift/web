import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Form from "./Form";

const CompanyDetails = ({
  currentStage,
  setCurrentStage,
  formData,
  setFormData,
}) => {
  const companyType = formData.type;

  const isTypeX = [
    "Private Limited Company",
    "Public Limited Company",
    "Limited Liability Partnership (LLP)",
    "Section 8 Company (Non-Profit)",
  ].includes(companyType);

  const isTypeY = ["Sole Proprietorship", "One Person Company (OPC)"].includes(
    companyType
  );

  const isTypeZ = companyType === "Partnership Firm";

  const [companyDetailsData, setCompanyDetailsData] = useState({
    ...(isTypeX
      ? {
          company_pan: formData?.company_pan || "",
          cin: formData?.cin || "",
          company_gst: formData?.company_gst || "",
          gst_document: formData?.gst_document || "",
          company_pan_document: formData?.company_pan_document || "",
          canceled_cheque_document: formData?.canceled_cheque_document || "",
          certificate_of_incorporation_document:
            formData?.certificate_of_incorporation_document || "",
        }
      : {}),
    ...(isTypeY
      ? {
          legal_trade_name: formData?.legal_trade_name || "",
          company_gst: formData?.company_gst || "",
          personal_pan_document: formData?.personal_pan_document || "",
          gst_document: formData?.gst_document || "",
          canceled_cheque_document: formData?.canceled_cheque_document || "",
        }
      : {}),
    ...(isTypeZ
      ? {
          company_pan: formData?.company_pan || "",
          company_gst: formData?.company_gst || "",
          company_pan_document: formData?.company_pan_document || "",
          gst_document: formData?.gst_document || "",
          canceled_cheque_document: formData?.canceled_cheque_document || "",
          partnership_deed_document: formData?.partnership_deed_document || "",
        }
      : {}),
  });

  const [errorMessage, setErrorMessage] = useState({
    cin: { message: "CIN is required!" },
    company_pan: { message: "Company PAN is required!" },
    company_gst: { message: "Company GST number is required!" },
    legal_trade_name: { message: "Legal Trade Name is required!" },
    company_pan_document: { message: "Company PAN is required!" },
    canceled_cheque_document: { message: "Cancelled cheque is required!" },
    gst_document: { message: "GST Certificate is required!" },
    certificate_of_incorporation_document: {
      message: "Certificate of Incorporation is required!",
    },
    partnership_deed_document: { message: "Partnership Deed is required!" },
    personal_pan_document: { message: "Personal PAN is required!" },
  });

  const [formError, setFormError] = useState({
    cin: false,
    company_pan: false,
    company_gst: false,
    legal_trade_name: false,
    company_pan_document: false,
    canceled_cheque_document: false,
    gst_document: false,
    certificate_of_incorporation_document: false,
    partnership_deed_document: false,
    personal_pan_document: false,
  });

  const validateField = (fieldName, value) => {
    let isValid = false;

    switch (fieldName) {
      case "cin":
        // CIN should be alphanumeric and exactly 21 characters
        const isValidCin = value
          .trim()
          .match(/^[LUF]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/i);

        if (!value.trim()) {
          setErrorMessage((prev) => ({
            ...prev,
            cin: { message: "CIN is required!" },
          }));
        }

        if (!isValidCin && value.trim().length > 0) {
          setErrorMessage((prev) => ({
            ...prev,
            cin: { message: "Please enter a valid CIN" },
          }));
        }
        isValid = !!isValidCin;
        break;
      case "company_pan":
        const isValidPan = value.trim().match(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i);

        if (!value.trim()) {
          setErrorMessage((prev) => ({
            ...prev,
            company_pan: { message: "Company PAN is required!" },
          }));
        }
        if (!isValidPan && value.trim().length > 0) {
          setErrorMessage((prev) => ({
            ...prev,
            company_pan: {
              message: "Please enter a valid Company PAN",
            },
          }));
        }
        isValid = !!isValidPan;
        break;
      case "company_gst":
        const isValidGst = value
          .trim()
          .match(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9]{1}[A-Z]{1}[0-9]{1}$/i);

        if (!value.trim()) {
          setErrorMessage((prev) => ({
            ...prev,
            company_gst: { message: "Company GST number is required!" },
          }));
        }
        if (!isValidGst && value.trim().length > 0) {
          setErrorMessage((prev) => ({
            ...prev,
            company_gst: { message: "Please enter a valid Company GST number" },
          }));
        }
        isValid = !!isValidGst;
        break;
      case "legal_trade_name":
        isValid = value.trim().length > 2;
        break;
      case "company_pan_document":
      case "canceled_cheque_document":
      case "gst_document":
      case "certificate_of_incorporation_document":
      case "partnership_deed_document":
      case "personal_pan_document":
        const isValidFileFormat = value
          ? ["image/jpeg", "image/png", "image/svg+xml"].includes(value.type)
          : false;

        const isValidFileSize = value
          ? 0 < value.size && value.size / 1024 / 1024 < 20
          : false;

        if (!value) {
          setErrorMessage((prev) => ({
            ...prev,
            [fieldName]: { message: "Please select a file!" },
          }));
        } else if (!isValidFileFormat) {
          setErrorMessage((prev) => ({
            ...prev,
            [fieldName]: {
              message: "Please select a valid file(jpg,png,svg)!",
            },
          }));
        } else if (!isValidFileSize) {
          setErrorMessage((prev) => ({
            ...prev,
            [fieldName]: { message: "File size should be less than 20MB!" },
          }));
        }

        isValid = !!value && isValidFileSize && isValidFileFormat;
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
    Object.keys(companyDetailsData).forEach((key) => {
      const isValid = validateField(key, companyDetailsData[key]);
      if (!isValid) {
        isError = true;
      }
    });
    if (isError) return;

    setFormData({ ...formData, ...companyDetailsData });

    setCurrentStage((prev) => {
      if (isTypeY) return prev + 2;
      return prev + 1;
    });
  };

  const handleChange = (name, value) => {
    setCompanyDetailsData((prev) => ({
      ...prev,
      [name]:
        name === "company_gst" || name === "company_pan" || name === "cin"
          ? value.toUpperCase()
          : value,
    }));
    setFormError({ ...formError, [name]: false });
  };

  const formFields = [
    ...(isTypeX
      ? [
          {
            name: "cin",
            label: "CIN",
            type: "text",
            required: true,
            value: companyDetailsData.cin,
            onChange: handleChange,
          },
          {
            name: "company_pan",
            label: "Company PAN",
            type: "text",
            required: true,
            value: companyDetailsData.company_pan,
            onChange: handleChange,
          },
          {
            name: "company_gst",
            label: "Company GST number",
            type: "text",
            required: true,
            value: companyDetailsData.company_gst,
            onChange: handleChange,
          },
          {
            name: "gst_document",
            label: "Upload GST Certificate",
            type: "file",
            required: true,
            value: companyDetailsData.gst_document,
            onChange: handleChange,
          },
          {
            name: "company_pan_document",
            label: "Upload Company PAN",
            type: "file",
            required: true,
            value: companyDetailsData.company_pan_document,
            onChange: handleChange,
          },
          {
            name: "canceled_cheque_document",
            label: "Upload Cancelled Cheque",
            type: "file",
            required: true,
            value: companyDetailsData.canceled_cheque_document,
            onChange: handleChange,
          },
          {
            name: "certificate_of_incorporation_document",
            label: "Upload Certificate of Incorporation",
            type: "file",
            required: true,
            value: companyDetailsData.certificate_of_incorporation_document,
            onChange: handleChange,
          },
        ]
      : []),
    ...(isTypeY
      ? [
          {
            name: "legal_trade_name",
            label: "Legal Trade Name",
            type: "text",
            required: true,
            value: companyDetailsData.legal_trade_name,
            onChange: handleChange,
          },
          {
            name: "company_gst",
            label: "Company GST Number",
            type: "text",
            required: true,
            value: companyDetailsData.company_gst,
            onChange: handleChange,
          },
          {
            name: "personal_pan_document",
            label: "Upload Personal PAN",
            type: "file",
            required: true,
            value: companyDetailsData.personal_pan_document,
            onChange: handleChange,
          },
          {
            name: "gst_document",
            label: "Upload GST Certificate",
            type: "file",
            required: true,
            value: companyDetailsData.gst_document,
            onChange: handleChange,
          },
          {
            name: "canceled_cheque_document",
            label: "Upload Cancelled Cheque",
            type: "file",
            required: true,
            value: companyDetailsData.canceled_cheque_document,
            onChange: handleChange,
          },
        ]
      : []),
    ...(isTypeZ
      ? [
          {
            name: "company_pan",
            label: "Company PAN",
            type: "text",
            required: true,
            value: formData.company_pan,
            onChange: handleChange,
          },
          {
            name: "company_gst",
            label: "Company GST Number",
            type: "text",
            required: true,
            value: formData.company_gst,
            onChange: handleChange,
          },
          {
            name: "company_pan_document",
            label: "Upload Company PAN",
            type: "file",
            required: true,
            value: formData.company_pan_document,
            onChange: handleChange,
          },
          {
            name: "gst_document",
            label: "Upload GST Certificate",
            type: "file",
            required: true,
            value: formData.gst_document,
            onChange: handleChange,
          },
          {
            name: "canceled_cheque_document",
            label: "Upload Cancelled Cheque",
            type: "file",
            required: true,
            value: formData.canceled_cheque_document,
            onChange: handleChange,
          },
          {
            name: "partnership_deed_document",
            label: "Partnership Deed/LLP Deed",
            type: "file",
            required: true,
            value: formData.partnership_deed_document,
            onChange: handleChange,
          },
        ]
      : []),
  ];

  return (
    <Box width={"100%"} mx={"auto"} maxWidth={"500px"}>
      <Typography fontSize={"20px"} fontWeight={600} mb={1} color="#3E3E3E">
        Add company details
      </Typography>
      <Typography fontSize={"14px"} fontWeight={500} mb={1} color="#323232">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
      </Typography>

      <Form
        formFields={formFields}
        onSubmit={onSubmit}
        formError={formError}
        errorMessage={errorMessage}
        buttonText="Next step"
        setCurrentStage={setCurrentStage}
        backButtonDisable={currentStage === 0}
        handleBack={handleBack}
      />
    </Box>
  );
};

export default CompanyDetails;
