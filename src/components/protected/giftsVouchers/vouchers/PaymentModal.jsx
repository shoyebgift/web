import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useDispatch } from "react-redux";
import { addMyVoucher, draftVouchers } from "../../../../features/voucherSlice";
import DateTimePicker from "./DateAndTimePicker";
import { useNavigate, useParams } from "react-router-dom";

const PaymentModal = ({ brandVoucherData, setCurrentStage, mode }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useParams();
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const availableBalance = 70000;
  const orderValue = {
    totalAmount: brandVoucherData.totalAmount,
    "discount%": brandVoucherData.voucher.discount,
    "total discount": (
      brandVoucherData.totalAmount *
      (brandVoucherData.voucher.discount / 100)
    ).toFixed(2),
    "final order value": (
      brandVoucherData.totalAmount -
      brandVoucherData.totalAmount * (brandVoucherData.voucher.discount / 100)
    ).toFixed(2),
  };

  const orderSummary = [
    {
      name: "Total Order Value",
      value: orderValue.totalAmount,
    },
    {
      name: "Discount % applied",
      value: orderValue["discount%"],
    },
    {
      name: "Total discount amount",
      value: orderValue["total discount"],
    },
    {
      name: "Final Order Value",
      value: orderValue["final order value"],
    },
  ];

  const handleBack = () => {
    if (mode === "pay") {
      return navigate(`/${user}/gifts-&-rewards/my-vouchers/voucher-draft`);
    }
    setCurrentStage((prev) => prev - 1);
  };

  const handleProceed = () => {
    dispatch(addMyVoucher({ ...brandVoucherData, orderstatus: "completed" }));
    navigate(`/${user}/gifts-&-rewards/my-vouchers`);
  };

  const handleSchedule = (scheduleDate) => {
    dispatch(
      addMyVoucher({
        ...brandVoucherData,
        orderstatus: "scheduled",
        dateTime: scheduleDate,
      })
    );
    navigate(`/${user}/gifts-&-rewards/my-vouchers`);
  };

  const handleDraftVoucher = () => {
    dispatch(draftVouchers(brandVoucherData));
    navigate(`/${user}/gifts-&-rewards/my-vouchers/voucher-draft`);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      maxHeight={"700px"}
      height={"calc(100vh - 130px)"}
      position={"relative"}
    >
      <Box width={"370px"} borderRadius={2} bgcolor={"#fff"} p={2}>
        <Typography
          fontSize={"18px"}
          fontFamily={"TT Commons"}
          fontWeight={500}
        >
          Payment
        </Typography>
        <Box
          fontSize={"18px"}
          fontFamily={"TT Commons"}
          fontWeight={500}
          lineHeight={"30px"}
          display={"flex"}
          gap={1}
          mt={2}
          bgcolor={" #F8FAFC"}
          p={1}
          borderRadius={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          Order Summary:{" "}
          <Typography
            fontSize={"18px"}
            fontFamily={"TT Commons"}
            fontWeight={500}
          >
            &#8377; {brandVoucherData.totalAmount}
          </Typography>
        </Box>

        <Box
          bgcolor=" #3725EA08"
          display={"flex"}
          flexDirection={"column"}
          borderRadius={2}
          gap={2}
          p={2}
          mt={2}
          color={"#677489"}
          fontSize={"14px"}
          fontWeight={500}
        >
          {orderSummary.map((item) => (
            <Box
              key={item.name}
              display={"flex"}
              gap={1}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontFamily={"TT Commons"} fontSize={"16px"}>
                {item.name}
              </Typography>
              <Typography
                color="black"
                fontFamily={"TT Commons"}
                fontSize={"16px"}
              >
                {item.name === "Discount % applied"
                  ? `${item.value}%`
                  : `₹ ${item.value}`}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography
            fontFamily={"TT Commons"}
            fontSize={"16px"}
            my={1}
            fontWeight={500}
          >
            Master card balance{" "}
          </Typography>
          <Box
            display={"flex"}
            gap={1}
            alignItems={"center"}
            p={1}
            justifyContent={"space-between"}
            backgroundColor={" #3725EA1A"}
            borderRadius={2}
          >
            <Typography
              fontSize={"18px"}
              fontWeight={500}
              fontFamily={"TT Commons"}
            >
              &#8377; {availableBalance}
            </Typography>
            <Button
              varient="contained"
              sx={{
                backgroundColor: "#6311CB",
                color: "#FFFFFF",
                textTransform: "none",
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  backgroundColor: "#7D22E8",
                },
              }}
            >
              <AddOutlinedIcon sx={{ fontSize: "14px" }} />
              Load Money
            </Button>
          </Box>
          <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={2} mt={2}>
            <Button
              onClick={handleDraftVoucher}
              varient="contained"
              sx={{
                color: "#6311CB",
                backgroundColor: "#F0F0F0",
                textTransform: "none",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": {
                  background: "linear-gradient(to right, #6311CB, #8F40FB)",
                  color: "#FFFFFF",
                },
              }}
            >
              Save as draft
            </Button>
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  background: "linear-gradient(to right, #6311CB, #8F40FB)",
                },
                color: "white",
                textTransform: "none",
                backgroundColor: "#6311CB",
              }}
              disabled={availableBalance < orderValue["final order value"]}
              onClick={handleProceed}
            >
              Save & proceed
            </Button>

            <Button
              onClick={handleBack}
              variant="outlined"
              sx={{
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
              disabled={availableBalance < orderValue["final order value"]}
              onClick={() => setShowDateTimePicker(true)}
              sx={{
                "&:hover": {
                  background: "linear-gradient(to right, #6311CB, #8F40FB)",
                },
                color: "white",
                textTransform: "none",
                backgroundColor: "#6311CB",
              }}
            >
              Schedule for later
            </Button>
          </Box>
        </Box>
      </Box>
      {showDateTimePicker && (
        <Box
          position={"fixed"}
          top={0}
          left={0}
          p={2}
          width={"100%"}
          height={"calc(100vh)"}
          bgcolor="rgba(0, 0, 0, 0.5)"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"start"}
        >
          <Box bgcolor={"#fff"} borderRadius={2} p={2} mt={8}>
            <DateTimePicker
              onProceed={handleSchedule}
              setShowDateTimePicker={setShowDateTimePicker}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PaymentModal;
