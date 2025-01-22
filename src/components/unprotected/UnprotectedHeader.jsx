import React, { useState } from "react";
import "./styles/unprotectedHeader.css";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  Collapse,
} from "@mui/material";

import logo from "../../assets/svg/OptiFii.svg";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { unprotectedHeaderLinks } from "../../utils/index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UnprotectedHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [windowDropdown, setWindowDropdown] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <div className="unprotected-header">
      <AppBar
        position="static"
        sx={{
          mt: "1rem",
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "black",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          position: "relative",
          zIndex: 30,
        }}
      >
        <Toolbar>
          <IconButton
            component={NavLink}
            to="/"
            sx={{
              ":hover": { backgroundColor: "transparent" },

              width: isMobile ? "100px" : isMediumScreen ? "150px" : "200px",
            }}
          >
            <img className="unprotected-header-logo" src={logo} alt="OptiFii" />
          </IconButton>
        </Toolbar>

        {/* mobile view */}
        {isMobile ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                mr: 2,
                ":hover": { backgroundColor: "transparent" },
              }}
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => toggleDrawer(false)}
            >
              <IconButton
                component={NavLink}
                to="/"
                sx={{
                  mt: 1,
                  ml: 1,
                  ":hover": { backgroundColor: "transparent" },
                  width: "100px",
                }}
                onClick={() => toggleDrawer(false)}
                onKeyDown={() => toggleDrawer(false)}
              >
                <img
                  className="unprotected-header-logo"
                  src={logo}
                  alt="OptiFii"
                />
              </IconButton>
              <Box
                sx={{
                  width: 250,
                  display: "flex",
                  flexDirection: "column",
                  mt: 5,
                  mr: 2,
                  gap: 2,
                }}
                role="presentation"
              >
                {unprotectedHeaderLinks.map((link, index) =>
                  link.child ? (
                    <Box key={index}>
                      <Box
                        onClick={() =>
                          setMobileDropdownOpen((prev) =>
                            prev === index ? null : index
                          )
                        }
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          justifyContent: "space-between",
                          mx: "1.7rem",
                        }}
                      >
                        <span>{link.name}</span>
                        <ExpandMoreIcon
                          sx={{
                            transform:
                              mobileDropdownOpen === index
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        />
                      </Box>
                      <Collapse
                        sx={{
                          pt: 1,
                          pl: 3,
                        }}
                        in={mobileDropdownOpen === index}
                      >
                        {link.child.map((child, idx) => (
                          <Button
                            onClick={() => toggleDrawer(false)}
                            onKeyDown={() => toggleDrawer(false)}
                            component={NavLink}
                            key={idx}
                            to={child.path}
                            className="no-select anchor"
                            style={{
                              mt: 1,
                              display: "flex",
                              justifyContent: "start",
                              textDecoration: "none",
                              textTransform: "none",
                              color: "inherit",
                              fontSize: "14px",
                            }}
                          >
                            {child.name}
                          </Button>
                        ))}
                      </Collapse>
                    </Box>
                  ) : (
                    <NavLink
                      key={index}
                      to={link.path}
                      className="no-select anchor"
                      style={{ marginLeft: "1rem" }}
                      onClick={() => toggleDrawer(false)}
                      onKeyDown={() => toggleDrawer(false)}
                    >
                      {link.name}
                    </NavLink>
                  )
                )}

                <Button
                  component={NavLink}
                  to="/signin"
                  sx={{
                    color: "black",
                    textTransform: "none",
                    ":hover": {
                      backgroundColor: "transparent",
                    },

                    "&:hover": {
                      backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                    borderRadius: "10px",
                    px: 5,
                    width: "min-content",
                    textWrap: "nowrap",
                    mx: "auto",
                  }}
                >
                  Sign In
                </Button>
                <Button
                  component={NavLink}
                  to="/signup"
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "black",
                    borderRadius: "10px",
                    px: 2,
                    width: "min-content",
                    textWrap: "nowrap",
                    mx: "auto",
                  }}
                >
                  Create an Account
                </Button>
              </Box>
            </Drawer>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: isMediumScreen ? "column" : "row",
              justifyContent: "space-between",
              fontSize: { lg: "16px", md: "10px", xs: "12px" },
              fontWeight: "500",
            }}
          >
            {/* NavLinks */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                width: isMediumScreen ? "100%" : "auto",
                alignItems: "center",
              }}
            >
              {unprotectedHeaderLinks.map((link, index) =>
                link.child ? (
                  <Box
                    key={index}
                    className="no-select"
                    onMouseEnter={() => setWindowDropdown(index)}
                    onMouseLeave={() => setWindowDropdown(false)}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgb(51, 51, 51, 0.1)",
                      },
                      cursor: "pointer",
                      position: "relative",
                      padding: { sm: "5px 10px", lg: "10px" },
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      height: "min-content",
                    }}
                  >
                    <span>{link.name}</span>
                    <ExpandMoreIcon
                      sx={{
                        transform:
                          windowDropdown === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        width: "min-content",
                        top: { sm: "34px", lg: "42px" }, 
                        right: { sm: "-35px", lg: "-65px" },
                        opacity: windowDropdown === index ? 1 : 0,
                        transform:
                          windowDropdown === index
                            ? "translateY(0)"
                            : "translateY(-10px)",
                        visibility:
                          windowDropdown === index ? "visible" : "hidden",
                        transition:
                          "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
                        zIndex: 2,
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 20,
                          bgcolor: "white",
                          borderRadius: "10px",
                          width: "fit-content",
                          height: "min-content",
                          whiteSpace: "nowrap",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                          p: "1rem",
                          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {link.child.map((child, idx) => (
                          <NavLink
                            key={idx}
                            to={child.path}
                            className="no-select anchor"
                            style={{
                              height: "min-content",
                            }}
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                ) : (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="no-select anchor"
                    style={{ marginLeft: "1rem", height: "fit-content", whiteSpace: "nowrap" }}
                  >
                    {link.name}
                  </NavLink>
                )
              )}
            </Box>

            {/* Sign In and Create Account */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: isMediumScreen ? "100%" : "auto",
              }}
            >
              <Button
                component={NavLink}
                to="/signin"
                sx={{
                  marginRight: "1rem",
                  color: "black",
                  textTransform: "none",
                  ":hover": {
                    backgroundColor: "transparent",
                  },
                  marginBottom: isMediumScreen ? "1rem" : "0",
                }}
              >
                Sign In
              </Button>
              <Button
                component={NavLink}
                to="/signup"
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "none",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  marginBottom: isMediumScreen ? "1rem" : "0",
                  zIndex: 1,
                }}
              >
                Create an Account
              </Button>
            </Box>
          </Box>
        )}
      </AppBar>
    </div>
  );
};

export default UnprotectedHeader;
