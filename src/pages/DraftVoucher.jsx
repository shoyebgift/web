import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FilterComponent from "../components/FilterComponent";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import edit from "../assets/svg/edit3.svg";

import { useDispatch, useSelector } from "react-redux";
import TableComponent from "../components/TableComponent";
import { templatesImg } from "../utils/tempalets";
import { useNavigate } from "react-router-dom";
import { removeDraftVoucher } from "../features/voucherSlice";

const DraftVoucherPage = () => {
  const { draftVouchers } = useSelector((state) => state.voucher.vouchers);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tableHeader = [
    { title: "Sr. No", name: "srNo" },
    { title: "Vouchers", name: "voucher" },
    { title: "Total Amount", name: "totalAmount" },
    {
      title: "Allotment History",
      name: "allotmentHistory",
    },
  ];
  const deleteDraftVoucher = (id) => {
    dispatch(removeDraftVoucher(id));
  };

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
            <Box
              display={"flex"}
              gap={1}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Box
                component={"img"}
                src={row[header.name]?.image}
                height={"29px"}
                sx={{ objectFit: "contain" }}
                alt={row[header.name]?.name}
              />
              <Box
                component={"img"}
                src={templatesImg[draftVouchers[rowIndex]?.templateId].image}
                height={"29px"}
                sx={{ objectFit: "contain" }}
                alt={row[header.name]?.name}
              />
            </Box>
          ) : header.name === "totalAmount" ? (
            `₹ ${row[header.name]}`
          ) : header.name === "allotmentHistory" ? (
            <Box p={1}>
              <Button
                variant="contained"
                onClick={() => navigate(`${draftVouchers[rowIndex]?.id}/pay`)}
                sx={{
                  textTransform: "none",
                  fontSize: "12px",
                  fontFamily: "Gilroy",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  bgcolor: "#6311CB",
                  "&:hover": {
                    background: "linear-gradient(to right, #6311CB, #8F40FB)",
                    color: "white",
                  },
                }}
              >
                {" "}
                Proceed to pay{" "}
              </Button>
              <Button
                onClick={() => navigate(`${draftVouchers[rowIndex]?.id}`)}
                sx={{
                  textTransform: "none",
                  fontSize: "14px",
                  fontFamily: "Gilroy",
                  fontWeight: 500,
                  background: "none",
                  color: "#3725EA",
                  ml: 2,
                }}
              >
                {" "}
                <Box
                  component={"img"}
                  src={edit}
                  width={"14px"}
                  alt="edit"
                  mr={1}
                />{" "}
                Edit{" "}
              </Button>

              <IconButton
                onClick={() => deleteDraftVoucher(draftVouchers[rowIndex]?.id)}
                title="Delete Draft Voucher"
                sx={{
                  ml: 1,
                  color: "#d32f2f",
                  "&:hover": {
                    background: "rgba(0, 0, 0, 0.08)",
                  },
                }}
              >
                <DeleteForeverOutlinedIcon sx={{ fontSize: "20px" }} />
              </IconButton>
            </Box>
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
