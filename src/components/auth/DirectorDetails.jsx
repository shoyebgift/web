import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import DragDropFileInput from "./DragDropFIleInput";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const DirectorDetails = ({ setCurrentStage, formData, setFormData }) => {
  const companyType = formData.type;

  const isTypeX = [
    "Private Limited Company",
    "Public Limited Company",
    "Limited Liability Partnership (LLP)",
    "Section 8 Company (Non-Profit)",
  ].includes(companyType);

  const isTypeZ = companyType === "Partnership Firm";

  const [directorDetails, setDirectorDetails] = useState(
    formData.director_details
      ? [...formData.director_details]
      : [
          {
            name: "",
            email: "",
            phone: "",
            pan_document: "",
            adhaar_document: "",
          },
          {
            name: "",
            email: "",
            phone: "",
            pan_document: "",
            adhaar_document: "",
          },
        ]
  );

  const [formError, setFormError] = useState(
    directorDetails.map(() => ({
      name: false,
      email: false,
      phone: false,
      pan_document: false,
      adhaar_document: false,
    }))
  );

  const [errorMessage, setErrorMessage] = useState(
    directorDetails.map(() => ({
      name: { message: "Name is required!" },
      email: { message: "Valid email is required!" },
      phone: { message: "Valid phone number is required!" },
      pan_document: { message: "PAN is required!" },
      adhaar_document: { message: "Aadhaar Document is required!" },
    }))
  );

  const validateField = (index, fieldName, value) => {
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
          setErrorMessage((prev) => {
            const updatedErrors = [...prev];
            updatedErrors[index] = {
              ...updatedErrors[index],
              email: { message: "Valid email is required!" },
            };
            return updatedErrors;
          });
        } else if (isCommonEmail) {
          setErrorMessage((prev) => {
            const updatedErrors = [...prev];
            updatedErrors[index] = {
              ...updatedErrors[index],
              email: { message: "Please enter a company email address." },
            };
            return updatedErrors;
          });
        }
        isValid = isEmailValid && !isCommonEmail;
        break;
      case "phone":
        isValid = /^\d{10}$/.test(value);
        break;
      case "pan_document":
      case "adhaar_document":
        const isFileFormat = value
          ? ["image/jpeg", "image/png", "image/svg+xml"].includes(value.type)
          : false;

        const isFileSize = value
          ? 0 < value.size && value.size / 1024 / 1024 < 20
          : false;

        if (!value) {
          setErrorMessage((prev) => {
            const updatedErrors = [...prev];
            updatedErrors[index] = {
              ...updatedErrors[index],
              [fieldName]: { message: "Please select a file!" },
            };
            return updatedErrors;
          });
        } else if (!isFileFormat) {
          setErrorMessage((prev) => {
            const updatedErrors = [...prev];
            updatedErrors[index] = {
              ...updatedErrors[index],
              [fieldName]: {
                message: "Please select a valid file (jpg, png, svg)!",
              },
            };
            return updatedErrors;
          });
        } else if (!isFileSize) {
          setErrorMessage((prev) => {
            const updatedErrors = [...prev];
            updatedErrors[index] = {
              ...updatedErrors[index],
              [fieldName]: { message: "File size should be less than 20MB!" },
            };
            return updatedErrors;
          });
        }

        isValid = !!value && isFileSize && isFileFormat;
        break;
      default:
        break;
    }

    setFormError((prev) => {
      const updatedErrors = [...prev];
      updatedErrors[index] = {
        ...updatedErrors[index],
        [fieldName]: !isValid,
      };
      return updatedErrors;
    });

    return isValid;
  };

  const handleBack = () => {
    setCurrentStage((prev) => prev - 1);
  };

  const handleChange = (index, name, value) => {
    console.log(index, name, value);
    setDirectorDetails((prev) =>
      prev.map((director, i) =>
        i === index ? { ...director, [name]: value } : director
      )
    );

    // Reset field-specific error
    setFormError((prev) => {
      const updatedErrors = [...prev];
      updatedErrors[index] = { ...updatedErrors[index], [name]: false };
      return updatedErrors;
    });
  };

  const addDirector = () => {
    if (isTypeX) {
      setDirectorDetails((prev) => [
        ...prev,
        {
          name: "",
          email: "",
          phone: "",
          pan_document: "",
          adhaar_document: "",
        },
      ]);

      setFormError((prev) => [
        ...prev,
        {
          name: false,
          email: false,
          phone: false,
          pan_document: false,
          adhaar_document: false,
        },
      ]);

      setErrorMessage((prev) => [
        ...prev,
        {
          name: { message: "Name is required!" },
          email: { message: "Valid email is required!" },
          phone: { message: "Valid phone number is required!" },
          pan_document: { message: "PAN is required!" },
          adhaar_document: { message: "Aadhaar Document is required!" },
        },
      ]);
    }
  };
  const removeDirector = (index) => {
    if (isTypeX && directorDetails.length > 1) {
      setDirectorDetails((prev) => prev.filter((_, i) => i !== index));

      setFormError((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const formFields = [
    { name: "name", label: "Director Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      required: true,
      startAdornment: "IND +91",
    },
    {
      name: "pan_document",
      label: "PAN Document",
      type: "file",
      required: true,
    },
    {
      name: "adhaar_document",
      label: "Aadhaar Document",
      type: "file",
      required: true,
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    directorDetails.forEach((director, index) => {
      Object.keys(director).forEach((key) => {
        const isValid = validateField(index, key, director[key]);
        if (!isValid) isError = true;
      });
    });

    if (isError) return;

    setFormData((prev) => ({ ...prev, director_details: directorDetails }));
    setCurrentStage((prev) => prev + 1);
  };

  return (
    <Box width={"100%"} mx={"auto"} maxWidth={"500px"}>
      <Typography fontSize={"16px"} fontWeight={500} mb={1} color="#3E3E3E">
        Add director details
      </Typography>
      <Typography fontSize={"14px"} fontWeight={500} mb={1} color="#323232">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
      </Typography>
      <form onSubmit={onSubmit}>
        {directorDetails.map((_, idx) => (
          <Box
            key={idx}
            backgroundColor={"#F3F3F9AB"}
            borderRadius={"2px"}
            p={1}
            mt={1}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              mb={1}
            >
              <Typography fontSize={"14px"} fontWeight={500} color="#3E3E3E">
                Director {idx + 1}
              </Typography>
              {isTypeX && (
                <IconButton
                  disabled={!isTypeX || directorDetails.length < 2}
                  onClick={() => removeDirector(idx)}
                  sx={{
                    color: "#d32f2f",
                    "&:hover": {
                      background: "rgba(0, 0, 0, 0.08)",
                    },
                  }}
                >
                  <DeleteForeverOutlinedIcon sx={{ fontSize: "15px" }} />
                </IconButton>
              )}
            </Box>
            {formFields.map((field, index) => {
              return (
                <Box mx={3} key={index} mb={1}>
                  <Typography
                    component={"label"}
                    fontSize="14px"
                    fontWeight={500}
                    color="#3E3E3E"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </Typography>
                  {field.type === "file" ? (
                    <Box>
                      <DragDropFileInput
                        name={`${field.name}${idx}`}
                        value={directorDetails[idx][field.name]}
                        onFileUpload={(fieldName, file) =>
                          handleChange(idx, field.name, file)
                        }
                      />

                      <Typography fontSize="12px" color="#d32f2f" ml={2}>
                        {formError[idx][field.name]
                          ? errorMessage[idx][field.name].message
                          : ""}
                      </Typography>
                    </Box>
                  ) : (
                    <TextField
                      fullWidth
                      variant="outlined"
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      value={directorDetails[idx][field.name]}
                      onChange={(e) =>
                        handleChange(idx, field.name, e.target.value)
                      }
                      error={formError[idx][field.name]}
                      helperText={
                        formError[idx][field.name]
                          ? errorMessage[idx][field.name].message
                          : ""
                      }
                      slotProps={{
                        htmlInput: {
                          style: { fontSize: "14px" },
                        },

                        input: {
                          startAdornment: field.startAdornment && (
                            <Box color={"#D0D5DD"} whiteSpace={"nowrap"} mr={1}>
                              {field.startAdornment}
                            </Box>
                          ),
                        },
                      }}
                    />
                  )}
                </Box>
              );
            })}
          </Box>
        ))}

        {isTypeX && (
          <Box width={"70%"} mx={"auto"} mt={1}>
            <Button
              variant="outlined"
              onClick={() => addDirector()}
              fullWidth
              sx={{ my: 1, color: "#6311CB", borderColor: "#6311CB" }}
            >
              <AddOutlinedIcon sx={{ fontSize: "15px" }} /> Add Director
            </Button>
          </Box>
        )}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          my="1rem"
          gap={1}
        >
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              borderColor: "#6311CB",
              color: "#6311CB",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <KeyboardBackspaceOutlinedIcon />
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              "&:hover": {
                background: "linear-gradient(to right, #6311CB, #8F40FB)",
                color: "white",
              },
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              gap: 1.5,
              backgroundColor: "#6311CB",
            }}
          >
            Next step <EastOutlinedIcon fontSize="small" />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default DirectorDetails;
