import { Box, Typography } from "@mui/material";

import multiWallet from "../assets/img/multiWallet.png";
import createWalletPolicy from "../assets/img/walletPolicy.png";
import totalSpending from "../assets/img/totalSpending.png";
import employeeTransaction from "../assets/img/employeeTransaction.png";

import FeatureContainer from "../components/unprotected/FeatureContainer";
import FeatureTitleExcerpt from "../components/unprotected/FeatureTitleExcerpt";
import { expenses } from "../utils/index";

const ExpensePage = () => {
  return (
    <Box sx={{ padding: "1rem", position: "relative", zIndex: 5 }}>
      <FeatureTitleExcerpt
        header={expenses.header}
        description={expenses.description}
      />

      <Box
        sx={{
          px: "2rem",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr", xs: "1fr" },
          gap: "1rem",
          mt: "2rem",
        }}
      >
        <Box
          sx={{
            mx: { xs: "auto", md: 0 },
            mt: "1rem",
            textAlign: "start",
            maxWidth: "300px",
          }}
        >
          <Typography
            component={"h2"}
            sx={{
              fontSize: { lg: "20px", md: "18px", xs: "16px" },
              fontWeight: "800",
              mt: "1rem",
              textAlign: "start",
            }}
          >
            Keep track of all expense
          </Typography>
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
            Measure what matters with ready-to-use reports. You can filter,
            export, and drilldown on the data in a couple of clicks.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            gap: 2,
            width: { md: "500px", xs: "100%" },
          }}
        >
          <Box
            component={"img"}
            src={totalSpending}
            alt="totalSpending.png"
            sx={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
              "@media (max-width: 1050px) and (min-width: 900px)": {
                maxWidth: "200px",
              },
            }}
          />
          <Box
            component={"img"}
            src={employeeTransaction}
            alt="employeeTransaction.png"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              "@media (max-width: 1050px) and (min-width: 900px)": {
                maxWidth: "350px",
              },
            }}
          />
        </Box>
      </Box>

      <FeatureContainer
        image={multiWallet}
        feature={expenses.features[0]}
        reverseOrder={true}
      />
      <FeatureContainer
        image={createWalletPolicy}
        feature={expenses.features[1]}
      />
    </Box>
  );
};

export default ExpensePage;
