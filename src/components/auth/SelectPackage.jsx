import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import benefit from "../../assets/svg/selectPage/benefit.svg";
import expense from "../../assets/svg/selectPage/expense.svg";
import giftVouchers from "../../assets/svg/selectPage/giftVouchers.svg";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

const SelectPackage = ({ setCurrentStage, type, setShowTerms }) => {
  const isTypeY = ["Sole Proprietorship", "One Person Company (OPC)"].includes(
    type
  );

  const handleBack = () => {
    setCurrentStage((prev) => {
      if (isTypeY) return 2;
      return prev - 1;
    });
  };

  const types = [
    {
      name: "Expense",
      icon: expense,
      description: "Expense",
    },
    {
      name: "Benefits",
      icon: benefit,
      description: "Benefits",
    },
    {
      name: "Gift & Vouchers",
      icon: giftVouchers,
      description: "Rewards",
    },
  ];

  return (
    <Box width={"fit-content"} mx={"auto"} maxWidth={"800px"}>
      <Typography fontSize={"35px"} fontWeight={500} mb={1}>
        We're launching soon
      </Typography>
      <Typography fontSize={"14px"} fontWeight={500} mb={1} color="#3E3E3E">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
      </Typography>
      <Box
        display={"flex"}
        justifyContent={{ xs: "center", md: "space-between" }}
        width={"100%"}
        gap={2}
        flexWrap={"wrap"}
        p={1}
      >
        {types.map((type, index) => (
          <Box
            key={index}
            height={"320px"}
            width={"220px"}
            borderRadius={"10px"}
            sx={{
              background:
                "linear-gradient(158.69deg, #C33FAD 1.29%, #0A006B 98.23%)",
            }}
            p={1}
            display={"flex"}
            flexDirection={"column"} // Enable column layout for children
          >
            <Box
              component={"img"}
              height={"50px"}
              width={"50px"}
              src={type.icon}
              alt={type.name}
              mb={1}
            />

            <Typography color="#fff" fontSize={"18px"} fontWeight={600}>
              OptiFii {type.name}
            </Typography>
            <Typography
              mb={3}
              color="#FFFFFFAD"
              fontSize={"10px"}
              fontWeight={400}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </Typography>

            <Typography color="#FFFFFFCC" fontSize={"10px"} fontWeight={400}>
              This plan gets
            </Typography>

            {/* Card content */}
            <Box
              bgcolor={"#fff"}
              borderRadius={"10px"}
              flex={1} // Allows this box to grow and fill the remaining space
              display={"flex"}
              justifyContent={"space-between"}
              p={1}
              flexDirection={"column"}
            >
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <Box
                    key={index}
                    fontSize={"10px"}
                    display={"flex"}
                    gap={1}
                    alignItems={"center"}
                  >
                    <Box
                      bgcolor={"#6311CB0F"}
                      width={"20px"}
                      height={"20px"}
                      borderRadius={"50%"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <CheckIcon sx={{ color: "#3725EA", fontSize: "9px" }} />
                    </Box>
                    {"Lorem ipsum dolor sit amet, "}
                  </Box>
                ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my="1rem"
        gap={1}
        width={"100%"}
        maxWidth={"500px"}
        mx={"auto"}
      >
        <Button
          variant="outlined"
          onClick={handleBack}
          sx={{
            borderColor: "#6311CB",
            color: "#6311CB",

            "&[disabled]": {
              borderColor: "#D3BAF9",
              color: "#D3BAF9",
            },
          }}
        >
          <KeyboardBackspaceOutlinedIcon />
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            display: "flex",
            gap: 1.5,
            alignItems: "center",
            backgroundColor: "#6311CB",
            textTransform: "none",
          }}
          onClick={() => {
            setCurrentStage((prev) => prev + 1);
            setShowTerms(true);
          }}
        >
          Continue <EastOutlinedIcon fontSize="small" />
        </Button>
      </Box>
    </Box>
  );
};

export default SelectPackage;
