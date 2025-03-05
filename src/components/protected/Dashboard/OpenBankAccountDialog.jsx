import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Button,
  Stack,
  IconButton,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const OpenBankAccountDialog = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    city: "",
    state: "",
    pinCode: "",
    agree: false,
  });

  const states = ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "UP"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClose = () => {
    setFormData({
      name: "",
      contactNumber: "",
      city: "",
      state: "",
      pinCode: "",
      agree: false,
    });
    onClose();
  };
  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      {/* Close Button */}
      <IconButton
        sx={{ position: "absolute", right: 10, top: 10 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      {/* Modal Header */}
      <DialogTitle fontWeight={600}>
        A representative from YES Bank will contact you soon.
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent dividers>
        <Stack spacing={2}>
          {/* Name & Contact */}
          <Stack direction="row" spacing={2}>
            <TextField
              label="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Contact Number *"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              fullWidth
              required
            />
          </Stack>

          {/* City & State */}
          <Stack direction="row" spacing={2}>
            <TextField
              label="City *"
              name="city"
              value={formData.city}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              select
              label="State *"
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
              required
            >
              {states.map((state, index) => (
                <MenuItem key={index} value={state}>
                  {state}
                </MenuItem>
              ))}
            </TextField>
          </Stack>

          {/* Pin Code */}
          <TextField
            label="Pin Code *"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            fullWidth
            required
          />

          {/* Alert Message
          <Alert severity="warning">
            The bank has temporarily paused new API banking registrations. Your
            request will be processed as soon as the bank resumes this service.
          </Alert> */}

          {/* Terms & Conditions */}
          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
            }
            label={
              <Typography fontSize={12}>
                I agree that by clicking submit, I authorize YES Bank and its
                representatives to contact me via telephone, email, etc.
              </Typography>
            }
          />
        </Stack>
      </DialogContent>

      {/* Modal Footer */}
      <DialogActions sx={{ justifyContent: "space-between", px: 3, py: 2 }}>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ bgcolor: "#6311CB", color: "#fff" }}
          disabled={!formData.agree}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OpenBankAccountDialog;
