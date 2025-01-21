import { Box, Typography } from "@mui/material";
import React from "react";

const FeatureTitleExcerpt = ({ header, description }) => {
  return (
    <Box
      sx={{ mx: "auto", textAlign: "center", maxWidth: "700px" }}
      className="no-select"
    >
      <Typography
        component={"span"}
        sx={{
         color: "#6941C6",
            padding: "4px 12px",
            borderRadius: "16px",
            backgroundColor: "#F9F5FF",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "20px",
            textDecoration: "none",
            textUnderlinePosition: "from-font",
        }}
      >
        Feature
      </Typography>

      <Typography
        component={"h2"}
        sx={{
          mt: "12px",
          fontWeight: "600",
          fontSize: { md: "36px", sm: "30", xs: "24px" },
        }}
      >
        {header}
      </Typography>

      <Typography
        component={"p"}
        sx={{
          whiteSpace: "pre-line",
          fontSize: { xs: "14px", sm: "16px", md: "20px" },
          mt: "1rem",
          color: "#667085",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default FeatureTitleExcerpt;
