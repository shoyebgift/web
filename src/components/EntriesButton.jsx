import { Box, MenuItem, Select } from "@mui/material";
import React from "react";

const EntriesButton = ({ entries, handleChange }) => {
  return (
    <Box
      display={"flex"}
      gap={1}
      alignItems={"center"}
      fontSize={"14px"}
      fontFamily={"Gilroy"}
      color={"#707070"}
    >
      Show{" "}
      <Select
        sx={{
          height: "35px",
          borderRadius: "10px",
          fontSize: "12px",
        }}
        MenuProps={{
          sx: { "& .MuiMenuItem-root": { fontSize: "12px" } },
        }}
        value={entries}
        onChange={handleChange}
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={"all"}>All</MenuItem>
      </Select>{" "}
      entries
    </Box>
  );
};

export default EntriesButton;
