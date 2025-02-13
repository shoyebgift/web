import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Divider,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const WalletApprovalDialog = ({ open, onClose, wallet }) => {
  const navigate = useNavigate();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      slotProps={{ paper: { sx: { p: 2, borderRadius: "6.5px" } } }}
    >
      {/* Dialog Title */}
      <DialogTitle>
        <Typography fontFamily="Gilroy" fontSize="20px" color="#000000" p={1}>
          Wallet Approval Request
        </Typography>
      </DialogTitle>

      <Divider />

      {/* Dialog Content */}
      <DialogContent>
        <Typography
          fontFamily="Afacad"
          fontSize="28px"
          fontWeight="bold"
          color="#3725EA"
        >
          {wallet.name}
        </Typography>

        <Typography
          fontFamily="TT Commons"
          fontSize="18px"
          color="#565D6C"
          whiteSpace="nowrap"
        >
          Wallet type:{" "}
          <Typography
            component="span"
            fontSize="18px"
            color="#121212"
            fontFamily="TT Commons"
          >
            Prepaid
          </Typography>
        </Typography>

        <Typography
          fontFamily="TT Commons"
          fontSize="18px"
          color="#565D6C"
          display="flex"
          whiteSpace="nowrap"
          gap={1}
          mt={2}
        >
          Transaction type:{" "}
          <Typography
            component="span"
            fontSize="18px"
            color="#121212"
            fontFamily="TT Commons"
            textTransform="capitalize"
            whiteSpace={"wrap"}
          >
            {wallet.transactionType.join(", ").split("_").join(" ")}
          </Typography>
        </Typography>

        {/* Merchant Transaction Rules */}
        <Box mt={4}>
          <Typography
            fontFamily="TT Commons"
            fontSize="18px"
            color="#565D6C"
            display="flex"
            gap={2}
            whiteSpace="nowrap"
          >
            Merchant Transaction Rule (Either of them):{" "}
            <Typography
              component="span"
              fontSize="18px"
              color="#121212"
              fontFamily="TT Commons"
              whiteSpace={"wrap"}
              textTransform={"capitalize"}
            >
              {wallet.transactionRules.eitherOfThem.length === 0
                ? "N/A"
                : wallet.transactionRules.eitherOfThem
                    .join(", ")
                    .split("_")
                    .join(" ")}
            </Typography>
          </Typography>

          <Typography
            fontFamily="TT Commons"
            fontSize="18px"
            color="#565D6C"
            mt={4}
            display="flex"
            gap={2}
            whiteSpace="nowrap"
          >
            Merchant Transaction Rule (Neither of them):{" "}
            <Typography
              component="span"
              fontSize="18px"
              color="#121212"
              fontFamily="TT Commons"
              whiteSpace={"wrap"}
              textTransform={"capitalize"}
            >
              {wallet.transactionRules.noneOfThem.length === 0
                ? "N/A"
                : wallet.transactionRules.noneOfThem
                    .join(", ")
                    .split("_")
                    .join(" ")}
            </Typography>
          </Typography>
        </Box>

        {/* Buttons */}
        <Box display="flex" justifyContent="space-around" mt={6}>
          <Button
            variant="contained"
            sx={{
              fontFamily: "Afacad",
              fontWeight: 700,
              fontSize: "20px",
              color: "black",
              px: 8,
              textTransform: "none",
              backgroundColor: "#F0F0F0",
            }}
            onClick={() => {
              navigate(`edit/${wallet.id}/where-to-share`);
            }}
            disabled={wallet.orders.length > 0}
          >
            Edit
          </Button>

          <Button
            variant="contained"
            sx={{
              fontFamily: "Afacad",
              fontWeight: 700,
              fontSize: "20px",
              color: "white",
              px: 8,
              textTransform: "none",
              backgroundColor: "#6311CB",
            }}
            onClick={onClose}
          >
            Save
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default WalletApprovalDialog;
