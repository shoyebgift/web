import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const GiftVouchersLayout = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { user } = useParams();
  useEffect(() => {
    if (path === `/${user}/gifts-&-rewards`) {
      navigate("dashboard");
    }
  }, [path]);

  return (
    <Box p={2}>
      <BreadCrumb />
      <Outlet />
    </Box>
  );
};

export default GiftVouchersLayout;
