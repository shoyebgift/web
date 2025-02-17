import { Box } from "@mui/material";
import React from "react";
import StepperComponent from "../components/protected/giftsVouchers/gpr/StepperComponent";
import { Outlet } from "react-router-dom";

const ApplyForGiftCardPage = () => {
  return (
    <Box mt={2}>
      <Outlet />
    </Box>
  );
};

export default ApplyForGiftCardPage;
