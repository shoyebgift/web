import React from "react";
import TermsAndPolicyPage from "./../../pages/TermsAndPolicy";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";

const TermsCondition = ({ setShowTerms, handleAgree }) => {
  const [acceptPolicy, setAcceptPolicy] = React.useState(false);
  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgcolor={"rgba(0,0,0,0.5)"}
      zIndex={40}
      height={"100%"}
    >
      <Box
        position={"relative"}
        overflow={"auto"}
        borderRadius={"10px"}
        height={"95%"}
        width={{ xs: "75%", md: "50%" }}
        mx={"auto"}
        bgcolor={"white"}
        my={2}
      >
        {" "}
        <TermsAndPolicyPage />
        <Box
          maxWidth={"500px"}
          mx={"auto"}
          mb={2}
          alignItems={"center"}
          gap={1}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={acceptPolicy}
                onChange={(e) => setAcceptPolicy(e.target.checked)}
                sx={{
                  color: "#7F56D9",
                  "&.Mui-checked": {
                    color: "#7F56D9",
                  },
                }}
              />
            }
            label="Agree to terms and conditions"
          />

          <Button
            variant="contained"
            disabled={!acceptPolicy}
            onClick={handleAgree}
            sx={{
              backgroundColor: "#7F56D9",
              color: "white",
              "&:hover": {
                backgroundColor: "#7F56D9",
              },
            }}
          >
            Agree & Continue
          </Button>
        </Box>
        <IconButton
          onClick={() => setShowTerms(false)}
          sx={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            color: "red",
            zIndex: 10,
            "&:hover": {
              background: "none",
            },
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TermsCondition;
