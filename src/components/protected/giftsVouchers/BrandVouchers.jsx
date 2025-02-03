import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import {
  Box,
  Button,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import draft from "../../../assets/svg/draft.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { myVouchers } from "../../../utils/tableJson";

const BrandVouchersPage = () => {
  const tableHeader = [
    "Sr. No",
    "Date & Time",
    "Total Users",
    "Order Status",
    "Total Order Value",
    "Allotment History",
  ];

  const tableData = myVouchers.map((data, index) => [
    index + 1,
    data.dateTime,
    `${data.totalUsers} employees`,
    data.orderStatus,
    `₹ ${data.totalOrderValue}`,
    <Button size="small" sx={{ textTransform: "none" }}>
      <FileDownloadOutlinedIcon /> Download
    </Button>,
  ]);

  return (
    <Box mt={3}>
      <Box bgcolor={"#FFF"} borderRadius={2} p={2} mt={3}>
        <Box
          height="40px"
          display={"flex"}
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
        >
          <TextField
            placeholder="Search"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "40px",
                width: "290px",
                fontSize: "14px",
                borderRadius: "10px",
              },
            }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon sx={{ color: "#A1A1AA" }} />
                  </InputAdornment>
                ),
              },
            }}
          />

          <Box display={"flex"} gap={2}>
            <Box
              component={NavLink}
              to="voucher-draft"
              height="40px"
              px={2}
              border="1px solid #6311CB"
              color="#6311CB"
              width="fit-content"
              display="flex"
              borderRadius="10px"
              alignItems="center"
              gap={1}
              sx={{
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#6311CB",
                  color: "#FFFFFF",
                  "& .draft-img": {
                    filter: "invert(100%)",
                  },
                },
              }}
            >
              <Box
                component="img"
                className="draft-img"
                src={draft}
                alt="draft"
              />
              Voucher draft
            </Box>
            <Box
              component={NavLink}
              to={"apply-for-brand-voucher"}
              height="40px"
              px={2}
              color="#FFFFFF"
              bgcolor={"#6311CB"}
              width="fit-content"
              display="flex"
              borderRadius="10px"
              gap={1}
              sx={{
                alignItems: "center",
                textDecoration: "none",
                "&:hover": {
                  bgcolor: "#7D22E8",
                },
              }}
            >
              <ShoppingCartOutlinedIcon fontSize="small" /> Buy vouchers
            </Box>
          </Box>
        </Box>

        <TableContainer sx={{ maxHeight: 440, mt: 3 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {tableHeader.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      textAlign: "center",
                      fontWeight: "600",
                      color: "#667085",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((item, colIndex) => {
                    return (
                      <TableCell
                        key={colIndex}
                        sx={{
                          fontSize: "small",
                          textAlign: "center",
                        }}
                      >
                        {colIndex === 1
                          ? new Intl.DateTimeFormat("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "numeric",
                              minute: "2-digit",
                              hour12: true,
                            }).format(new Date(item))
                          : item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default BrandVouchersPage;
