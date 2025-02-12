import {
  Box,
  Button,
  InputAdornment,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FilterComponent from "../components/FilterComponent";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useSelector } from "react-redux";
import TableComponent from "../components/TableComponent";
import { templatesImg } from "../utils/tempalets";

const DraftVoucherPage = () => {
  const { draftVouchers } = useSelector((state) => state.voucher.vouchers);

  const tableHeader = [
    { title: "Sr. No", name: "srNo" },
    { title: "Vouchers", name: "voucher" },
    { title: "Total Amount", name: "totalAmount" },
    {
      title: "Allotment History",
      name: "allotmentHistory",
    },
  ];

  const renderRow = (row, rowIndex) => (
    <TableRow key={rowIndex}>
      {tableHeader.map((header) => (
        <TableCell
          key={header.name}
          sx={{
            textAlign: "center",
            color: "#667085",
            padding: 0.2,
          }}
        >
          {header.name === "srNo" ? (
            (rowIndex + 1).toString()
          ) : header.name === "voucher" ? (
            <>
              {console.log(row[header.name])}
              <Box
                component={"img"}
                src={row[header.name]?.image}
                width={40}
                sx={{ objectFit: "contain" }}
                alt={row[header.name]?.name}
              />
              <Box
                component={"img"}
                src={row[header.name]?.image}
                width={40}
                sx={{ objectFit: "contain", ml: 2 }}
                alt={row[header.name]?.name}
              />
            </>
          ) : header.name === "totalAmount" ? (
            `₹ ${row[header.name]}`
          ) : (
            row[header.name]
          )}
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <Box
      bgcolor={"#fff"}
      borderRadius={2}
      p={2}
      mt={3}
      height={"calc(100vh - 130px)"}
    >
      <Box
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={2}
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
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Button
            variant="outlined"
            startIcon={<FileUploadOutlinedIcon fontSize="small" />}
            sx={{
              border: "1px solid black",
              textTransform: "none",
              fontSize: "12px",
              color: "#667085",
            }}
          >
            {" "}
            Export{" "}
          </Button>

          {/* Filter dropdown here  */}
          <FilterComponent />
        </Box>
      </Box>
      <Box mt={3} height={"calc(100vh - 350px)"} sx={{ overflowY: "auto" }}>
        <TableComponent
          tableHeader={tableHeader}
          tableData={draftVouchers}
          renderRow={renderRow}
        />
      </Box>
    </Box>
  );
};

export default DraftVoucherPage;
