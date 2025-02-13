import { useState } from "react";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

// Define custom colors
const primaryColor = "#6311CB";
const lighterColor = "#B385F2"; // 50% lighter

// Custom Connector Styling
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    borderColor: primaryColor,
  },
  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    borderColor: primaryColor,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: lighterColor,
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

// Custom Step Icon Styling
const QontoStepIconRoot = styled("div")(({ ownerState }) => ({
  color: ownerState.active ? primaryColor : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  "& .QontoStepIcon-completedIcon": {
    color: primaryColor,
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

// Steps
const steps = ["Select Card type", "Where to share?", "Select employee"];

export default function CustomizedSteppers() {
  const { pathname } = useLocation();

  const activeStep = pathname.split("/").includes("add-employee")
    ? 2
    : pathname.split("/").includes("where-to-share")
    ? 1
    : 0;

  return (
    <Stack
      sx={{ width: "100%" }}
      bgcolor={"#FFFFFF"}
      spacing={4}
      p={2}
      borderRadius={2}
      maxHeight={"130px"}
      overflow={"hidden"}
      position={"relative"}
      height={"130px"}
    >
      <Box
        // width={"90vw"}
        width={"120%"}
        height={"130px"}
        position={"absolute"}
        top={'60%'}
        left={"50%"}
        sx={{
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        {" "}
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          sx={{ width: "100%" }}
          connector={<QontoConnector />}
        >
          {steps.map((label, index) => (
            <Step key={index} completed={index < activeStep}>
              <StepLabel slots={{ stepIcon: QontoStepIcon }}>
                <Typography
                  color="#9C9C9C"
                  fontSize={"13px"}
                  fontFamily={"TT Commons"}
                  fontWeight={300}
                >
                  STEP {index + 1}
                </Typography>
                <Typography
                  fontFamily={"Gilroy"}
                  fontWeight={500}
                  color="black"
                  fontSize={"14px"}
                >
                  {label}
                </Typography>
                <Typography
                  fontFamily={"TT Commons"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={
                    index < activeStep
                      ? "#78c786"
                      : activeStep === index
                      ? "#3725EA"
                      : "#666666"
                  }
                >
                  {index < activeStep
                    ? "Done"
                    : index === activeStep
                    ? "In Progress"
                    : "Pending"}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Stack>
  );
}
