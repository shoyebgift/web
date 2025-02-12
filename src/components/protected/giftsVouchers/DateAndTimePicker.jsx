import React, { useState } from "react";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Box } from "@mui/material";

const DateAndTimePicker = ({
  onProceed,
  setTimeForPayment,
  setShowDateTimePicker,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [errMsg, setErrMsg] = useState("null");
  const [err, setErr] = useState(false);
  const handleProceed = () => {
    if (selectedDate) {
      if (selectedDate < new Date()) {
        setErr(true);
        setErrMsg("Cannot Schedule for the past!");
        return;
      }
      onProceed(selectedDate.toISOString());
      setErr(false);
      setShowDateTimePicker(false);
    } else {
      setErrMsg("Please select a date!");
      setErr(true);
    }
  };

  const handleCancel = () => {
    setErr(false);
    setErrMsg("");
    setShowDateTimePicker(false);
    setSelectedDate(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box textAlign="center" p={2}>
        <DateTimePicker
          value={selectedDate}
          onChange={(newValue) => {
            setErr(false);
            setErrMsg("");
            setSelectedDate(newValue);
          }}
          disablePast
          slotProps={{
            textField: {
              fullWidth: true,
              helperText: err && errMsg,
              error: err,
            },
          }}
        />
        <Box mt={2}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#6311CB",
              color: "#6311CB",
              "&:hover": {
                background: "none",
              },
              mr: 2,
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              "&:hover": {
                background: "linear-gradient(to right, #6311CB, #8F40FB)",
              },
              color: "white",
              textTransform: "none",
              backgroundColor: "#6311CB",
            }}
            onClick={handleProceed}
          >
            Proceed
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default DateAndTimePicker;
