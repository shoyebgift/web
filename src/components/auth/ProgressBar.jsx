import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import person from "../../assets/svg/signup/person.svg";
import industryStatus from "../../assets/svg/signup/industryStatus.svg";
import packageimg from "../../assets/svg/signup/package.svg";

const ProgressBar = ({ currentStage }) => {
  const stages = [
    "Your Details",
    "About Company",
    "Company details",
    "Director details",
    "Select package",
  ];

  const stageIcon = {
    "Your Details": person,
    "About Company": industryStatus,
    "Company details": industryStatus,
    "Director details": person,
    "Select package": packageimg,
  };

  const [stageHeight, setStageHeight] = useState(0);
  const stageRef = useRef(null);

  useEffect(() => {
    if (stageRef.current) {
      const height = stageRef.current.getBoundingClientRect().height;
      setStageHeight(height);
    }
    const handleResize = () => {
      if (stageRef.current) {
        setStageHeight(stageRef.current.getBoundingClientRect().height);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxHeight = `calc(100% - ${stageHeight}px)`;
  const adjustedHeight = `calc(25*${currentStage}% - ${
    (stageHeight * currentStage) / 4
  }px)`;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="start"
      position="relative"
      justifyContent="space-between"
      height="max-content"
    >
      {/* Line between symbols */}
      <Box
        position="absolute"
        top="0"
        left="13px"
        width="2.35px"
        height={maxHeight}
        bgcolor="#6311CB80"
        zIndex={0}
      />

      {/* Progress line */}
      <Box
        position="absolute"
        top="0"
        left="13px"
        width="2.35px"
        height={adjustedHeight}
        sx={{
          transition: "height 0.3s ease",
        }}
        maxHeight={maxHeight}
        bgcolor="#6311CB"
        zIndex={1}
      />

      {stages.map((stage, index) => (
        <Box
          key={index}
          ref={index === 0 ? stageRef : null}
          display="flex"
          flexDirection="row"
          alignItems="flex-start"
          fontSize="14px"
          mb={index !== stages.length - 1 ? "20px" : 0}
        >
          {/* Symbol */}
          <Box
            width="27px"
            height="27px"
            borderRadius="50%"
            bgcolor="white"
            zIndex={30}
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow="0 0 2px rgba(0, 0, 0, 0.2)"
          >
            <Typography
              bgcolor={index < currentStage ? "#6311CB" : "#6311CB80"}
              color="white"
              fontWeight="bold"
              width="27px"
              height="27px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"

              sx={{
                transition: "background-color 0.3s ease",
              }}
            >
              {index < currentStage ? (
                <CheckIcon sx={{ color: "white", fontSize: "12px" }} />
              ) : (
                <img
                  style={{ color: "white" }}
                  src={stageIcon[stage]}
                  alt={stage}
                />
              )}
            </Typography>
          </Box>

          {/* Stage name */}
          <Box component="div" ml={2}>
            <Typography fontSize="14px" fontWeight="bold">
              {stage}
            </Typography>
            <Typography maxWidth="70%" color="#9C9C9C" fontSize="12px">
              Lorem ipsum dolor sit amet dolor
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProgressBar;
