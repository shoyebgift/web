import React, { useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import logo from "../../assets/svg/OptiFii.svg";

const ProtectedHeader = () => {
  // State to control menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Open menu on button click
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  const CartBadge = styled(Badge)`
    & .MuiBadge-badge {
      top: -10px;
      right: 2px;
      font-size: 10px;
    }
  `;

  return (
    <Box
      bgcolor={"#FFFFFF"}
      height={"60px"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"20px"}
      gap={2}
    >
      {/* Logo */}
      <Box
        component={"img"}
        src={logo}
        alt={"logo"}
        width={"100px"}
        className="no-select"
      />

      {/* Search Field */}
      <TextField
        placeholder={"Type to search"}
        variant={"outlined"}
        size="small"
        sx={{
          width: "650px",
          "& .MuiOutlinedInput-root": {
            height: "40px",
            fontSize: "14px",
            borderRadius: "10px",
          },
        }}
        color="primary"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon sx={{ color: "#A1A1AA" }} />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Right Icons and Profile */}
      <Box display={"flex"} alignItems={"center"} gap={2}>
        {/* Notification Icon */}
        <IconButton>
          <NotificationsOutlinedIcon />
          <CartBadge badgeContent={5} color="primary" overlap="circular" />
        </IconButton>

        {/* Profile Button */}
        <Box position={"relative"}>
          <Button
            sx={{
              textTransform: "none",
              width: "250px",
              height: "40px",
              color: "black",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
            onClick={handleClick} // Open the dropdown menu
          >
            <Avatar sx={{ height: 40, width: 40 }} />
            <Box overflow="hidden">
              <Typography
                variant="body1"
                fontWeight="bold"
                display={"flex"}
                alignItems="center"
              >
                UserName{" "}
                <ArrowDropDownOutlinedIcon
                  sx={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </Typography>
              <Tooltip title="sadawdsfdwusername@dwdl.com">
                <Typography
                  color="#A1A1AA"
                  variant="body2"
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  sadawdsfdwusername@dwdl.com
                </Typography>
              </Tooltip>
            </Box>
          </Button>

          {/* Profile Dropdown Menu */}
          <Menu
            width={"250px"}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{
              "& .MuiPaper-root": {
                mt: 1,
                width: "250px",
              },
              "& .MuiMenu-list": {
                padding: "5px",
                backgroundColor: "#FFFFFF",
              },
              "& .MuiMenuItem-root:hover": {
                background: "linear-gradient(to right, #6311CB, #8F40FB)",
                color: "white",
                borderRadius: "5px",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default ProtectedHeader;
