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
import FileUploader from "../../FileUploader";
import * as XLSX from "@e965/xlsx";
import Papa from "papaparse";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SuccessIcon from "../../SuccessIcon";
import { updatewallet } from "../../../features/walletSlice";

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

  const handleSubmit = () => {
    dispatch(
      updatewallet({
        walletId: walletId ? walletId : null,
        employees: excelData,
        cardType: walletId ? "card" : "cash",
        totalAmount,
      })
    );
    setShowCompleted(true);
  };
  const handleSubmitNewApplication = () => {
    navigate(
      `/${user}/gifts-&-rewards/dashboard/${walletId ? "card" : "cash"}`
    );
  };

  const handleFileUpload = (e) => {
    setExcelData([]);
    setFileError(null); // Reset error before new upload
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop().toLowerCase();
    const allowedFileTypes = ["xlsx", "xls", "csv"];

    if (!allowedFileTypes.includes(fileExt)) {
      setFileError(
        "Invalid file type. Please upload a .xls, .xlsx, or .csv file."
      );
      return;
    }

    const expectedHeaders = [
      "emp_ID",
      "name",
      "email_address",
      "card_number",
      "card_balance",
    ]; // Removed "amount"

    // Function to validate and process parsed data
    const processParsedData = (jsonData) => {
      if (!jsonData || jsonData.length === 0) {
        setFileError("The uploaded file is empty.");
        return;
      }

      // Extract the header row
      const headerRow = jsonData[0];

      if (!headerRow) {
        setFileError("The uploaded file does not contain any headers.");
        return;
      }

      // Validate headers
      const missingHeaders = expectedHeaders.filter(
        (header) => !headerRow.includes(header)
      );
      if (missingHeaders.length > 0) {
        setFileError(
          `Invalid file format. The following required columns are missing: ${missingHeaders.join(
            ", "
          )}.`
        );
        return;
      }

      // Find the last row with actual data (ignoring empty rows)
      let lastValidRowIndex = jsonData.length - 1;
      while (
        lastValidRowIndex > 0 &&
        jsonData[lastValidRowIndex] &&
        jsonData[lastValidRowIndex].every((cell) => !cell)
      ) {
        lastValidRowIndex--;
      }

      if (lastValidRowIndex < 1) {
        setFileError("No data found in the file.");
        return;
      }

      // Process the data only up to the last valid row
      const mappedData = [];
      const errors = [];
      let sumAmount = 0;

      jsonData.slice(1, lastValidRowIndex + 1).forEach((row, rowIndex) => {
        const rowObject = {};

        expectedHeaders.forEach((header, index) => {
          rowObject[header] = row[index] ? row[index].toString().trim() : "";

          // Check if required fields are empty
          if (rowObject[header] === "") {
            errors.push(`Row ${rowIndex + 2}: Missing value for "${header}".`);
          }
        });

        // Sum card_balance instead of amount
        sumAmount += Number(rowObject["card_balance"] || 0);

        mappedData.push(rowObject);
      });

      if (errors.length > 0) {
        setFileError([...errors]);
        return;
      }

      // ✅ Set the parsed data to state
      setExcelData(mappedData);
      setTotalAmount(sumAmount);
      setFileError(false); // Clear previous errors if data is valid
    };

    if (fileExt === "csv") {
      // Parse CSV file using PapaParse
      Papa.parse(file, {
        complete: (results) => {
          if (!results.data || results.data.length === 0) {
            setFileError("The uploaded CSV file is empty.");
            return;
          }
          processParsedData(results.data);
        },
        header: false, // Read as an array, since we validate headers separately
        skipEmptyLines: true,
        error: () => {
          setFileError("Error parsing CSV file. Please check the format.");
        },
      });
    } else {
      // Parse Excel file using @e965/xlsx
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const sheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          processParsedData(jsonData);
        } catch (error) {
          setFileError(
            "An error occurred while processing the Excel file. Please try again."
          );
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleDownloadSheet = () => {
    const fileUrl = "/GPR.xlsx";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "sample.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          handleFileUpload={handleFileUpload}
          handleDownloadSheet={handleDownloadSheet}
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
          onClick={() => navigate(`/${user}/gifts-&-rewards/dashboard`)}
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
          }}
          onClick={handleSubmit}
        >
          Save & Proceed
        </Button>
      </Box>

      <Dialog open={showCompleted} onClose={() => handleSubmitNewApplication()}>
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
