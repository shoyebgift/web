import { Alert, AlertTitle, Box, Slide } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProtectedHeader from "./../components/protected/Header";
import Navbar from "./../components/protected/Navbar";
import ErrorIcon from "@mui/icons-material/Error";

const ProtectedLayout = () => {
  const { user } = useParams();
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    if (pathname === `/${user}`) {
      navigate(`/${user}/dashboard`);
    }
  }, []);
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine); // Updates state dynamically
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  return (
    <Box
      bgcolor={"#F3F3F9"}
      width={"100%"}
      mx={"auto"}
      overflow={"hidden"}
      maxHeight={"100vh"}
      height={"fit-content"}
    >
      <ProtectedHeader setShowNavbar={setShowNavbar} showNavbar={showNavbar} />

      <Box
        display={"grid"}
        sx={{
          transition: "grid-template-columns 0.3s ease",
        }}
        gridTemplateColumns={showNavbar ? "250px 1fr" : "0px 1fr"}
        overflow={"hidden"}
        height={"100%"}
      >
        <Navbar showNavbar={showNavbar} />
        <Box
          overflow={"auto"}
          height="calc(100vh - 60px)"
          position={"relative"}
        >
          <Slide
            direction="down"
            in={!isOnline}
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <Alert
              severity="info"
              icon={
                <ErrorIcon
                  sx={{ color: "white", transform: "rotate(180deg)" }}
                />
              }
              sx={{
                position: "absolute",
                borderRadius: "0px",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                fontWeight: 600,
                fontSize: "1rem",
                color: "white",
                background:
                  "linear-gradient(to right, #e53e3e, #d69e2e, #e53e3e)",
              }}
            >
              No Internet!
            </Alert>
          </Slide>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
