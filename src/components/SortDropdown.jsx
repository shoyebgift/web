import React, { useState } from "react";
import {
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  Box,
} from "@mui/material";
import SegmentOutlinedIcon from "@mui/icons-material/SegmentOutlined";

const SortDropdown = ({ sortOption, sortOptions, handleChange }) => {
  return (
    <Box display="flex" gap={2} alignItems="center">
      <Select
        labelId="sort-select-label"
        id="sort-select"
        value={sortOption}
        onChange={handleChange}
        displayEmpty
        input={
          <OutlinedInput
            startAdornment={
              <InputAdornment position="start">
                <SegmentOutlinedIcon fontSize="small" />
              </InputAdornment>
            }
          />
        }
        renderValue={() => "Sort By"}
        MenuProps={{
          anchorOrigin: { vertical: "bottom", horizontal: "left" },
          transformOrigin: { vertical: "top", horizontal: "left" },
          sx: {
            "& .MuiMenuItem-root": { fontSize: "12px" },
          },
        }}
        sx={{
          height: "35px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.21)",
          fontSize: "14px",
        }}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default SortDropdown;
