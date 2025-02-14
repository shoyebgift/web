import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProtectedHeader from "./../components/protected/Header";
import Navbar from "./../components/protected/Navbar";

const ProtectedLayout = () => {
  const { user } = useParams();
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    if (pathname === `/${user}`) {
      navigate(`/${user}/dashboard`);
    }
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
        <Box overflow={"auto"} height="calc(100vh - 60px)">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
