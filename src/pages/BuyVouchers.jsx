import { Box } from "@mui/material";
import React, { useState } from "react";
import ApplyVouchers from "../components/protected/giftsVouchers/vouchers/ApplyVouchers";
import SelectTemplete from "../components/protected/giftsVouchers/vouchers/SelectTemplete";
import SelectEmployee from "../components/protected/giftsVouchers/vouchers/SelectEmployee";
import PaymentModal from "../components/protected/giftsVouchers/vouchers/PaymentModal";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

const BuyVouchersPage = () => {
  const { draftVouchers } = useSelector((state) => state.voucher.vouchers);
  const path = useLocation().pathname;
  const { voucherId } = useParams();

  const mode = path.split("/").includes("pay")
    ? "pay"
    : path.split("/").includes(voucherId) && !path.split("/").includes("pay")
    ? "edit"
    : "";
  const [brandVoucherData, setBrandVoucherData] = useState(
    voucherId
      ? draftVouchers.find(
          (voucher) => voucher?.id?.toString() === voucherId.toString()
        )
      : {}
  );
  const [currentStage, setCurrentStage] = useState(
    mode === "pay" ? 3 : mode === "edit" ? 1 : 0
  );

  return (
    <Box mt={2}>
      {currentStage === 0 ? (
        <ApplyVouchers
          setBrandVoucherData={setBrandVoucherData}
          brandVoucherData={brandVoucherData}
          setCurrentStage={setCurrentStage}
        />
      ) : currentStage === 1 ? (
        <SelectTemplete
          mode={mode}
          setBrandVoucherData={setBrandVoucherData}
          brandVoucherData={brandVoucherData}
          setCurrentStage={setCurrentStage}
        />
      ) : currentStage === 2 ? (
        <SelectEmployee
          setBrandVoucherData={setBrandVoucherData}
          brandVoucherData={brandVoucherData}
          setCurrentStage={setCurrentStage}
        />
      ) : (
        <PaymentModal
          mode={mode}
          setBrandVoucherData={setBrandVoucherData}
          brandVoucherData={brandVoucherData}
          setCurrentStage={setCurrentStage}
        />
      )}
    </Box>
  );
};

export default BuyVouchersPage;
