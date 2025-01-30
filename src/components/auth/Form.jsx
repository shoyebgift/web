import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import {
  Box,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import DragDropFileInput from "./DragDropFIleInput";

const Form = ({
  formFields,
  onSubmit,
  errorMessage,
  buttonText,
  formError,
  backButtonDisable = false,
  handleBack,
}) => {
  const [showPassword, setShowPassword] = useState({});

  const togglePasswordVisibility = (fieldName) => {
    setShowPassword((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      {formFields.map((field, index) => (
        <Box mt={1} key={index}>
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
                label={field.label}
                name={field.name}
                onFileUpload={field.onChange}
                value={field.value}
              />
              <Typography
                fontSize="12px"
                color="#d32f2f"
                htmlFor={field.name}
                ml={2}
              >
                {formError[field.name] ? errorMessage[field.name].message : ""}
              </Typography>
            </Box>
          ) : field.type === "dropdown" ? (
            <>
              <Select
                fullWidth
                variant="outlined"
                name={field.name}
                id={field.name}
                value={field.value}
                onChange={(e) => field.onChange(field.name, e.target.value)}
                error={formError[field.name]}
              >
                {field.options.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              <Typography
                fontSize="12px"
                color="#d32f2f"
                htmlFor={field.name}
                ml={2}
              >
                {formError[field.name] ? errorMessage[field.name].message : ""}
              </Typography>
            </>
          ) : (
            <TextField
              fullWidth
              variant="outlined"
              type={
                field.type === "password" && showPassword[field.name]
                  ? "text"
                  : field.type
              }
              name={field.name}
              id={field.name}
              value={field.value}
              onChange={(e) => field.onChange(field.name, e.target.value)}
              error={formError[field.name]}
              helperText={
                formError[field.name] ? errorMessage[field.name].message : ""
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
                  endAdornment: field.endAdornment === "password" && (
                    <Box
                      display="flex"
                      alignItems="center"
                      gap="0.5rem"
                      color={"#D0D5DD"}
                      whiteSpace={"nowrap"}
                      onClick={() => togglePasswordVisibility(field.name)}
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      {showPassword[field.name] ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </Box>
                  ),
                },
              }}
            />
          )}
        </Box>
      ))}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my="1rem"
        gap={1}
      >
        <Button
          variant="outlined"
          disabled={backButtonDisable}
          onClick={handleBack}
          sx={{
            borderColor: "#6311CB",
            color: "#6311CB",

            "&[disabled]": {
              borderColor: "#D3BAF9",
              color: "#D3BAF9",
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
          {buttonText} <EastOutlinedIcon fontSize="small" />
        </Button>
      </Box>
    </form>
  );
};

export default Form;
