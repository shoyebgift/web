import React from "react";
import { Box, Typography } from "@mui/material";

import physical from "../../assets/img/wallet/cardFront.png";
import cash from "../../assets/img/wallet/cash.png";
import cash1 from "../../assets/svg/cash.svg";
import instaGiftCard from "../../assets/svg/instaGiftCard.svg";

const DummyCards = ({ type }) => {
  return (
    <Box
      className="no-select"
      sx={{
        width: { xs: "120px", md: "200px", lg: "230px" }, // Responsive width
        height: { xs: "200px", md: "300px", lg: "354px" }, // Responsive height
        background: "linear-gradient(180deg, #6311CB 0%, #1F1584 100%)",
        borderRadius: "6px",
        position: "relative",
        overflow: "hidden",
        padding: "1rem",
        color: "white",
      }}
    >
      <Typography
        borderRadius={1}
        border={1}
        p={"2px 15px"}
        width={"fit-content"}
        sx={{
          fontSize: { xs: "7px", md: "10px", lg: "14px" },
        }}
      >
        Select
      </Typography>
      <Typography
        sx={{
          mt: { xs: ".5rem", md: "1rem" },
          fontSize: { xs: "10px", md: "16px" },
        }}
      >
        Save More
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "10px", sm: "12px", md: "20px" },
          textTransform: "capitalize",
        }}
      >
        {type} Gift Card
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "7px", md: "12px" },
          mt: { xs: 1.5, md: 2 },
        }}
      >
        Gift more with OptiFii {type} Gift cards inside the boxes.
      </Typography>

      {type === "physical" ? (
        <Box
          component={"img"}
          src={physical}
          alt="card"
          width="80%"
          sx={{
            rotate: "45deg",
            position: "absolute",
            bottom: { xs: "-70px", sm: "-80px", md: "-100px" }, // Responsive position
            left: { xs: "-30px", sm: "-40px", md: "-50px" }, // Responsive position
            filter: "blur(3px)",
          }}
        />
      ) : type === "digital" ? (
        <>
          <Box
            component={"img"}
            src={cash}
            alt="card"
            width="70%"
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
            width="60%"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          />
        </>
      ) : (
        <Box
          component={"img"}
          src={instaGiftCard}
          alt="card"
          width="80%"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        />
      )}
    </Box>
  );
};

export default DummyCards;
