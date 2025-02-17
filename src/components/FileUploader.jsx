import React, { useRef, useState } from "react";
import * as XLSX from "@e965/xlsx";
import Papa from "papaparse";
import { Alert, Box, IconButton, Typography } from "@mui/material";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const FileUploader = ({
  setExcelData,
  setTotalAmount,
  expectedHeaders,
  setFileError,
  xlFile,
  fileError,
  handleRemoveFile,
}) => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleUpload = (e) => {
    handleFileUpload(e);
    if (!fileError) {
      setFileName(e.target.files[0].name);
    }
    fileInputRef.current.value = "";
  };

  const handleFileUpload = (e) => {
    setExcelData([]);
    setFileError(null); // Reset error before new upload
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop().toLowerCase();
    const allowedFileTypes = ["xlsx", "xls", "csv"];

    if (!allowedFileTypes.includes(fileExt)) {
      setFileError([
        "Invalid file type. Please upload a .xls, .xlsx, or .csv file.",
      ]);
      return;
    }

    // Function to validate and process parsed data
    const processParsedData = (jsonData) => {
      if (!jsonData || jsonData.length === 0) {
        setFileError(["The uploaded file is empty."]);
        return;
      }

      // Extract the header row
      const headerRow = jsonData[0];

      if (!headerRow) {
        setFileError(["The uploaded file does not contain any headers."]);
        return;
      }

      // Validate headers
      const missingHeaders = expectedHeaders.filter(
        (header) => !headerRow.includes(header)
      );
      if (missingHeaders.length > 0) {
        setFileError([
          `Invalid file format. The following required columns are missing: ${missingHeaders.join(
            ", "
          )}.`,
        ]);
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
        setFileError(["No data found in the file."]);
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
        setFileError(errors);
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
            setFileError(["The uploaded CSV file is empty."]);
            return;
          }
          processParsedData(results.data);
        },
        header: false, // Read as an array, since we validate headers separately
        skipEmptyLines: true,
        error: () => {
          setFileError(["Error parsing CSV file. Please check the format."]);
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
          setFileError([
            "An error occurred while processing the Excel file. Please try again.",
          ]);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleDownloadSheet = () => {
    const fileUrl = xlFile;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "sample.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Box
        component={"label"}
        htmlFor="file_upload"
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        mt={2}
        alignItems={"center"}
        border={"1px dashed #6311CB"}
        p={1}
        borderRadius={2}
        sx={{
          cursor: "pointer",
          backgroundColor: "#3725EA26",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          flexDirection={"column"}
          color={"#3725EA"}
        >
          <UploadFileOutlinedIcon fontSize={"large"} />

          {fileName && (
            <Typography
              fontSize={"12px"}
              fontWeight={500}
              color={"black"}
              display={"flex"}
              alignItems={"center"}
              fontFamily={"TT Commons"}
            >
              {fileName}{" "}
              <IconButton
                variant="text"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleRemoveFile();
                  setFileName("");
                }}
                sx={{
                  p: 0,
                  color: "red",
                  textTransform: "none",
                }}
              >
                <CloseOutlinedIcon sx={{ fontSize: "14px" }} />
              </IconButton>
            </Typography>
          )}
          <Typography
            fontSize={"18px"}
            fontWeight={500}
            fontFamily={"TT Commons"}
          >
            Upload spreadsheet
          </Typography>
        </Box>
        <Typography
          fontSize={"16px"}
          fontFamily={"TT Commons"}
          color={"#9C9C9C"}
        >
          (only xls,xlsx and csv formats are supported)
        </Typography>
      </Box>
      <input
        name="file_upload"
        id="file_upload"
        ref={fileInputRef}
        type="file"
        onChange={handleUpload}
        accept=".xls,.xlsx,.csv"
        style={{ display: "none" }}
      />
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={1}
        flexDirection={"row"}
        mt={1}
        p={1}
        borderRadius={2}
        bgcolor={"#F4F4F4"}
        color={"#000"}
        fontFamily={"TT Commons"}
        fontSize={"16px"}
      >
        Download a{" "}
        <button
          variant="text"
          style={{
            cursor: "pointer",
            p: 0,
            color: "#3725EA",
            textTransform: "none",
            fontFamily: "TT Commons",
            fontSize: "16px",
            border: "none",
          }}
          onClick={handleDownloadSheet}
        >
          sample spreadsheet
        </button>{" "}
        to quickly start your import
      </Box>

      {fileError && fileError.length > 0 && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {fileError.map((error, index) => (
            <Typography key={index}>{error}</Typography>
          ))}
        </Alert>
      )}
    </>
  );
};

export default FileUploader;
