import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import websiteLogo from "../../assets/webLogo.jpg";

import { protectedNavlinks } from "../../utils/index";
import { Box, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <Box
      width={"100%"}
      bgcolor={"#210A33"}
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
        my={2}
        mx={1}
        bgcolor={"#382450"}
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.4)"
        p={1}
        borderRadius={1}
      >
        <Box
          component="img"
          src={websiteLogo}
          alt="website logo"
          width="30px"
          height="auto"
          className="no-select"
          sx={{ objectFit: "contain" }}
        />
        <Typography
          fontSize={"14px"}
          fontFamily={"Geologica"}
          fontWeight={600}
          letterSpacing={"0.5px"}
        >
          {" "}
          Tata Motors
        </Typography>
      </Box>

      {/* links */}

      {protectedNavlinks.map((group, index) => (
        <Box key={index}>
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
                      // bgcolor: "#382450",
                      background:
                        "linear-gradient(90deg,rgba(55,37,234,0.6) 0%,rgba(94,15,205,0.6) 100%)",
                      ml: 1,
                      transition: "margin 0.2s ease",
                    },
                  },
                  "&:hover .blue-line": {
                    width: "4px",
                  },
                  "&:hover .background-col": {
                    // bgcolor: "#382450",
                    background:
                      "linear-gradient(90deg,rgba(55,37,234,0.6) 0%,rgba(94,15,205,0.6) 100%)",
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
                  gap={0.5}
                  height={"43px"}
                  fontFamily={"Gilroy"}
                  fontWeight={"300"}
                  fontSize={"14px"}
                >
                  {/* icon  */}
                  <Box
                    component={"img"}
                    height={"18px"}
                    width={"18px"}
                    src={link.icon}
                    alt="icon"
                  />
                  {link.label}{" "}
                  {link.subLinks && (
                    <IconButton
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
                    </IconButton>
                  )}
                </Box>
              </Box>
              <Box
                pl={2}
                pb={1}
                sx={{
                  textDecoration: "none",
                  maxHeight: expanded[link.label] ? "120px" : 0,
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
                      fontSize={"14px"}
                      fontFamily={"Gilroy"}
                      fontWeight={"300"}
                      height={"min-content"}
                      sx={{
                        "&:hover": {
                          color: "#7f58af",
                        },
                        "&.active": {
                          color: "#ffffff !important",
                          fontWeight: "400",
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
