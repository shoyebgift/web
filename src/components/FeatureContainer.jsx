import { Box, Typography } from "@mui/material";
import FeatureExcerpt from "./FeatureExcerpt";

const FeatureContainer = ({
  isBlur = false,
  reverseOrder = false,
  image,
  feature,
  imgdisplay = { xs: "flex" },
  imgWidth = "100%",
  gridCol = { md: "1fr 1fr", xs: "1fr" },
}) => {
  return (
    <Box
      sx={{
        mt: "2rem",
        display: "grid",
        gridTemplateColumns: gridCol,
        gap: "1rem",
      }}
    >
      {/* feature part */}
      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          justifyContent: "end",
          mx: { sm: "auto", md: "0" },
          ml: { md: "5%" },
          order: reverseOrder ? { xs: 1, md: 2 } : 1,
          mb:{xs:"1rem", md:"0"},
        }}
      >
        <FeatureExcerpt feature={feature} />
      </Box>

      {/* image part  */}
      <Typography
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
          component={"img"}
          sx={{
            width: { md: imgWidth, xs: "70%" },
            height: "fit-content",
            mx:{xs:"auto", md:"0"},
          }}
          src={image}
          alt={`${image}.png`}
        />
      </Typography>
    </Box>
  );
};

export default FeatureContainer;
