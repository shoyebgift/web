import React from "react";
import { Box, Typography, Stack, CircularProgress } from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

const SpendingCard = () => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        boxShadow: 2,
        p: 2,
        bgcolor: "white",
      }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography color="#474279" fontSize={14} fontWeight={500}>
          Total spending's
        </Typography>

        <Box
          sx={{
            fontSize: "10px",
            display: "flex",
            alignItems: "center",
            bgcolor: "#F2EEF8",
            py: 0.5,
            px: 1,
            borderRadius: "8px",
          }}
        >
          <Typography color="#6311CB" fontWeight={500} fontSize="10px">
            Feb 20 - Jan 30, 2024
          </Typography>
          <ExpandMoreOutlinedIcon sx={{ color: "#6311CB", fontSize: "16px" }} />
        </Box>
      </Stack>

      {/* Data Rows */}
      {[
        { label: "Expense", value: "₹ 50,000", progress: 40 },
        { label: "Benefit", value: "₹ 50,000", progress: 60 },
        { label: "Gifts & voucher", value: "₹ 50,000", progress: 80 },
      ].map((item, index) => (
        <Stack
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            pb: 2,
            mb: 2,
            borderBottom: "1px dashed rgba(99, 17, 203, 0.3)",
          }}
        >
          <Box>
            <Typography fontSize={14} fontWeight={500} mb={0.5}>
              {item.label}
            </Typography>
            <Typography fontSize={12} fontWeight={500} color="#878787">
              {item.value}
            </Typography>
          </Box>

          <Box position="relative">
            <CircularProgress
              variant="determinate"
              value={item.progress}
              sx={{ color: "#C33FAD" }}
              size={80}
              thickness={5}
            />
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontWeight: 500,
                fontSize: "12px",
              }}
            >
              {item.progress}%
            </Typography>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};

export default SpendingCard;
