import { Box } from "@mui/material";
import React, { useState } from "react";
import ApplyVouchers from "../components/protected/giftsVouchers/ApplyVouchers";
import SelectTemplete from "../components/protected/giftsVouchers/SelectTemplete";
import SelectEmployee from "../components/protected/giftsVouchers/SelectEmployee";
import PaymentModal from "../components/protected/giftsVouchers/PaymentModal";

const BuyVouchersPage = () => {
  const [brandVoucherData, setBrandVoucherData] = useState({});
  const [currentStage, setCurrentStage] = useState(0);

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
          setBrandVoucherData={setBrandVoucherData}
          brandVoucherData={brandVoucherData}
          setCurrentStage={setCurrentStage}
        />
      )}
    </Box>
  );
};

export default BuyVouchersPage;
