import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  TextField,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LoadMoneyDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      {/* Close Button */}
      <IconButton
        sx={{ position: "absolute", right: 10, top: 10 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      {/* Modal Header */}
      <DialogTitle fontWeight={600} textAlign="center">
        Add Money to Your Card Wallet
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent dividers>
        <Typography
          fontSize={14}
          color="text.secondary"
          textAlign="center"
          mb={2}
        >
          Enter the details below to add money to your card wallet
          <br /> **from your current account**.
        </Typography>

        <Divider sx={{ my: 2 }} />

        {/* Load Money Section */}
        <Box>
          <Typography fontSize={16} fontWeight={600} mb={1}>
            Load Money
          </Typography>

          <Box mb={2}>
            <Typography fontSize={12} fontWeight={600} color="#344054" mb={0.5}>
              Enter UTR number
            </Typography>
            <TextField fullWidth size="small" variant="outlined" />
          </Box>

          <Box>
            <Typography fontSize={12} fontWeight={600} color="#344054" mb={0.5}>
              Enter amount
            </Typography>
            <TextField fullWidth size="small" variant="outlined" />
          </Box>
        </Box>
      </DialogContent>

      {/* Modal Footer */}
      <DialogActions sx={{ justifyContent: "center", py: 2 }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "#6311CB", color: "#fff", textTransform: "none" }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoadMoneyDialog;
