import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { Box, Typography, Stack, Paper } from "@mui/material";
import { styled } from "@mui/system";
import logo_card from "../../../assets/card/logo_card.svg";
import TRANSCORP_LOGO from "../../../assets/card/TRANSCORP_LOGO.svg";
import bg from "../../../assets/card/platinium_bg.png";
import RuPay from "../../../assets/card/rupayImg.png";
import splashPattern from "../../../assets/card/splash_pattern.svg";
import gift from "../../../assets/card/gift.svg";

const TiltCard = styled(Paper)(({ theme }) => ({
  backgroundImage: `url(${bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: 180,
  height: 280,
  borderRadius: theme.shape.borderRadius * 2,
  padding: theme.spacing(2),
  position: "relative",
  boxShadow: theme.shadows?.[3] || "0px 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
}));

const PlatiniumGift = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
    return () => {
      if (node?.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <TiltCard ref={tiltRef}>
      {/* Top Section */}
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Box component="img" src={logo_card} sx={{ width: 64 }} />
        <Box
          component="img"
          src={TRANSCORP_LOGO}
          sx={{ objectFit: "contain", width: 64 }}
        />
      </Stack>

      {/* Card Details */}
      <Stack spacing={1} sx={{ zIndex: 9, transform: "translateY(-30px)" }}>
        <Typography color="#fff" fontWeight={500} fontSize="0.875rem">
          8174 35XX XXXX 1234
        </Typography>
        <Typography color="#E2E2E2" fontSize="0.5rem">
          VALID THRU <br /> 01/12
        </Typography>
        <Typography color="#E2E2E2" fontSize="0.5rem">
          CVV <br /> 123
        </Typography>
        <Typography color="#fff" fontWeight={500} fontSize="0.75rem" mt={1}>
          CARDHOLDER NAME
        </Typography>
      </Stack>

      {/* Background Pattern */}
      <Box
        component="img"
        src={splashPattern}
        sx={{
          position: "absolute",
          bottom: -10,
          left: 0,
          height: "200px",
        }}
      />

      {/* Bottom Logos */}
      <Box>
        <Box
          component="img"
          src={gift}
          sx={{
            width: 50,
            position: "absolute",
            bottom: "10px",
            left: 0,
          }}
        />
        <Box
          component="img"
          src={RuPay}
          sx={{
            width: 56,
            position: "absolute",
            bottom: "10px",
            right: 12,
          }}
        />
      </Box>
    </TiltCard>
  );
};

export default PlatiniumGift;
