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
import { NavLink, useLocation } from "react-router-dom";
import { unprotectedHeaderLinks } from "../../utils/index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Header = () => {
  const { pathname } = useLocation();
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
        sx={{
          mt: "1rem",
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "black",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          position: "relative",
          zIndex: 20,
        }}
      >
        <Toolbar>
          <IconButton
            component={NavLink}
            to="/"
            width={isMobile ? "100px" : isMediumScreen ? "150px" : "200px"}
            sx={{
              ":hover": { backgroundColor: "transparent" },
            }}
          >
            <Box component={"img"} src={logo} alt="OptiFii" />
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
                <Box
                  component={"img"}
                  width={"100%"}
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
                {unprotectedHeaderLinks.map((link, index) => {
                  const isParentActive = link.child?.some((child) =>
                    window.location.pathname.startsWith(child.path)
                  );
                  return link.child ? (
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
                          ml: "1rem",
                          "&:hover": {
                            background:
                              "linear-gradient(to right, #6311CB, #8F40FB)",
                            color: "white",
                          },
                          background: isParentActive
                            ? "linear-gradient(to right, #6311CB, #8F40FB)"
                            : "transparent",
                          color: isParentActive ? "white" : "black",
                          padding: "8px 12px",
                          borderRadius: "5px",
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
                          px: 3,
                        }}
                        in={mobileDropdownOpen === index}
                      >
                        {link.child.map((child, idx) => (
                          <NavLink
                            onClick={() => toggleDrawer(false)}
                            onKeyDown={() => toggleDrawer(false)}
                            key={idx}
                            to={child.path}
                            className={({ isActive }) =>
                              `no-select anchor ${
                                isActive ? "active-link" : ""
                              }`
                            }
                            style={{
                              marginTop: "5px",
                              display: "flex",
                              justifyContent: "start",
                              textDecoration: "none",
                              textTransform: "none",
                              color: "inherit",
                              fontSize: "14px",
                            }}
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </Collapse>
                    </Box>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        `no-select anchor ${isActive ? "active-link" : ""}`
                      }
                      key={index}
                      to={link.path}
                      style={{ marginLeft: "1rem" }}
                      onClick={() => toggleDrawer(false)}
                      onKeyDown={() => toggleDrawer(false)}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}

                <Button
                  component={NavLink}
                  to="/signin"
                  onClick={() => toggleDrawer(false)}
                  onKeyDown={() => toggleDrawer(false)}
                  sx={{
                    color: "black",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(to right, #6311CB, #8F40FB)",
                      color: "white",
                    },
                    borderRadius: "10px",
                    px: 6.5,
                    width: "min-content",
                    textWrap: "nowrap",
                    mx: "auto",
                    "&.Mui-disabled": {
                      background: "linear-gradient(45deg, #6311cb, #c33fad)",
                      color: "#FFFFFF",
                    },
                  }}
                  disabled={pathname.startsWith("/signin")}
                >
                  Sign In
                </Button>
                <Button
                  component={NavLink}
                  to="/signup"
                  onClick={() => toggleDrawer(false)}
                  onKeyDown={() => toggleDrawer(false)}
                  variant="contained"
                  color="primary"
                  sx={{
                    "&:hover": {
                      background: "linear-gradient(to right, #6311CB, #8F40FB)",
                      color: "white",
                    },
                    textTransform: "none",
                    backgroundColor: "black",
                    borderRadius: "10px",
                    px: 2,
                    width: "min-content",
                    textWrap: "nowrap",
                    mx: "auto",
                    "&.Mui-disabled": {
                      background: "linear-gradient(45deg, #6311cb, #c33fad)",
                      color: "#FFFFFF",
                    },
                  }}
                  disabled={pathname.startsWith("/signup")}
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

                gap: "1rem",
              }}
            >
              {unprotectedHeaderLinks.map((link, index) => {
                const isParentActive = link.child?.some((child) =>
                  window.location.pathname.startsWith(child.path)
                );

                return link.child ? (
                  <Box
                    key={index}
                    className={`no-select`}
                    onMouseEnter={() => setWindowDropdown(index)}
                    onMouseLeave={() => setWindowDropdown(false)}
                    sx={{
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #6311CB, #8F40FB)",
                        color: "white",
                      },
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 20,
                      padding: {
                        sm: "3.5px 10px",
                        md: "3px, 10px",
                        lg: "8px 10px",
                      },
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      height: "min-content",
                      background: isParentActive
                        ? "linear-gradient(to right, #6311CB, #8F40FB)"
                        : "transparent",
                      color: isParentActive ? "white" : "black",
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
                        right: "-4px",
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
                            className={({ isActive }) =>
                              `no-select anchor ${
                                isActive ? "active-link" : ""
                              }`
                            }
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
                    className={({ isActive }) =>
                      `no-select anchor ${isActive ? "active-link" : ""}`
                    }
                    style={{
                      height: "fit-content",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </Box>

            {/* Sign In and Create Account */}
            <Box
              sx={{
                mt: { xs: "1rem", md: "0" },
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
                  "&:hover": {
                    background: "linear-gradient(to right, #6311CB, #8F40FB)",
                    color: "white",
                  },
                  mr: { sm: "2rem", md: ".5rem" },
                  color: "black",
                  textTransform: "none",
                  borderRadius: "10px",
                  py: "5px",
                  marginBottom: isMediumScreen ? "1rem" : "0",
                  "&.Mui-disabled": {
                    background: "linear-gradient(45deg, #6311cb, #c33fad)",
                    color: "#FFFFFF",
                  },
                }}
                disabled={pathname.startsWith("/signin")}
              >
                Sign In
              </Button>
              <Button
                component={NavLink}
                to="/signup"
                variant="contained"
                color="primary"
                sx={{
                  "&:hover": {
                    background: "linear-gradient(to right, #6311CB, #8F40FB)",
                    color: "white",
                  },
                  textTransform: "none",
                  backgroundColor: "black",
                  borderRadius: "10px",
                  marginBottom: isMediumScreen ? "1rem" : "0",
                  zIndex: 1,
                  "&.Mui-disabled": {
                    background: "linear-gradient(45deg, #6311cb, #c33fad)",
                    color: "#FFFFFF",
                  },
                }}
                disabled={pathname.startsWith("/signup")}
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

export default Header;
