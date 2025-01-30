import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import optifii from "../assets/svg/OptiFii.svg";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.toLowerCase())) {
      newErrors.email = "Enter a valid email.";
    } else if (commonEmailDomains.test(formData.email.toLowerCase())) {
      newErrors.email = "Please enter your work email address.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else if (formData.password.length > 20) {
      newErrors.password = "Password must be less than 20 characters.";
    } else if (formData.password.includes(" ")) {
      newErrors.password = "Password cannot contain spaces.";
    }

    setErrors(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const commonEmailDomains =
    /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|aol\.com|live\.com|msn\.com)$/i;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully!", formData);
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <Box
      mx="auto"
      maxWidth="500px"
      bgcolor={"#FFFFFF"}
      p={{ xs: 2, md: 4 }}
      borderRadius={"2px"}
      zIndex={10}
      position={"relative"}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.1)"}
      my={"4rem"}
      width={"90%"}
    >
      <Box
        component={"img"}
        src={optifii}
        alt="OptiFii"
        width={{ xs: "80px", md: "100px" }}
      />

      <Typography
        component={"h3"}
        fontWeight={600}
        fontSize={{ xs: "18px", md: "22px" }}
        mt=".5rem"
        mb={2}
      >
        Welcome
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="column">
          <Box sx={{ flex: 1 }}>
            <Typography
              component={"span"}
              fontSize={{ md: "16px", xs: "14px" }}
              fontWeight={600}
              mb={1}
              ml={"5px"}
            >
              E-mail{" "}
              <Typography component={"span"} color="red" fontWeight={400}>
                *
              </Typography>
            </Typography>
            <TextField
              fullWidth
              type="email"
              variant="outlined"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              slotProps={{
                input: {
                  sx: { fontSize: { md: "14px", xs: "12px" } },
                },
              }}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              component={"span"}
              fontSize={{ md: "16px", xs: "14px" }}
              fontWeight={600}
              mb={1}
              ml={"5px"}
            >
              Password{" "}
              <Typography component={"span"} color="red" fontWeight={400}>
                *
              </Typography>
            </Typography>

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              data-hide-eye
              variant="outlined"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              slotProps={{
                input: {
                  sx: { fontSize: { md: "14px", xs: "12px" } },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        sx={{
                          borderRadius: "8px",
                          color: "white",
                          px: 2,
                          textTransform: "none",
                          backgroundColor: "black",
                          "&:hover": {
                            backgroundColor: "#333",
                          },
                        }}
                        loadingPosition="center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
        </Stack>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: "2rem",
            bgcolor: "#000",
            color: "#FFFFFF",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#333",
            },
            "&:disabled": {
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              color: "rgba(255, 255, 255, 0.5)",
            },
            fontSize: "inherit",
          }}
          loadingPosition="center"
        >
          Sign In
        </Button>
      </form>
    </Box>
  );
};

export default SignInPage;
