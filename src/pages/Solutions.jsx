import { Box, Typography } from "@mui/material";
import { solutions } from "./../utils/index";
import selectCardType from "../assets/img/selectCardType.png";
import screenMockup from "../assets/img/screenMockup.png";
import screenMockup2 from "../assets/img/screenMockup2.png";

import FeatureTitleExcerpt from "../components/unprotected/FeatureTitleExcerpt";
import FeatureContainer from "../components/unprotected/FeatureContainer";

const SolutionsPage = () => {
  return (
    <Box sx={{ padding: "1rem", position: "relative", zIndex: 5 }}>
      <FeatureTitleExcerpt
        header={solutions.header}
        description={solutions.description}
      />

      <Typography
        component={"div"}
        sx={{
          mt: "2rem",
          textAlign: "center",
          mx: { md: "auto" },
          width: { md: "1000px", xs: "100%" },
        }}
      >
        <img
          src={selectCardType}
          alt="selectCardType.png"
          style={{ width: "100%" }}
        />
      </Typography>

      <Box sx={{ mx: "auto", mt: "2rem", maxWidth: "1300px" }}>
        <FeatureContainer
          image={screenMockup}
          feature={solutions.features[0]}
          reverseOrder={true}
        />
        <FeatureContainer
          isBlur={true}
          image={screenMockup2}
          feature={solutions.features[1]}
        />
      </Box>
    </Box>
  );
};

export default SolutionsPage;
