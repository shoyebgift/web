import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FileUploader from "../../../FileUploader";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SuccessIcon from "../../../SuccessIcon";
import { updatewallet } from "../../../../features/walletSlice";
import EmployeeAvatarGroup from "../../../EmployeeAvatarGroup";

const AddWalletEmployee = () => {
  const dispatch = useDispatch();
  const { walletId, user } = useParams();
  const navigate = useNavigate();
  const { cardWallets, cashWallets } = useSelector((state) => state.wallet);

  const [fileError, setFileError] = useState(false);
  const [excelData, setExcelData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showApplicationPreview, setShowApplicationPreview] = useState(false);

  const handleSubmit = () => {
    dispatch(
      updatewallet({
        walletId: walletId ? walletId : null,
        employees: excelData,
        cardType: walletId ? "card" : "cash",
        totalAmount,
      })
    );
    setShowCompleted(false);
    setShowApplicationPreview(true);
  };
  const handleSubmitNewApplication = () => {
    navigate(
      `/${user}/gifts-&-rewards/dashboard/${walletId ? "card" : "cash"}`
    );
  };

  const expectedHeaders = [
    "emp_ID",
    "name",
    "email_address",
    "card_number",
    "card_balance",
  ];

  const handleRemoveFile = () => {
    setExcelData([]);
    setFileError(false);
    setTotalAmount(0);
  };

  useEffect(() => {
    if (!walletId) {
      const wallet = cashWallets;
      setOrderId(wallet[0]?.order_ID || null);
    } else {
      const wallet = cardWallets.find(
        (wallet) => wallet.id.toString() === walletId.toString()
      );
      if (wallet) {
        setOrderId(wallet?.orders[0]?.order_ID || null);
      }
    }
  }, [cardWallets, cashWallets]);

  return (
    <Box mt={2} p={2} bgcolor={"#FFFFFF"} borderRadius={2}>
      <Typography
        mt={2}
        fontFamily={"Gilroy"}
        fontSize={"16px"}
        fontWeight={500}
        color={"#000000"}
      >
        Import employee
      </Typography>

      <Box mt={8}>
        <FileUploader
          xlFile="/GPR.xlsx"
          setExcelData={setExcelData}
          setTotalAmount={setTotalAmount}
          expectedHeaders={expectedHeaders}
          setFileError={setFileError}
          fileError={fileError}
          handleRemoveFile={handleRemoveFile}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
        maxWidth={"400px"}
        mx={"auto"}
        mt={10}
      >
        <Button
          variant="outlined"
          onClick={() => handleSubmitNewApplication()}
          sx={{
            borderColor: "#6311CB",
            color: "#6311CB",
            textTransform: "none",
            px: 4,
            "&:hover": {
              background: "none",
            },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!excelData.length || excelData.length === 0 || fileError}
          sx={{
            color: "white",
            px: 4,
            textTransform: "none",
            backgroundColor: "#6311CB",
            "&:disabled": {
              backgroundColor: "#6311CB",
              color: "white",
              opacity: 0.5,
            },
          }}
          onClick={handleSubmit}
        >
          Save & Proceed
        </Button>
      </Box>

      {/* preview popup  */}
      <Dialog
        open={showApplicationPreview}
        onClose={() => {
          setShowApplicationPreview(false);
          setShowCompleted(true);
        }}
        slotProps={{
          paper: {
            sx: {
              height: "465px",
              width: "624px",
              borderRadius: "6.5px",
              p: 2,
            },
          },
        }}
      >
        <DialogTitle
          fontSize={"26px"}
          fontFamily={"Gilroy"}
          fontWeight={500}
          color="#101828"
        >
          Application Preview
          <Typography
            fontFamily={"TT Commons"}
            fontSize={"20px"}
            color="#A0A0A0"
          >
            Order ID:{" "}
            <Typography
              component={"span"}
              fontFamily={"TT Commons"}
              fontSize={"20px"}
              color="#3725EA"
            >
              #{orderId}
            </Typography>
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography
            fontFamily={"TT Commons"}
            fontSize={"24px"}
            color="#667085"
          >
            Total Users:{" "}
            <Typography
              component={"span"}
              fontFamily={"TT Commons"}
              fontSize={"24px"}
              color="#101828"
            >
              {excelData.length}
            </Typography>
          </Typography>

          <Box mt={2} textAlign={"start"} width={"fit-content"}>
            <EmployeeAvatarGroup
              employees={excelData}
              width={"45px"}
              height={"45px"}
              hideTooltip={true}
              fontSize="22px"
            />
          </Box>
          <Typography
            mt={4}
            fontFamily={"TT Commons"}
            fontSize={"23px"}
            color="#667085"
          >
            Total Amount:{" "}
          </Typography>
          <Typography
            fontFamily={"TT Commons"}
            fontSize={"20px"}
            color="#101828"
          >
            ₹ {totalAmount}
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            width: "95%",
            mx: "auto",
            mb: 2,
            height: "58px",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              bgcolor: "#6311CB",
              color: "white",
              fontFamily: "TT Commons",
              fontSize: "23px",
              px: 2,
            }}
            onClick={() => {
              setShowApplicationPreview(false);
              setShowCompleted(true);
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* completed popup  */}
      <Dialog
        open={showCompleted}
        onClose={() => handleSubmitNewApplication()}
        slotProps={{ paper: { sx: { p: 2, borderRadius: "6.5px" } } }}
      >
        <DialogTitle>
          <SuccessIcon />
        </DialogTitle>
        <DialogContent>
          <Typography
            fontFamily={"TT Commons"}
            fontSize={"16px"}
            color="#A0A0A0"
          >
            Order ID:{" "}
            <Typography
              component={"span"}
              fontFamily={"TT Commons"}
              fontSize={"16px"}
              color="#3725EA"
            >
              #{orderId}
            </Typography>
          </Typography>
          <Typography
            mt={2}
            fontFamily={"TT Commons"}
            fontSize={"16px"}
            color="#101828"
          >
            Your employee list has been submitted
          </Typography>
          <Typography
            mt={1}
            fontFamily={"TT Commons"}
            fontSize={"16px"}
            color="#667085"
          >
            You can check the status or submit another application.
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{ justifyContent: "space-between", width: "95%", mx: "auto" }}
        >
          <Button
            sx={{
              color: "black",
              textTransform: "none",
              bgcolor: "#F0F0F0",
              fontFamily: "TT Commons",
              fontSize: "18px",
            }}
            variant="contained"
            onClick={() => handleSubmitNewApplication()}
          >
            Submit New Application
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#6311CB",
              color: "white",
              fontFamily: "TT Commons",
              fontSize: "18px",
              px: 2,
            }}
            onClick={() =>
              navigate(
                `/${user}/gifts-&-rewards/dashboard/${
                  walletId ? `card/${walletId}/orders` : `cash/orders`
                }`
              )
            }
          >
            Check Status
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddWalletEmployee;
