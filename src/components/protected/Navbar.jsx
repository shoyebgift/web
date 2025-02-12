import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import websiteLogo from "../../assets/svg/websiteLogo.svg";

import { protectedNavlinks } from "../../utils/index";
import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linksIcons = {
    HomeOutlinedIcon,
    SignalCellularAltOutlinedIcon,
    RequestPageOutlinedIcon,
    AnalyticsOutlinedIcon,
    SettingsOutlinedIcon,
    NotificationsOutlinedIcon,
    AdsClickOutlinedIcon,
  };

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box
      width={"307px"}
      bgcolor={"#1A0436"}
      height="calc(100vh - 60px)"
      color={"white"}
      pt={1}
      pb={2}
      sx={{
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {/* website logo here */}
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={2}
        m={2}
        bgcolor={"#382450"}
        p={1}
        borderRadius={1}
      >
        <Box
          component={"img"}
          src={websiteLogo}
          alt="website logo"
          width={"25px"}
          className="no-select"
        />
        <Typography fontSize={"12px"} fontWeight={"bold"}>
          {" "}
          Website Developers India Pvt Ltd
        </Typography>
      </Box>

      {/* links */}

      {protectedNavlinks.map((group) => (
        <Box key={group.heading || 1}>
          <Typography
            fontSize={"11px"}
            ml={4}
            textTransform={"uppercase"}
            color="#E4E4E4"
            my={2}
            fontFamily={"Gilroy"}
          >
            {group.heading}
          </Typography>

          {group.items.map((link) => (
            <Box key={link.label}>
              <Box
                mb={1}
                component={NavLink}
                display="flex"
                alignItems="center"
                to={link.to}
                color="white"
                onClick={(e) => {
                  setExpanded(() => ({
                    [link.label]: true,
                  }));
                }}
                sx={{
                  "&.active": {
                    "& .blue-line": {
                      width: "4px",
                    },
                    "& .background-col": {
                      bgcolor: "#382450",
                      ml: 1,
                      transition: "margin 0.2s ease",
                    },
                  },
                  "&:hover .blue-line": {
                    width: "4px",
                  },
                  "&:hover .background-col": {
                    bgcolor: "#382450",
                    ml: 1,
                    transition: "margin 0.2s ease",
                  },
                  textDecoration: "none",
                }}
              >
                {/* Blue line */}
                <Box
                  className="blue-line"
                  height="100%"
                  width="0"
                  bgcolor="blue"
                  sx={{
                    minHeight: "43px",
                  }}
                  borderRadius={1}
                />
                <Box
                  className="background-col"
                  display={"flex"}
                  p={"6px"}
                  borderRadius={"2px 0 0 2px"}
                  width={"100%"}
                  alignItems={"center"}
                  gap={1}
                  height={"43px"}
                >
                  <Box component={linksIcons[link.icon]} fontSize={"20px"} />
                  <Typography
                    fontSize={"14px"}
                    display={"flex"}
                    alignItems={"center"}
                    gap={1}
                    fontFamily={"Gilroy"}
                    fontWeight={"500"}
                  >
                    {link.label}{" "}
                    {link.subLinks && (
                      <Button
                        color="inherit"
                        size="small"
                        sx={{
                          "&.MuiButtonBase-root": {
                            width: "fit-content",
                            padding: "0px",
                          },
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleExpanded(link.label);
                        }}
                      >
                        <ExpandMoreIcon
                          fontSize="small"
                          sx={{
                            rotate: expanded[link.label] ? "180deg" : "0deg",
                          }}
                        />
                      </Button>
                    )}
                  </Typography>
                </Box>
              </Box>
              <Box
                pl={4}
                sx={{
                  textDecoration: "none",
                  maxHeight: expanded[link.label] ? "100px" : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
                display={"flex"}
                flexDirection={"column"}
                color={"white"}
                fontFamily={"Gilroy"}
                fontSize={"12px"}
              >
                {link.subLinks &&
                  link.subLinks.map((subLink) => (
                    <Box
                      key={subLink.label}
                      component={NavLink}
                      to={subLink.to}
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                      p={1}
                      color={"white"}
                      fontSize={"12px"}
                      height={"min-content"}
                      sx={{
                        "&:hover": {
                          color: "#7f58af",
                        },
                        "&.active": {

                          color: "#ffffff !important",
                          fontWeight: "500",
                          "& .active__sublink": {
                            bgcolor: "blue",
                          },
                        },
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        className="active__sublink"
                        borderRadius={"100%"}
                        width={5}
                        height={5}
                      />
                      {subLink.label}
                    </Box>
                  ))}
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
