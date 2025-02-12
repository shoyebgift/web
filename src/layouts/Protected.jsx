import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProtectedHeader from "./../components/protected/Header";
import Navbar from "./../components/protected/Navbar";

const ProtectedLayout = () => {
  const { user } = useParams();
  const pathname = window.location.pathname;
  const navigate = useNavigate();

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
      <ProtectedHeader />

      <Box
        display={"grid"}
        gridTemplateColumns={"250px 1fr"}
        overflow={"hidden"}
        height={"100%"}
      >
        <Navbar />
        <Box overflow={"auto"} height="calc(100vh - 60px)">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
