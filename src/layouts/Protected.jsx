import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import ProtectedHeader from "./../components/protected/Header";
import Navbar from "./../components/protected/Navbar";

const ProtectedLayout = () => {
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
        gridTemplateColumns={"307px 1fr"}
        overflow={"hidden"}
        height={"100%"}
      >
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default ProtectedLayout;
