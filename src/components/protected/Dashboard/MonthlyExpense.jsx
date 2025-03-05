import React from "react";
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  Button,
  LinearProgress,
  Stack,
  Grid2,
} from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const MonthlyExpense = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: 2,
        p: 3,
      }}
    >
      {/* Title */}
      <Typography color="#474279" fontSize="0.875rem" fontWeight={500} mb={2}>
        Monthly Expense
      </Typography>

      {/* Date Selection & Menu */}
      <Stack direction="row" justifyContent="space-between" mb={3}>
        <Box
          sx={{
            fontSize: "0.75rem",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F2EEF8",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#6311CB",
              fontWeight: 500,
              mx: 1,
            }}
          >
            <Typography fontSize={13}>Feb 20 - Jan 30, 2024</Typography>
            <ArrowDropDownOutlinedIcon />
          </Typography>
        </Box>

        {/* Expense Dropdown */}
        <>
          <Button
            onClick={handleClick}
            endIcon={<ExpandMoreOutlinedIcon />}
            size="small"
            variant="outlined"
            sx={{
              textTransform: "none",
              borderColor: "gray",
              color: "grey",
            }}
          >
            Expense
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem onClick={handleClose}>Expense</MenuItem>
            <MenuItem onClick={handleClose}>Benefit</MenuItem>
          </Menu>
        </>
      </Stack>

      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={100}
        sx={{
          height: 10,
          borderRadius: 2,
          backgroundColor: "#E0E0E0", // Set the track color
          "& .MuiLinearProgress-bar": {
            background: `linear-gradient(to right, 
        #6211CB 0% 15%, 
        #59C36A 15% 40%, 
        #EBB805 40% 60%, 
        rgba(201, 66, 171, 0.52) 60% 75%, 
        rgba(8, 181, 212, 1) 75% 90%, 
        #D9D9D9 90% 100%)`,
          },
          mb: 4,
        }}
      />

      {/* Expense List */}
      <Stack spacing={3}>
        {[
          { category: "Fuel", amount: "₹ 20,000", percentage: "40%" },
          { category: "Food", amount: "₹ 15,000", percentage: "35%" },
          { category: "Travel", amount: "₹ 10,000", percentage: "20%" },
          { category: "Travel", amount: "₹ 10,000", percentage: "20%" },
          { category: "Shopping", amount: "₹ 10,000", percentage: "10%" },
          { category: "Shopping", amount: "₹ 10,000", percentage: "10%" },
          { category: "Voucher", amount: "₹ 5,000", percentage: "10%" },
          { category: "Voucher", amount: "₹ 5,000", percentage: "10%" },
        ].map((item, index) => (
          <Grid2 key={index} container justifyContent="space-between">
            <Typography color="#4F6487" fontWeight={500}>
              {item.category}
            </Typography>
            <Stack direction="row" alignItems="center">
              <Typography fontWeight={600} mr={1}>
                {item.amount}
              </Typography>
              <Typography fontSize="0.75rem" color="gray">
                {item.percentage}
              </Typography>
            </Stack>
          </Grid2>
        ))}
      </Stack>
    </Box>
  );
};

export default MonthlyExpense;
