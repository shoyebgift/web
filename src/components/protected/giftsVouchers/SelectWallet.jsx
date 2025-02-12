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

  const [hoveredWallet, setHoveredWallet] = useState(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleProceed = () => {
    if (walletType === "card" && cardWallets.length === 0) {
      navigate(`${walletType}/where-to-share`);
    } else navigate(`${walletType}`);
  };

  const handleMouseMove = (e, type) => {
    if (hoveredWallet !== type) return;

    const box = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - box.left) / box.width - 0.5) * 20;
    const y = ((e.clientY - box.top) / box.height - 0.5) * -20;

    setRotation({ x, y });

    // Cursor position for glow effect
    setCursorPosition({
      x: e.clientX - box.left,
      y: e.clientY - box.top,
    });
  };

  const handleMouseEnter = (type) => {
    setHoveredWallet(type);
  };

  const handleMouseLeave = () => {
    setHoveredWallet(null);
    setRotation({ x: 0, y: 0 });
    setCursorPosition({ x: 0, y: 0 });
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
            height={"390px"}
            width={"300px"}
            mt={6}
            sx={{
              background: "linear-gradient(180deg, #6311CB 0%, #1F1584 100%)",
              transition: "transform 0.1s ease-out, box-shadow 0.2s ease-out",
              transform:
                hoveredWallet === type
                  ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                  : "none",
              boxShadow:
                hoveredWallet === type
                  ? "0px 10px 30px rgba(0, 0, 0, 0.3)"
                  : "none",
              position: "relative",
              overflow: "hidden",
              p: "17px",
            }}
            onMouseEnter={() => handleMouseEnter(type)}
            onMouseMove={(e) => handleMouseMove(e, type)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Cursor Glow Effect */}
            {hoveredWallet === type && (
              <Box
                sx={{
                  position: "absolute",
                  top: cursorPosition.y - 125,
                  left: cursorPosition.x - 125,
                  width: "250px",
                  height: "250px",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
                  pointerEvents: "none",
                  borderRadius: "50%",
                  filter: "blur(30px)",
                  zIndex: 1,
                }}
              />
            )}

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
              {type === walletType ? "Selected" : "Select"}
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
        ))}
      </Box>

      <Box textAlign={"center"} mt={10} mb={25}>
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
