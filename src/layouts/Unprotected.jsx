import "./styles/unprotected.css";
import UnprotectedHeader from "../components/unprotected/Header";
import Footer from "../components/unprotected/Footer";
import { Box, Typography } from "@mui/material";

import lines from "../assets/svg/lines.svg";
import ScrollToTop from "./../components/ScrollToTop";
import { Outlet } from "react-router-dom";
const UnprotectedLayout = () => {
  return (
    <Box
      className="unprotected-layout"
      sx={{
        position: "relative",
        overflow: "hidden",
        mx: "auto",
        minHeight: "100vh",
        maxWidth: "1500px",
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <ScrollToTop />
      <UnprotectedHeader />
      <Outlet />

      {/* footer */}
      <Box
        sx={{
          zIndex: 5,
          backgroundColor: "#78909c1a",
          padding: { xs: "1rem", md: "1rem 5rem 0rem 5rem" },
        }}
      >
        <Footer />
      </Box>

      <Typography
        component={"div"}
        className="no-select"
        sx={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          right: 0,
          maxHeight: "800px",
          width: "50%",
          maxWidth: "700px",
        }}
      >
        <img src={lines} alt="lines" className="lines-img" />
      </Typography>
    </Box>
  );
};

export default UnprotectedLayout;
