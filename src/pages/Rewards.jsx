import { Box } from "@mui/material";

import { rewards } from "./../utils/index";

import shoppersStop from "../assets/img/shoppersStop.png";
import nykaa from "../assets/img/nykaa.png";
import croma from "../assets/img/croma.png";
import amazon from "../assets/img/amazon.png";
import bigBasket from "../assets/img/bigBasket.png";
import lifestyleStore from "../assets/img/lifestyleStore.png";

import DummyCards from "../components/unprotected/DummyCards";
import FeatureTitleExcerpt from "../components/unprotected/FeatureTitleExcerpt";
import FeatureExcerpt from "../components/unprotected/FeatureExcerpt";

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

        {/* image part  */}
        <Box
          sx={{
            mx: {
              xs: "auto",
              md: "2rem",
            },
            width: "100%",
            height: "100%",
            minHeight:{xs:"200px",md: "350px"},
            maxWidth: "550px",
            position: "relative",
          }}
        >
          <Box
            component={"img"}
            src={lifestyleStore}
            alt="lifestyleStore.png"
            sx={{
              objectFit: "cover",
              width: { xs: "90px", md: "180px" },
              position: "absolute",
              bottom: { xs: "115px", md: "180px" },
              left: "50%",
              transform: "translateX(35%)",
              zIndex: 5,
            }}
          />
          <Box
            component={"img"}
            src={bigBasket}
            alt="bigBasket.png"
            sx={{
              objectFit: "cover",
              width: { xs: "90px", md: "180px" },
              position: "absolute",
              bottom: { xs: "115px", md: "180px" },
              right: "50%",
              transform: "translateX(-35%)",
              zIndex: 7,
            }}
          />
          <Box
            component={"img"}
            src={amazon}
            alt="amazon.png"
            sx={{
              objectFit: "cover",
              width: { xs: "90px", md: "180px" },
              position: "absolute",
              bottom: { sm: "75px", md: "125px" },
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 6,
            }}
          />
          <Box
            component={"img"}
            src={nykaa}
            alt="nykaa.png"
            sx={{
              objectFit: "cover",
              width: { xs: "90px", md: "180px" },
              position: "absolute",
              bottom: { xs: "40px", md: "70px" },
              right: "50%",
              transform: "translateX(-35%)",
              zIndex: 5,
            }}
          />
          <Box
            component={"img"}
            src={croma}
            alt="croma.png"
            sx={{
              objectFit: "cover",
              width: { xs: "90px", md: "180px" },
              position: "absolute",
              bottom: { xs: "40px", md: "70px" },
              left: "50%",
              transform: "translateX(35%)",
              zIndex: 5,
            }}
          />{" "}
          <Box
            component={"img"}
            src={shoppersStop}
            alt="shoppersStop.png"
            sx={{
              objectFit: "cover",
              width: { xs: "90px", md: "180px" },
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 4,
            }}
          />
        </Box>
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
