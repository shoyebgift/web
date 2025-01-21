import React from "react";
import FeatureTitleExcerpt from "../components/FeatureTitleExcerpt";
import reward from "../assets/svg/rewards1.svg";
import { rewards } from "./../utils/index";
import { Box } from "@mui/material";
import FeatureExcerpt from "./../components/FeatureExcerpt";
import FeatureContainer from "../components/FeatureContainer";
import DummyCards from "../components/DummyCards";

const RewardsPage = () => {
  return (
    <Box
      sx={{
        padding: "1rem",
        position: "relative",
        bgcolor: "#FAFAFA",
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      <FeatureTitleExcerpt
        header={rewards.title}
        description={rewards.description}
      />

      {/* top part */}
      <FeatureContainer
        feature={rewards.features[0]}
        image={reward}
        imgWidth={"80%"}
        imgdisplay={{ xs: "none", lg: "flex" }}
        gridCol={{ lg: "1fr 1fr", xs: "1fr" }}
      />

      {/* middle part */}
      <Box
        sx={{
          mt: "2rem",
          display: "grid",
          gridTemplateColumns: { lg: "1fr 1fr", xs: "1fr" },
          gap: "1rem",
          alignItems: "center",
          width: "fit-content",
          mx: "auto",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={{ xs: 4, md: 8 }}
          alignItems={"end"}
          justifyContent={"start"}
          mx={{ xs: "auto", lg: 2 }}
        >
          <Box
            pb={{ xs: 6, md: 10 }}
            sx={{
              ml: { xs: "-20px", lg: 0 },
              rotate: { xs: "-8deg", md: "-16deg" },
              maxWidth: "50vw",
            }}
          >
            <DummyCards type={"physical"} />
          </Box>
          <Box
            pb={{ xs: 2, md: 6 }}
            sx={{
              rotate: { xs: "8deg", md: "16deg" },
              maxWidth: "50vw",
            }}
          >
            <DummyCards type={"Digital"} />
          </Box>
        </Box>

        <FeatureExcerpt feature={rewards.features[0]} />
      </Box>

      {/* lower part  */}
      <Box
        sx={{
          mt: "2rem",
          display: "grid",
          gridTemplateColumns: { lg: "1fr 1fr", xs: "1fr" },
          gap: "1rem",
          alignItems: "center",
          width: "fit-content",
          mx: "auto",
        }}
      >
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <FeatureExcerpt feature={rewards.features[0]} />
        </Box>

        <Box sx={{ mt: "2rem", mx: "auto", width: "fit-content" }}>
          <DummyCards type={"insta"} />
        </Box>
      </Box>
    </Box>
  );
};

export default RewardsPage;
