import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const ApplyForGiftCardPage = () => {
  return (
    <Box mt={2}>
      <Outlet />
    </Box>
  );
};

export default ApplyForGiftCardPage;
