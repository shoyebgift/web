import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import SuccessDialog from "../components/SuccessDialog";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const commonEmailDomains =
    /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|aol\.com|live\.com|msn\.com)$/i;

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email.toLowerCase())) {
      newErrors.email = "Enter a valid email.";
    } else if (commonEmailDomains.test(formData.email.toLowerCase())) {
      newErrors.email = "Please enter your work email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric.";
    } else if (formData.phone.length < 8 || formData.phone.length > 10) {
      newErrors.phone = "Phone number must be between 8 and 10 digits.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Please be brief about the topic.";
    }
    setErrors(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted successfully!", formData);

      // Clear the form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
      setOpenSuccessDialog(true);
    }
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#fff", p: 1 }}>
      {" "}
      <Typography
        component={"h1"}
        width={"fit-content"}
        sx={{
          mt: "2rem",
          mx: "auto",
          whiteSpace: "pre-line",
          fontSize: { lg: "24px", md: "20px", xs: "18px" },
          fontWeight: "800",
          textAlign: "center",
        }}
      >
        {"We are waiting!\nLet’s hear from you"}
      </Typography>
      <Box
        sx={{
          mt: "2rem",
          mx: "auto",
          width: "fit-content",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#6941C6",
            fontSize: { lg: "16px", md: "14px", xs: "12px" },
            fontWeight: "600",
          }}
        >
          Contact us
        </Typography>
        <Typography
          sx={{
            mt: "0.5rem",
            fontSize: { lg: "36px", md: "30px", xs: "24px" },
            fontWeight: "600",
          }}
        >
          Get in touch
        </Typography>
        <Typography
          sx={{
            mt: "1rem",
            fontSize: { lg: "16px", md: "14px", xs: "12px" },
            color: "#667085",
            fontWeight: "400",
          }}
        >
          We'd love to hear from you. Please fill out this form.
        </Typography>
      </Box>
      {/* Form part */}
      <Box
        sx={{
          maxWidth: "500px",
          margin: "2rem auto 0",
          padding: "2rem",
          position: "relative",
          zIndex: 5,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              {/* First Name */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{ fontSize: { md: "14px", xs: "12px" }, mb: 1 }}
                >
                  First name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  slotProps={{
                    input: {
                      sx: { fontSize: { md: "14px", xs: "12px" } },
                    },
                  }}
                />
              </Box>

              {/* Last Name */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{ fontSize: { md: "14px", xs: "12px" }, mb: 1 }}
                >
                  Last name
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  slotProps={{
                    input: {
                      sx: { fontSize: { md: "14px", xs: "12px" } },
                    },
                  }}
                />
              </Box>
            </Stack>

            {/* Email address */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: { md: "14px", xs: "12px" }, mb: 1 }}>
                Email
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

            {/* phone number */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: { md: "14px", xs: "12px" } }}>
                Phone Number
              </Typography>
              <TextField
                fullWidth
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                slotProps={{
                  htmlInput: {
                    style: { fontSize: { md: "14px", xs: "12px" } },
                  },

                  input: {
                    startAdornment: (
                      <InputAdornment
                        position="start"
                        sx={{
                          fontSize: "inherit",
                          color: "#667085",
                        }}
                      >
                        IND {formData.countryCode}
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            {/* Message here */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: { md: "14px", xs: "12px" }, mb: 1 }}>
                Message
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={(e) => handleChange(e)}
                error={!!errors.message}
                helperText={errors.message}
                rows={5}
                multiline
                slotProps={{
                  input: {
                    sx: { fontSize: { md: "14px", xs: "12px" } },
                  },
                }}
              />
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: "2rem",
                bgcolor: "#7F56D9",
                color: "#FFFFFF",
                textTransform: "none",
                "&:hover": { bgcolor: "#6A47BD" },
                fontSize: { md: "14px", xs: "12px" },
              }}
            >
              Send message
            </Button>
          </Stack>
        </form>
      </Box>
      <Typography
        sx={{
          mx: "auto",
          mb: "4rem",
          textAlign: "center",
          maxWidth: "500px",
          whiteSpace: "pre-line",
          fontSize: { xs: "12px", md: "14px" },
          fontWeight: "300",
          color: "#667085",
        }}
      >
        {
          "GiftrytDigital Ventures Private Limited \nMumbai, India\nsupport@optifii.com"
        }
      </Typography>
      {openSuccessDialog && (
        <SuccessDialog
          open={true}
          onClose={() => setOpenSuccessDialog(false)}
          message={`Thank you for submiting!\nWe will surely get in touch with you.`}
        />
      )}
    </Box>
  );
};

export default ContactUsPage;
