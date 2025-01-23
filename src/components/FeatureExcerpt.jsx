import { Box, Typography } from "@mui/material";

import barChart from "../assets/svg/barChart.svg";
import boltOutlined from "../assets/svg/boltOutlined.svg";
import checkIcon from "../assets/svg/checkIcon.svg";

const FeatureExcerpt = ({feature }) => { 
  const featureIcon = {
    boltOutlined,
    barChart,
  };

  return (
    <Box
      sx={{
        maxWidth: "450px",
        px: "10px",
      }}
    >
      {/* feature icon */}
      <Box
        sx={{
          width: "48px",
          height: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F9F5FF",
          borderRadius: "100%",
        }}
      >
        <Typography
          sx={{
            bgcolor: "#F4EBFF",
            height: "32px",
            width: "32px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={featureIcon[feature.icon]}
            alt={feature.icon}
            style={{ width: "24px", height: "24px" }}
          />
        </Typography>
      </Box>

      {/* feature title */}
      <Typography
        component={"h2"}
        sx={{
          fontSize: { lg: "20px", md: "18px", xs: "16px" },
          fontWeight: "800",
          mt: "1rem",
          textAlign: "start",
        }}
      >
        {feature.title}
      </Typography>

      {/* feature sub title */}
      <Typography
        component={"p"}
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
          fontWeight: "400",
          color: "#52525B",
          textAlign: "start",
          my: "1rem",
        }}
      >
        {feature.subTitle}
      </Typography>

      {/* feature description point */}
      <Box sx={{ mx: "1rem", mt: "1rem" }}>
        {feature.descriptionPoint.map((point, index) => (
          <Typography
            key={index}
            component={"p"}
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: "400",
              color: "#52525B",
              textAlign: "start",
              my: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <img
              src={checkIcon}
              alt="checkIcon"
              style={{ width: "28px", height: "28px", mr: "0.5rem" }}
            />
            {point}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default FeatureExcerpt;
