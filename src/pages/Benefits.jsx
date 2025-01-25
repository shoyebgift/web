import { Box, Typography } from "@mui/material";

import walletExcerpt from "../assets/img/walletExcerpt.png";

import { benefits } from "./../utils/index";

import FeatureTitleExcerpt from "../components/unprotected/FeatureTitleExcerpt";
import BenefitCard from "../components/unprotected/BenefitCard";
import FeatureExcerpt from "../components/unprotected/FeatureExcerpt";
import BenefitWalletContainer from "../components/unprotected/BenefitWalletContainer";

const BenefitsPage = () => {
  const benefitCards = ["food", "gift", "fuel"];
  return (
    <Box
      sx={{
        py: "1rem",
        position: "relative",
        zIndex: 5,
        mb: "5rem",
        width: "100%",
      }}
    >
      {/* title and description  */}
      <Box sx={{ pl: "10px" }}>
        <FeatureTitleExcerpt
          header={benefits.header}
          description={benefits.description}
        />
      </Box>
      {/* rendering cards here: top part */}
      <Box
        className="no-select"
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: { xs: "start", md: "space-around" },
          flexWrap: { xs: "nowrap", md: "wrap" },
          overflowX: "auto",
          maxWidth: "100%",
          mx: "auto",
          mt: "5rem",
          paddingBottom: "1rem",
        }}
      >
        {benefitCards.map((card, index) => (
          <Box
            key={index}
            sx={{
              pl: "10px",
              flex: "0 0 auto",
            }}
          >
            <BenefitCard type={card} />
          </Box>
        ))}
      </Box>

      {/* rendering wallet part */}
      <Box
        sx={{
          mt: "2rem",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            mx: { xs: "none", sm: "auto" },
            my: "2rem",
          }}
        >
          <FeatureExcerpt feature={benefits.features[0]} />

          <Box
            component="img"
            src={walletExcerpt}
            alt="walletExcerpt.png"
            sx={{
              display: { xs: "none", md: "block" },
              width: "300px",
            }}
          />
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography
            component={"h2"}
            sx={{
              fontSize: "18px",
              fontWeight: "600",
              textDecoration: "underline",
              mb: "1rem",
              width: "100%",
              textAlign: "center",
            }}
          >
            Wallet
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <BenefitWalletContainer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitsPage;
