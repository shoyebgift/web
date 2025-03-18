import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import cash from "../../../../assets/img/wallet/cash.png";
import card from "../../../../assets/img/wallet/card.png";
import cash1 from "../../../../assets/svg/cash.svg";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VanillaTilt from "vanilla-tilt";

const SelectWallet = () => {
  const navigate = useNavigate();
  const [walletType, setWalletType] = useState("");
  const { cardWallets } = useSelector((state) => state.wallet);

  const cashRef = useRef(null);
  const cardRef = useRef(null);

  const handleProceed = () => {
    if (walletType === "card" && cardWallets.length === 0) {
      navigate(`${walletType}/where-to-share`);
    } else navigate(`${walletType}`);
  };

  useEffect(() => {
    const refs = [cashRef.current, cardRef.current];

    refs.forEach((node) => {
      if (node) {
        VanillaTilt.init(node, {
          max: 5,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
        });
      }
    });

    return () => {
      refs.forEach((node) => {
        if (node?.vanillaTilt) {
          node.vanillaTilt.destroy();
        }
      });
    };
  }, []);

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
        {["cash", "card"].map((type) => {
          const isSelected = walletType === type;
          const ref = type === "cash" ? cashRef : cardRef;
          return (
            <Box
              ref={ref}
              key={type}
              borderRadius={"6px"}
              height={"390px"}
              width={"300px"}
              mt={6}
              sx={{
                background: "linear-gradient(180deg, #6311CB 0%, #1F1584 100%)",
                transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out",

                position: "relative",
                overflow: "hidden",
                p: "17px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => setWalletType(type)}
                disableElevation
                sx={{
                  border: "1px solid #FFFFFF",
                  transition: "all 0.3s ease-in-out",
                  bgcolor: isSelected ? "#FFFFFF" : "transparent",
                  fontFamily: "Gilroy",
                  textTransform: "none",
                  height: "32px",
                  color: isSelected ? "#6311CB" : "white",
                  gap: 1,
                  position: "relative",
                  overflow: "hidden",
                  width: isSelected ? "120px" : "80px", // Width change with transition
                }}
              >
                {/* "Selected" State */}
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    transition:
                      "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                    opacity: isSelected ? 1 : 0,
                    transform: isSelected
                      ? "translateY(0)"
                      : "translateY(10px)",
                  }}
                >
                  <CheckOutlinedIcon sx={{ fontSize: "15px", mr: 0.5 }} />
                  Selected
                </Box>

                {/* "Select" State */}
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    height: "100%",
                    transition:
                      "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                    opacity: isSelected ? 0 : 1,
                    transform: isSelected
                      ? "translateY(-10px)"
                      : "translateY(0)",
                  }}
                >
                  Select
                </Box>
              </Button>

              <Typography
                mt={4}
                mx={"auto"}
                width={"fit-content"}
                fontFamily={"Geologica"}
                fontWeight={"bold"}
                textTransform={"capitalize"}
                fontSize={"28px"}
                className="no-select"
              >
                {type} wallet
              </Typography>
              <Typography
                fontFamily={"Geologica"}
                fontSize={"11px"}
                width={"90%"}
                mt={3}
                whiteSpace={"pre-line"}
                className="no-select"
              >
                {type === "cash"
                  ? "Share amount to the user's Cash wallet.\nUser can withdraw the cash easily anytime."
                  : "Now personalize your Company wallet with a name of your choice.\nCreate custom policies for the wallet"}
              </Typography>

              {type === "cash" ? (
                <>
                  <Box
                    component={"img"}
                    src={cash}
                    alt="cash"
                    width={"200px"}
                    sx={{ position: "absolute", bottom: 0, right: 0 }}
                  />
                  <Box
                    component={"img"}
                    src={cash1}
                    alt="cash"
                    width="50%"
                    sx={{ position: "absolute", bottom: 0, left: "-12%" }}
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
          );
        })}
      </Box>

      <Box textAlign={"center"} mt={10} mb={5}>
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
            "&:disabled": {
              backgroundColor: "#6311CB",
              color: "white",
              opacity: 0.5,
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
