import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const HumanResourcesLayout = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { user, walletId, orderId } = useParams();
  useEffect(() => {
    if (path === `/${user}/human-resource`) {
      navigate("employees");
    }
  }, [path]);

  const breadcrumb =
    "Optifii " + path === `/${user}/human-resource/employees`
      ? "Human Resource / Employees"
      : path ===
          `/${user}/human-resource/employees/card/${walletId}/${orderId}` ||
        path === `/${user}/human-resource/employees/cash/${orderId}`
      ? "Gifts & Rewards / Application Status"
      : path === `/${user}/human-resource/approvers`
      ? "Approvers"
      : path === `/${user}/human-resource/departments`
      ? "Departments"
      : "";

  return (
    <Box p={2}>
      <Typography fontFamily={"Gilroy"} fontWeight={500} fontSize={"16px"}>
        {breadcrumb}
      </Typography>
      <Outlet />
    </Box>
  );
};

export default HumanResourcesLayout;
