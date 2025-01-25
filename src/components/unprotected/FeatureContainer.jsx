import { Box } from "@mui/material";
import FeatureExcerpt from "./FeatureExcerpt";

const FeatureContainer = ({
  isBlur = false,
  reverseOrder = false,
  image,
  feature,
  imgdisplay = { xs: "flex" },
  imgWidth = { md: "100%", xs: "70%" },
  mx = { xs: "auto", md: "0" },
  gridCol = { md: "1fr 1fr", xs: "1fr" },
}) => {
  return (
    <Box
      sx={{
        mt: "2rem",
        display: "grid",
        gridTemplateColumns: gridCol,
        gap: "1rem",
        alignItems: "center", // Ensure proper vertical alignment
      }}
    >
      {/* feature part */}
      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          justifyContent: "end",
          mx: mx,
          ml: { lg: "5%" },
          order: reverseOrder ? { xs: 1, md: 2 } : 1,
          mb: { xs: "1rem", md: "0" },
        }}
      >
        <FeatureExcerpt feature={feature} />
      </Box>

      {/* image part */}
      <Box
        sx={{
          display: imgdisplay,
          alignItems: "end",
          pl: { md: "5%" },
          width: { md: "500px", xs: "100%" },
          order: reverseOrder ? { xs: 2, md: 1 } : 2,
          filter: isBlur ? "blur(1px)" : "none",
          px: "1rem",
        }}
      >
        <Box
          component="img"
          sx={{
            width: imgWidth,
            height: "auto",
            maxWidth: "100%",
            mx: { xs: "auto", md: "0" },
          }}
          src={image}
          alt={`${image}.png`}
        />
      </Box>
    </Box>
  );
};

export default FeatureContainer;
