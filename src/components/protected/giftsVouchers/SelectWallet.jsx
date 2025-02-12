import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import cash from "../../../assets/img/wallet/cash.png";
import card from "../../../assets/img/wallet/card.png";
import cash1 from "../../../assets/svg/cash.svg";

import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SelectWallet = () => {
  const navigate = useNavigate();
  const [walletType, setWalletType] = useState("");
  const { cardWallets } = useSelector((state) => state.wallet);

  const handleProceed = () => {
    if (walletType === "card" && cardWallets.length === 0) {
      navigate(`${walletType}/where-to-share`);
    } else navigate(`${walletType}`);
  };

  return (
    <Box p={2} mt={2} borderRadius={2} bgcolor={"#FFFFFF"} height={"100%"}>
      <Typography
        fontSize={"16px"}
        fontFamily={"Gilroy"}
        fontWeight={500}
        color={"#000000"}
      >
        Select card type
      </Typography>

      <Box
        mt={2}
        display={"flex"}
        gap={2}
        justifyContent={"space-around"}
        maxWidth={"800px"}
        mx={"auto"}
        alignItems={"center"}
        color={"#FFFFFF"}
      >
        {["cash", "card"].map((type) => (
          <Box
            key={type}
            borderRadius={"6px"}
            height={"373px"}
            width={"254px"}
            mt={6}
            sx={{
              background: "linear-gradient(180deg, #6311CB 0%, #1F1584 100%)",
            }}
            position={"relative"}
            overflow={"hidden"}
            p={"17px"}
          >
            <Button
              variant="outlined"
              onClick={() => setWalletType(type)}
              disableElevation
              startIcon={type === walletType ? <CheckOutlinedIcon /> : null}
              sx={{
                border: "1px solid #FFFFFF",
                transition: "background-color .3s ease-in-out",
                bgcolor: walletType === type ? "#FFFFFF" : "",
                fontFamily: "Gilroy",
                textTransform: "none",
                height: "32px",
                color: walletType === type ? "#6311CB" : "white",
              }}
            >
              {" "}
              {type === walletType ? "Selected" : "Select"}
            </Button>

            <Typography
              mt={4}
              mx={"auto"}
              width={"fit-content"}
              fontFamily={"Geologica"}
              fontWeight={"bold"}
              textTransform={"capitalize"}
              fontSize={"20px"}
            >
              {type} wallet
            </Typography>
            <Typography
              fontFamily={"TT Commons"}
              fontSize={"12px"}
              width={"80%"}
              mt={3}
            >
              Choose a plan and get onboard in minutes. Then get $100 credits
              for your next payment.
            </Typography>

            {type === "cash" ? (
              <>
                <Box
                  component={"img"}
                  src={cash}
                  alt="card"
                  width={"200px"}
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                  }}
                />
                <Box
                  component={"img"}
                  src={cash1}
                  alt="card"
                  width="50%"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: "-12%",
                  }}
                />
              </>
            ) : (
              <Box
                component={"img"}
                src={card}
                alt="card"
                width="115px"
                height={"180px"}
                sx={{
                  objectFit: "contain",
                  borderRadius: "8px",
                  position: "absolute",
                  transform: "rotate(21deg)",
                  boxShadow: "6px -6px 0 #FFFFFF36",
                }}
                bottom={"-10%"}
                left={"-0%"}
              />
            )}
          </Box>
        ))}
      </Box>

      <Box textAlign={"center"} mt={18}>
        <Button
          disabled={walletType === ""}
          onClick={handleProceed}
          variant="contained"
          sx={{
            width: "250px",
            "&:hover": {
              background: "linear-gradient(to right, #6311CB, #8F40FB)",
              color: "white",
            },
            textTransform: "none",
            backgroundColor: "#6311CB",
          }}
        >
          Select and Proceed
        </Button>
      </Box>
    </Box>
  );
};

export default SelectWallet;
