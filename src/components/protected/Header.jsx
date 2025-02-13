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
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import logo from "../../assets/svg/OptiFii.svg";

const ProtectedHeader = ({ setShowNavbar, showNavbar }) => {
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
      <Box display={"flex"} alignItems={"center"} gap={1}>
        {/* Logo */}
        <Box
          component={"img"}
          src={logo}
          alt={"logo"}
          width={"100px"}
          className="no-select"
        />
        <IconButton
          disableRipple
          sx={{
            color: "#6311CB",
            ml: "100px",
            p: 1,
            bgcolor: "#6311CB29",
            borderRadius: 2,
          }}
        >
          <KeyboardDoubleArrowLeftOutlinedIcon
            sx={{ transform: showNavbar ? "rotate(000deg)" : "rotate(180deg)" }}
          />
        </IconButton>

        {/* Search Field */}
        <TextField
          placeholder={"Type to search"}
          variant={"outlined"}
          size="small"
          sx={{
            width: "400px",
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
      </Box>

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
            disableRipple
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
                display={"flex"}
                alignItems="center"
                fontFamily={"TT Commons"}
                fontSize={"18px"}
              >
                Jenney Joe{" "}
              </Typography>
              <Tooltip title="jenney@dwdl.com">
                <Typography
                  color="#A1A1AA"
                  fontFamily={"TT Commons"}
                  fontSize={"16px"}
                  fontWeight={500}
                  sx={{
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  jenney@dwdl.com
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
