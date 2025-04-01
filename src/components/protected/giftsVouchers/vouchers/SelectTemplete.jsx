import React, { useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";

import { templatesImg, templateCategories } from "../../../../utils/tempalets";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useNavigate, useParams } from "react-router-dom";

const SelectTemplete = ({
  setBrandVoucherData,
  brandVoucherData,
  setCurrentStage,
  mode,
}) => {
  const { user } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [selectedTemplate, setSelectedTemplate] = useState({
    templateId: brandVoucherData?.templateId || "",
    message: brandVoucherData?.message || "",
  });
  const [showPreview, setShowPreview] = useState(false);
  let filteredVouchers =
    category === "all"
      ? templatesImg
      : templatesImg.filter((item) => item.category === category);

  const handleBack = () => {
    if (showPreview) return setShowPreview(false);
    if (mode === "edit") {
      return navigate(`/${user}/gifts-&-rewards/my-vouchers/voucher-draft`);
    }

    setCurrentStage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!selectedTemplate.templateId) return;

    setBrandVoucherData((prev) => ({
      ...prev,
      templateId: selectedTemplate.templateId,
      message: selectedTemplate.message,
    }));

    setCurrentStage((prev) => prev + 1);
  };

  const handleSelectTemplate = (templateId) => {
    if (selectedTemplate.templateId === templateId) {
      setSelectedTemplate((prev) => ({
        ...prev,
        templateId: "",
        message: "",
      }));
    } else {
      setSelectedTemplate((prev) => ({
        ...prev,
        templateId: templateId,
      }));
    }
  };

  return (
    <Box
      display={"grid"}
      gridTemplateColumns={"1fr 400px"}
      gap={2}
      height={"calc(100vh - 130px)"}
      overflow={"hidden"}
    >
      <Box bgcolor={"#fff"} p={2} borderRadius={2} overflow={"auto"}>
        <Typography
          fontSize={"16px"}
          fontFamily={"Gilroy"}
          fontWeight={500}
          mb={2}
        >
          Select template
        </Typography>
        <Box>
          <Typography
            color="#4E4E4E"
            my={1}
            fontSize={"14px"}
            fontFamily={"Gilroy"}
            fontWeight={500}
          >
            Category
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            gap={1}
            flexWrap="wrap"
            textTransform="capitalize"
            color="#828282"
            mb={1}
          >
            <Typography
              borderRadius={2}
              px={2}
              fontSize={"14px"}
              fontWeight={500}
              color={category === "all" ? "#3725EA" : ""}
              bgcolor={category === "all" ? "#3725EA26" : ""}
              fontFamily={"TT Commons"}
              sx={{
                cursor: "pointer",
                "&:hover": { backgroundColor: "#3725EA26" },
              }}
              onClick={() => {
                setCategory("all");
              }}
            >
              all
            </Typography>
            {templateCategories.map((item) => (
              <Typography
                key={item.id}
                borderRadius={2}
                fontFamily={"TT Commons"}
                px={1}
                fontSize={"14px"}
                color={category === item.id ? "#3725EA" : ""}
                bgcolor={category === item.id ? "#3725EA26" : ""}
                sx={{
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#3725EA26" },
                }}
                fontWeight={500}
                onClick={() => {
                  setCategory(item.id);
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Box>
          <Divider />

          <Box mt={2} display={"flex"} flexWrap={"wrap"} gap={1}>
            {filteredVouchers.map((item) => (
              <Box
                key={item.id}
                disabled={showPreview}
                mb={1}
                p={1}
                borderRadius={2}
                width={"min-content"}
                sx={{
                  cursor: showPreview ? "not-allowed" : "pointer",
                  pointerEvents: showPreview ? "none" : "auto",
                  opacity: showPreview ? 0.5 : 1,
                  "&:hover": {
                    backgroundColor: showPreview ? "none" : "#3725EA26",
                  },
                }}
                onClick={() => handleSelectTemplate(item.id)}
              >
                <Box
                  p={1}
                  component={"img"}
                  src={item.image}
                  height={"156px"}
                  width={"auto"}
                  borderRadius={2}
                  sx={{
                    objectFit: "contain",
                    border: "4px solid transparent",

                    borderImageSource:
                      selectedTemplate.templateId === item.id
                        ? "linear-gradient(180deg, #6311CB 0%, #C33FAD 100%)"
                        : "none",
                    borderImageSlice: 1,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        bgcolor={"#fff"}
        p={2}
        borderRadius={2}
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <Typography fontSize={"18px"} fontFamily={"Gilroy"} fontWeight={500}>
          Preview
        </Typography>
        <Box p={2}>
          {selectedTemplate.templateId ? (
            <Box
              component={"img"}
              src={
                templatesImg.find(
                  (item) => item.id === selectedTemplate.templateId
                ).image
              }
              width={"100%"}
              sx={{
                objectFit: "contain",
              }}
            />
          ) : (
            <Box width={"100%"} bgcolor={"#f5f5f5"} height={"202px"} p={2} />
          )}
        </Box>

        <Box mt={2}>
          <Typography
            fontSize={"16px"}
            lineHeight={"30px"}
            whiteSpace={"pre-line"}
            fontFamily={"Gilroy"}
            fontWeight={500}
          >
            {" "}
            {` Hi Receiver,\n You've got a ${brandVoucherData.voucher.name} E-Gift card`}
          </Typography>
          <Typography
            fontWeight={"bold"}
            fontStyle={"italic"}
            fontSize={"16px"}
            lineHeight={"30px"}
            whiteSpace={"pre-line"}
            fontFamily={"Roboto"}
          >
            {selectedTemplate?.message
              ? `${selectedTemplate.message}`
              : "Your message will apper here..."}
          </Typography>
        </Box>
        {!showPreview && (
          <Box mt={2}>
            <Typography color="#666666" mb={1} fontSize={"14px"}>
              Type your message
            </Typography>
            <TextField
              fullWidth
              value={selectedTemplate.message}
              height={"100px"}
              name="message"
              type="text"
              minRows={4}
              maxRows={4}
              multiline
              onChange={(event) => {
                setSelectedTemplate((prev) => ({
                  ...prev,
                  message: event.target.value,
                }));
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontSize: "14px",
                },
              }}
            />

            <Box
              width={"100%"}
              bgcolor={"#6311CB0F"}
              mt={2}
              color={"#58606D"}
              p={2}
              borderRadius={2}
              gap={1}
              display={"grid"}
              gridTemplateColumns={"1fr 1fr 1fr"}
              fontFamily={"TT Commons"}
              fontSize={"14px"}
            >
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                Minimum
              </Typography>
              :
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                500
              </Typography>
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                Maximum
              </Typography>
              :
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                10000
              </Typography>
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                Discount
              </Typography>
              :
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                {brandVoucherData.voucher.discount}%
              </Typography>
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                Validity
              </Typography>
              :
              <Typography
                fontFamily={"TT Commons"}
                fontSize={"14px"}
                fontWeight={500}
              >
                6 months
              </Typography>
            </Box>
          </Box>
        )}
        <Button
          variant="contained"
          onClick={() => setShowPreview(true)}
          fullWidth
          disabled={
            !selectedTemplate.templateId ||
            !selectedTemplate.message ||
            showPreview
          }
          sx={{
            mt: 2,
            "&:hover": {
              background: "linear-gradient(to right, #6311CB, #8F40FB)",
              color: "white",
            },
            display: showPreview ? "none" : "flex",
            alignItems: "center",
            textTransform: "none",
            gap: 1.5,
            backgroundColor: "#6311CB",
          }}
        >
          Preview
        </Button>

        <Box
          mt={2}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Button
            onClick={handleBack}
            variant="outlined"
            sx={{
              height: "35px",
              borderColor: "#6311CB",
              color: "#6311CB",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <KeyboardBackspaceOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            fullWidth
            disabled={!selectedTemplate.templateId || !selectedTemplate.message}
            sx={{
              "&:hover": {
                background: "linear-gradient(to right, #6311CB, #8F40FB)",
                color: "white",
              },
              display: "flex",
              alignItems: "center",
              textTransform: "none",
              gap: 1.5,
              backgroundColor: "#6311CB",
            }}
          >
            Proceed to next step
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectTemplete;
