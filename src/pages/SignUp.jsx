import { useState } from "react";
import { Box, Divider } from "@mui/material";
import backround from "../assets/img/3.png";
import ProgressBar from "../components/auth/ProgressBar";
import trackStatus from "../assets/svg/signup/trackStatus.svg";
import UserDetails from "../components/auth/UserDetails";
import AboutCompany from "../components/auth/AboutCompany";
import CompanyDetails from "../components/auth/CompanyDetails";
import DirectorDetails from "./../components/auth/DirectorDetails";
import SelectPackage from "./../components/auth/SelectPackage";
import React from "react";
import TermsCondition from "./../components/auth/TermsCondition";
import SuccessExcerpt from "../components/unprotected/SuccessExcerpt";

const SignUpPage = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setFormData] = useState({});
  const [showTerms, setShowTerms] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAgree = () => {
    setShowSuccess(true);
    setShowTerms(false);
  };

  const handleCheckStatus = () => {
    window.location.href = "/";
    setFormData({});
    setShowSuccess(false);
    setShowTerms(false);
    setCurrentStage(0);
  };
  return (
    <Box
      width={"100%"}
      height={"100%"}
      p={1}
      zIndex={10}
      position={"relative"}
      sx={{
        backgroundImage: `url(${backround})`,
        backgroundSize: "cover",
      }}
      display={"grid"}
      gridTemplateColumns={"350px 1fr"}
      gap={1}
      minHeight={"min-content"}
    >
      <Box
        bgcolor={"#fff"}
        borderRadius={"2px"}
        p={2}
        height={"100%"}
        minHeight={"min-content"}
      >
        <Box
          bgcolor={"#3725EA12"}
          borderRadius={"2px"}
          p={1}
          fontWeight={500}
          fontSize={"20px"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
        >
          <Box component="img" src={trackStatus} alt="trackStatus" />
          Track your Status
        </Box>

        <Divider
          sx={{
            mx: "auto",
            my: 2,
          }}
        />

        <ProgressBar currentStage={currentStage} />
      </Box>

      <Box bgcolor={"#fff"} p={1}>
        <Box display={"flex"} justifyContent={"end"} mb={2} gap={"2px"}>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Box
                sx={{ transition: "background-color 0.3s ease" }}
                key={index}
                width={"20px"}
                height={"4px"}
                bgcolor={index <= currentStage ? "#3725EA " : "#3725EA1C"}
                borderRadius={"2px"}
              />
            ))}
        </Box>
        <Box width={"100%"} maxHeight={"500px"} overflow={"auto"}>
          {currentStage === 0 ? (
            <UserDetails
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
              formData={formData}
              setFormData={setFormData}
            />
          ) : currentStage === 1 ? (
            <AboutCompany
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
              formData={formData}
              setFormData={setFormData}
            />
          ) : currentStage === 2 ? (
            <CompanyDetails
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
              formData={formData}
              setFormData={setFormData}
            />
          ) : currentStage === 3 ? (
            <DirectorDetails
              currentStage={currentStage}
              setCurrentStage={setCurrentStage}
              formData={formData}
              setFormData={setFormData}
            />
          ) : (
            <SelectPackage
              setCurrentStage={setCurrentStage}
              type={formData.type}
              setShowTerms={setShowTerms}
            />
          )}
        </Box>
      </Box>
      {showTerms && (
        <TermsCondition handleAgree={handleAgree} setShowTerms={setShowTerms} />
      )}

      {showSuccess && <SuccessExcerpt handleCheckStatus={handleCheckStatus} />}
    </Box>
  );
};

export default SignUpPage;
