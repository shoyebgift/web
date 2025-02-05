import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useState } from "react";
function FilterDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState({
    from: "",
    to: "",
  });

  const handleClear = () => {
    setSelectedStatus(""); // Clear selection
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateChange = (e) => {
    e.preventDefault();
    if (e.target.name === "from" && e.target.value === "") {
      setSelectedDate({
        from: "",
        to: "",
      });
      return;
    }
    setSelectedDate((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          borderColor: "black",
          textTransform: "none",
          fontSize: "12px",
          color: "#667085",
        }}
        startIcon={<FilterListOutlinedIcon fontSize="small" />}
        endIcon={
          <ArrowDropDownOutlinedIcon
            sx={{
              rotate: anchorEl ? "180deg" : "0deg",
            }}
            fontSize="small"
          />
        }
      >
        Filter
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ p: 2 }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          disableRipple
          sx={{
            "&:hover": { cursor: "default", backgroundColor: "transparent" },
          }}
        >
          <FormControl>
            <FormLabel sx={{ fontSize: "12px" }}>Order Status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={selectedStatus}
              name="radio-buttons-group"
              sx={{
                "& .MuiTypography-root": { fontSize: "12px" }, // Styles label text
                "& .MuiRadio-root": { color: "blue", transform: "scale(0.8)" }, // Styles radio button
              }}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <FormControlLabel
                value="completed"
                control={<Radio size="small" />}
                label="Completed"
              />
              <FormControlLabel
                value="scheduled"
                control={<Radio size="small" />}
                label="Scheduled"
              />
            </RadioGroup>
          </FormControl>
        </MenuItem>
        <MenuItem
          disableRipple
          sx={{
            "&:hover": { cursor: "default", backgroundColor: "transparent" },
          }}
        >
          <FormControl>
            <FormLabel sx={{ fontSize: "12px" }}>Date</FormLabel>
            <Box display="grid" gridTemplateColumns="1fr 3fr">
              <Typography fontSize={"12px"} mt={1}>
                From:
              </Typography>{" "}
              <TextField
                variant="outlined"
                size="small"
                name="from"
                sx={{
                  width: "100%",
                  "& input": { fontSize: "12px" },
                  "& .MuiInputBase-input::placeholder": { fontSize: "10px" },
                }}
                value={selectedDate.from}
                onChange={handleDateChange}
                type="date"
              />
            </Box>
            <Box display="grid" gridTemplateColumns="1fr 3fr" mt={1}>
              <Typography fontSize={"12px"} mt={1}>
                To:
              </Typography>{" "}
              <TextField
                variant="outlined"
                size="small"
                name="to"
                sx={{
                  width: "100%",
                  "& input": { fontSize: "12px" },
                  "& .MuiInputBase-input::placeholder": { fontSize: "10px" },
                }}
                value={selectedDate.to}
                onChange={handleDateChange}
                disabled={selectedDate.from === ""}
                type="date"
                slotProps={{
                  htmlInput: {
                    min: selectedDate.from,
                  },
                }}
              />
            </Box>
          </FormControl>
        </MenuItem>
        <MenuItem
          disableRipple
          sx={{
            display: "flex",
            justifyContent: "space-around",
            "&:hover": { cursor: "default", backgroundColor: "transparent" },
          }}
        >
          <Button
            onClick={handleClear}
            variant="outlined"
            size="small"
            sx={{ fontSize: "12px", color: "#6311CB", borderColor: "#6311CB" }}
          >
            Clear
          </Button>
          <Button
            onClick={handleClear}
            variant="contained"
            size="small"
            sx={{ fontSize: "12px", ml: 2, backgroundColor: "#6311CB" }}
          >
            Apply
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default FilterDropdown;
