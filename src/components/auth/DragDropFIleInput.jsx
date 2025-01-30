import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const DragDropFileInput = ({ name, onFileUpload, value }) => {
  const [fileName, setFileName] = useState(value?.name || "");

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      onFileUpload(name, event.dataTransfer.files[0]);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onFileUpload(event.target.name, event.target.files[0]);
    }
  };

  return (
    <Box mb={1}>
      <Box
        name={name}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        border={"2px dashed #ccc"}
        borderRadius="8px"
        padding="16px"
        textAlign="center"
        backgroundColor="#fafafa"
        sx={{
          cursor: "pointer",
          "&:hover": { borderColor: "#1976d2" },
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <CloudUploadOutlinedIcon color="primary" fontSize="small" />
        <Typography fontSize={"8px"} mt={1}>
          {fileName}
        </Typography>
        <Box
          component={"span"}
          fontSize={"12px"}
          mt={1}
          whiteSpace={"nowrap"}
          display={"flex"}
          alignItems={"center"}
          gap={1}
          flexDirection={"column"}
        >
          Browse and chose the files you want to upload from your computer{" "}
          <Typography
            component={"label"}
            fontWeight={"bold"}
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
            htmlFor={name}
            height={"15px"}
            width={"15px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            bgcolor={"#6311CB"}
            color={"#fff"}
            borderRadius={"2px"}
          >
            <AddOutlinedIcon sx={{ fontSize: "15px" }} />
          </Typography>
        </Box>
        <input
          name={name}
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => handleChange(e)}
          style={{ display: "none" }}
          id={name}
        />
      </Box>
      <Box
        color="#C3C3C3"
        mt={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontSize="12px">Supported formats- jpg,png,svg</Typography>
        <Typography fontSize="12px">Maximum size - 20MB</Typography>
      </Box>
    </Box>
  );
};

export default DragDropFileInput;
