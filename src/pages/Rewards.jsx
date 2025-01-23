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
      <Box sx={{ mx: "auto", mt: "2rem", maxWidth: "1200px" }}>
        <FeatureContainer
          feature={rewards.features[0]}
          mx={{ xs: "auto", xl: "0" }}
          image={reward}
          imgWidth={{ xs: "40%", md: "70%" }}
        />
      </Box>

      {/* middle part */}
      <Box
        sx={{
          mt: "2rem",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
          gap: "1rem",
          alignItems: "center",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            mt: "2rem",
            mx: { xs: "auto", md: "5rem" },
            width: "fit-content",
            order: { xs: 2, md: 1 },
          }}
        >
          <DummyCards type={"digital"} />
        </Box>

        <Box
          sx={{
            order: { xs: 1, md: 2 },
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <FeatureExcerpt feature={rewards.features[1]} />
        </Box>
      </Box>

      {/* lower part  */}
      <Box
        sx={{
          mt: "2rem",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
          gap: "1rem",
          alignItems: "center",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        <Box sx={{ mx: { xs: "auto", md: "2rem" } }}>
          <FeatureExcerpt feature={rewards.features[2]} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          gap={{ xs: 4, md: 8 }}
          alignItems={"end"}
          justifyContent={"start"}
          mx={{ xs: "auto", md: 0 }}
        >
          <Box
            pb={{ xs: 6, md: 10 }}
            sx={{
              ml: { xs: "-20px", lg: 0 },
              rotate: { xs: "-8deg", md: "-9deg", lg: "-16deg" },
              maxWidth: "50vw",
            }}
          >
            <DummyCards type={"physical"} />
          </Box>
          <Box
            pb={{ xs: 2, md: 6 }}
            sx={{
              rotate: { xs: "8deg", md: "9deg", lg: "16deg" },
              maxWidth: "50vw",
            }}
          >
            <DummyCards type={"insta"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RewardsPage;
