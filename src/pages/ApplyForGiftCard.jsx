import { Box } from "@mui/material";
import React from "react";
import StepperComponent from "../components/protected/giftsVouchers/StepperComponent";
import { Outlet } from "react-router-dom";

const ApplyForGiftCardPage = () => {
  return (
    <Box p={2} mt={2}>
      <Outlet />
    </Box>
  );
};

export default ApplyForGiftCardPage;
