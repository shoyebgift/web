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
import { dash, dashHeadThirdRow } from "../../../utils/dashboard";
import NormalTable from "./NormalTable";
import CircleIcon from "@mui/icons-material/Circle";

const EmployeeTransaction = () => {
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

  const dashThirdArr = dash.map((item, index) => ({
    "Employee Name": (
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        key={`wallet-${index}`}
      >
        <Avatar
          src="https://bit.ly/dan-abramov"
          sx={{ width: 40, height: 40 }}
        />
        <Box>
          <Typography variant="subtitle2">Olivia Rhye</Typography>
          <Typography variant="caption" color="gray">
            WD-887
          </Typography>
        </Box>
      </Stack>
    ),

    Email: <Typography variant="body2">olivia@gmail.com</Typography>,

    Wallet: <Typography variant="body2">Food</Typography>,

    Amount: (
      <Typography variant="body2" sx={{ color: "#00A438" }}>
        {item.balanceRemaining || "₹ 2000"}
      </Typography>
    ),

    "Date & time": <Typography variant="body2">2 June 2024, 10 am</Typography>,
  }));
  return (
    <Box flex={1}>
      {/* Expense Overview */}
      <Paper sx={{ padding: 2, marginBottom: 1 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h7" sx={{ fontWeight: 500, color: "#474279" }}>
            Employee Transaction
          </Typography>

          <Stack direction="row">
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
              <Typography variant="body1" fontWeight={500} color="#6311CB">
                Feb 20 - Jan 30, 2024
              </Typography>
              <ExpandMoreOutlinedIcon />
            </Stack>
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
            tableHeadRow={dashHeadThirdRow}
            data={dashThirdArr}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default EmployeeTransaction;
