import React, { useRef, useState } from "react";

import { Alert, Box, Button, IconButton, Typography } from "@mui/material";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const FileUploader = ({
  handleFileUpload,
  handleDownloadSheet,
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
          {fileError.map((error) => (
            <Typography>{error}</Typography>
          ))}
        </Alert>
      )}
    </>
  );
};

export default FileUploader;
