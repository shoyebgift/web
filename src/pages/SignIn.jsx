import React from "react";
import { Box, Typography } from "@mui/material";

import optifii from "../assets/svg/OptiFii.svg";

const SignInPage = () => {
  return (
    <Box
      mx="auto"
      maxWidth="500px"
      bgcolor={"#FFFFFF"}
      p={{ xs: 2, md: 4 }}
      borderRadius={"2px"}
      zIndex={10}
      position={"relative"}
      boxShadow={"0px 0px 10px rgba(0, 0, 0, 0.1)"}
      my={"4rem"}
      width={"90%"}
    >
      <Box
        component={"img"}
        src={optifii}
        alt="OptiFii"
        width={{ xs: "80px", md: "100px" }}
      />

      <Typography
        component={"h3"}
        fontWeight={600}
        fontSize={{ xs: "18px", md: "22px" }} 
      >
        Welcome
      </Typography>
    </Box>
  );
};

export default SignInPage;
