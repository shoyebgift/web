import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Breadcrumb from "./../../BreadCrumb";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import OpenBankAccountDialog from "./OpenBankAccountDialog";
const AddBankAccountPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <Box p={2}>
      {" "}
      <Breadcrumb />
      <Box
        bgcolor={"#FFFFFF"}
        p={2}
        sx={{
          mt: 2,
          height: "calc(100vh - 130px)",
          overflow: "auto",
        }}
        borderRadius={2}
      >
        <Typography variant="body2" mb={2} fontWeight="bold" fontSize={22}>
          Add Bank Account
        </Typography>

        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Box
            bgcolor="white"
            p={3}
            borderRadius={2}
            boxShadow={3}
            textAlign="center"
            position="relative"
          >
            {/* Header */}
            <Typography fontWeight={600} fontSize={18} mb={1}>
              Select Account Type
            </Typography>

            {/* Description */}
            <Typography fontSize={14} color="text.secondary" mb={3}>
              Select your Bank account type and help us optimize your feeds
              accordingly.
            </Typography>

            {/* Account Type Buttons */}
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#0052CC",
                  color: "#0052CC",
                  textTransform: "none",
                  width: "50%",
                }}
              >
                <Stack alignItems={"center"} spacing={1} sx={{ fontSize: 20 }}>
                  <PersonIcon sx={{ fontSize: 80 }} />
                  Connect Your Existing Current Account
                </Stack>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#0052CC",
                  color: "#0052CC",
                  textTransform: "none",
                  width: "50%",
                }}
                onClick={() => setModalOpen(true)}
              >
                <Stack alignItems={"center"} spacing={1} sx={{ fontSize: 19 }}>
                  <AccountBalanceIcon sx={{ fontSize: 80 }} />
                  Open New <b>YES Bank</b> Current Account
                </Stack>
              </Button>
            </Stack>
          </Box>
        </Box>
        <OpenBankAccountDialog
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
        />
      </Box>
    </Box>
  );
};

export default AddBankAccountPage;
