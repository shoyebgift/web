import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";
import SuccessIcon from "./SuccessIcon";

const SuccessDialog = ({ open, onClose, message }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      slotProps={{
        paper: { sx: { borderRadius: "6.5px", maxWidth: "400px", p: 2 } },
      }}
    >
      <DialogTitle align="center">
        {" "}
        <Box mx={"auto"} width={"fit-content"}>
          <SuccessIcon />
        </Box>
      </DialogTitle>
      <DialogContent align="center">
        <Typography
          fontSize="20px"
          fontWeight={400}
          color="#101828"
          fontFamily={"TT Commons"}
          whiteSpace={"pre-line"}
        >
          {message}
        </Typography>
      </DialogContent>
      <Button
        variant="contained"
        disableElevation
        sx={{
          fontFamily: "TT Commons",
          fontWeight: 500,
          fontSize: "18px",
          color: "white",
          px: 8,
          textTransform: "none",
          backgroundColor: "#6311CB",
        }}
        onClick={onClose}
      >
        Done
      </Button>
    </Dialog>
  );
};

export default SuccessDialog;
