import React, { useState } from "react";
import {
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  Menu,
  MenuItem,
  Stack,
  Avatar,
  Chip,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { dash, dashHeadRow, dashHeadSecRow } from "../../../utils/dashboard";
import NormalTable from "./NormalTable";
import CircleIcon from "@mui/icons-material/Circle";

const ExpenseOverview = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const users = 50;

  const dashArr = dash.map((item, index) => ({
    "Wallet Name": (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        key={`wallet-${index}`}
      >
        <img src={item.icon} alt="wallet-icon" height="20px" />
        <Typography variant="body2">{item.wallet || "Food"}</Typography>
      </Stack>
    ),

    "Total employees": (
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "0rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: ".9rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "1.8rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "2.7rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "3.6rem" }}
        />
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "#F9F5FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
            position: "absolute",
            left: "4.4rem",
          }}
        >
          <Typography variant="caption" color="#7F56D9" fontSize={"0.5rem"}>
            +{users}
          </Typography>
        </Box>
      </Box>
    ),

    "Amount in card": (
      <Typography variant="body2" key={`walletAmount-${index}`}>
        {item.walletAmount || 5000}
      </Typography>
    ),

    "Pending request": (
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2" sx={{ color: "#007E23" }}>
          +4 new
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6311CB",
            borderRadius: 1,
            py: 0.5,
            px: 2,
            fontSize: "12px",
            textTransform: "none",
          }}
        >
          View
        </Button>
      </Stack>
    ),

    "Pending amount": (
      <Typography variant="body2" key={`balance-${index}`}>
        {item.balanceRemaining || "₹ 2000"}
      </Typography>
    ),
  }));
  const dashSecArr = dash.map((item, index) => ({
    "Wallet Name": (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        key={`wallet-${index}`}
      >
        <img src={item.icon} alt="wallet-icon" height="20px" />
        <Typography variant="body2">{item.wallet || "Food"}</Typography>
      </Stack>
    ),

    "Total employees": (
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "0rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: ".9rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "1.8rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "2.7rem" }}
        />
        <Avatar
          sx={{ width: 20, height: 20, position: "absolute", left: "3.6rem" }}
        />
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "#F9F5FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 2,
            position: "absolute",
            left: "4.4rem",
          }}
        >
          <Typography variant="caption" color="#7F56D9" fontSize={"0.5rem"}>
            +{users}
          </Typography>
        </Box>
      </Box>
    ),

    "Benefit limit": (
      <Typography variant="body2" key={`walletAmount-${index}`}>
        {item.walletAmount || 5000}
      </Typography>
    ),

    "Remaining amount": (
      <Typography variant="body2" key={`balance-${index}`}>
        {item.balanceRemaining || "₹ 2000"}
      </Typography>
    ),

    Status: (
      <Chip
        label={item?.status || "N/A"}
        size="small"
        icon={<CircleIcon />}
        variant="outlined"
        sx={{
          width: "100px",
          backgroundColor:
            item?.status === "Approved"
              ? "#ebf8ef"
              : item?.status === "Pending"
              ? "#fdf9eb"
              : "#ffe5e5",
          color:
            item?.status === "Approved"
              ? "#00A438"
              : item?.status === "Pending"
              ? "#EAB600"
              : "red",
          borderColor:
            item?.status === "Approved"
              ? "#00A438"
              : item?.status === "Pending"
              ? "#EAB600"
              : "red",
          "& .MuiChip-icon": {
            color:
              item?.status === "Approved"
                ? "#00A438"
                : item?.status === "Pending"
                ? "#EAB600"
                : "red",
            fontSize: "10px",
          },
        }}
      />
    ),
  }));
  return (
    <Box flex={1}>
      {/* Expense Overview */}
      <Paper sx={{ padding: 2, marginBottom: 1 }}>
        <Stack direction="row" justifyContent="space-between" marginBottom={2}>
          <Typography variant="h7" sx={{ fontWeight: 500, color: "#474279" }}>
            Expense Overview
          </Typography>
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #D4D4D4"
        >
          {/* Tabs */}
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            textColor="primary" // Use predefined color, or set manually via sx
            indicatorColor="primary"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#6311CB", // Custom indicator color
              },
              "& .MuiTab-root": {
                color: "#B0B0B0", // Default text color for tabs
                textTransform: "none",
              },
              "& .Mui-selected": {
                color: "#6311CB", // Selected tab text color
                fontWeight: "semibold",
              },
            }}
          >
            <Tab label="Reimbursement request" />
            <Tab label="Advance Expense request" />
          </Tabs>

          {/* Time Period */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: "#F2EEF8",
              padding: "7px 10px",
              borderRadius: "6px",
            }}
          >
            <CalendarMonthIcon fontSize="16px" />
            <Typography variant="body2" color="textSecondary">
              Time Period :
            </Typography>
            <Typography variant="body2" fontWeight={500} color="#6311CB">
              Feb 20 - Jan 30, 2024
            </Typography>
            <ExpandMoreOutlinedIcon />
          </Stack>
        </Stack>

        {/* Tab Content */}
        <Box paddingTop={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                backgroundColor: "#F2EEF8",
                padding: 2,
                borderRadius: "6px",
              }}
            >
              <Typography variant="body2" color="textSecondary">
                Total report amount
              </Typography>
              <Typography variant="body1" fontWeight={500} color="#6311CB">
                ₹ 50,000
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              {/* Filter Menu */}
              <Button
                variant="outlined"
                //   startIcon={<LuListFilter />}
                endIcon={<ExpandMoreOutlinedIcon />}
                onClick={handleClick}
                size="small"
                sx={{
                  textTransform: "none",
                  borderColor: "gray",
                  color: "grey",
                }}
              >
                Filter
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Ascending</MenuItem>
                <MenuItem onClick={handleClose}>Descending</MenuItem>
                <MenuItem onClick={handleClose}>Recently Viewed</MenuItem>
                <MenuItem onClick={handleClose}>Recently Added</MenuItem>
              </Menu>
            </Stack>
          </Stack>

          {/* Table Placeholder */}
          <NormalTable
            emptyMessage={`We don't have any Sponers `}
            tableHeadRow={dashHeadRow}
            data={dashArr}
          />
        </Box>
      </Paper>
      <Paper sx={{ padding: 2, marginBottom: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid #D4D4D4"
        >
          <Typography variant="h7" sx={{ fontWeight: 500, color: "#474279" }}>
            Expense Overview
          </Typography>

          {/* Time Period */}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: "#F2EEF8",
              padding: "7px 10px",
              borderRadius: "6px",
            }}
          >
            <CalendarMonthIcon fontSize="16px" />
            <Typography variant="body2" color="textSecondary">
              Time Period :
            </Typography>
            <Typography variant="body2" fontWeight={500} color="#6311CB">
              Feb 20 - Jan 30, 2024
            </Typography>
            <ExpandMoreOutlinedIcon />
          </Stack>
        </Stack>

        {/* Tab Content */}
        <Box paddingTop={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                backgroundColor: "#F2EEF8",
                padding: 2,
                borderRadius: "6px",
              }}
            >
              <Typography variant="body2" color="textSecondary">
                Total report amount
              </Typography>
              <Typography variant="body1" fontWeight={500} color="#6311CB">
                ₹ 50,000
              </Typography>
            </Stack>

            <Stack direction="row" alignItems="center">
              {/* Filter Menu */}
              <Button
                variant="outlined"
                //   startIcon={<LuListFilter />}
                endIcon={<ExpandMoreOutlinedIcon />}
                onClick={handleClick}
                size="small"
                sx={{
                  textTransform: "none",
                  borderColor: "gray",
                  color: "grey",
                }}
              >
                Filter
              </Button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Ascending</MenuItem>
                <MenuItem onClick={handleClose}>Descending</MenuItem>
                <MenuItem onClick={handleClose}>Recently Viewed</MenuItem>
                <MenuItem onClick={handleClose}>Recently Added</MenuItem>
              </Menu>
            </Stack>
          </Stack>

          {/* Table Placeholder */}
          <NormalTable
            emptyMessage={`We don't have any Sponers `}
            tableHeadRow={dashHeadSecRow}
            data={dashSecArr}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ExpenseOverview;
