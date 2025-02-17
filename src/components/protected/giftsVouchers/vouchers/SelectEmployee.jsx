import React, { useState } from "react";

import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControlLabel,
  Pagination,
  Radio,
  RadioGroup,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import FileUploader from "../../../FileUploader";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import SortDropdown from "../../../SortDropdown";
import EntriesButton from "../../../EntriesButton";
import TableComponent from "../../../TableComponent";

const SelectEmployee = ({
  setBrandVoucherData,
  brandVoucherData,
  setCurrentStage,
}) => {
  const [selectEmployeeFrom, setSelectEmployeeFrom] = useState("employee");
  const [excelData, setExcelData] = useState([]);
  const [fileError, setFileError] = useState(false);
  const [totalAmount, setTotalAmount] = useState(
    brandVoucherData?.totalAmount || 0
  );
  const [entries, setEntries] = useState(10);
  const [page, setPage] = useState(1);
  const [sortOption, setSortOption] = useState(
    selectEmployeeFrom === "employee" ? "empId-asc" : "department-asc"
  );
  const [sortedData, setSortedData] = useState(
    brandVoucherData?.employee || []
  );
  const expectedHeaders = [
    "emp_Id",
    "name",
    "email_address",
    "phone_number",
    "amount",
  ];
  const handleProceed = () => {
    setBrandVoucherData((prev) => ({
      ...prev,
      employee: excelData,
      totalAmount: totalAmount,
    }));
    setCurrentStage((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStage((prev) => prev - 1);
  };

  const handleRemoveFile = () => {
    setExcelData([]);
    setFileError(false);
    setTotalAmount(0);
  };

  const tableHeader =
    selectEmployeeFrom === "employee"
      ? [
          { title: "Emp ID", name: "emp_Id" },
          { title: "Name", name: "name" },
          { title: "Email Address", name: "email_address" },
          { title: "Department", name: "department" },
          { title: "Designation", name: "designation" },
          { title: "Amount", name: "amount" },
        ]
      : [
          { title: "Sr. No", name: "srNo" },
          { title: "Department", name: "department" },
          { title: "Employees", name: "employees" },
          { title: "Amount", name: "amount" },
        ];

  // sort options
  const sortOptions =
    selectEmployeeFrom === "employee"
      ? [
          { value: "empId-asc", label: "Employee Id (Ascending)" },
          { value: "empId-desc", label: "Employee Id (Descending)" },
          { value: "name-asc", label: "Name (Ascending)" },
          { value: "name-desc", label: "Name (Descending)" },
          { value: "email-asc", label: "Email (Ascending)" },
          { value: "email-desc", label: "Email (Descending)" },
        ]
      : [
          { value: "department-asc", label: "Department (Ascending)" },
          { value: "department-desc", label: "Department (Descending)" },
        ];

  const handleSort = (event) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);

    if (!selectedSort) return;
    // Sorting logic based on selected option
    let sorted = [...sortedData];
    switch (selectedSort) {
      case "empId-asc":
        sorted.sort((a, b) => a.emp_Id - b.emp_Id);
        break;
      case "empId-desc":
        sorted.sort((a, b) => b.emp_Id - a.emp_Id);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "email-asc":
        sorted.sort((a, b) => a.email_address.localeCompare(b.email_address));
        break;
      case "email-desc":
        sorted.sort((a, b) => b.email_address.localeCompare(a.email_address));
        break;
      case "designation-asc":
        sorted.sort((a, b) => a.designation.localeCompare(b.designation));
        break;
      case "designation-desc":
        sorted.sort((a, b) => b.designation.localeCompare(a.designation));
        break;
      case "department-asc":
        sorted.sort((a, b) => a.department.localeCompare(b.department));
        break;
      case "department-desc":
        sorted.sort((a, b) => b.department.localeCompare(a.department));
        break;
      default:
        break;
    }

    setSortedData(sorted);
  };

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
    setPage(1);
  };

  // 🔹 **Row Rendering Logic**
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
            entries === "all" ? (
              rowIndex + 1
            ) : (
              (page - 1) * entries + rowIndex + 1
            )
          ) : header.name === "Amount" ? (
            <TextField />
          ) : header.name === "name" ? (
            <Box component={"span"} display={"flex"} gap={1} py={1}>
              <Avatar
                alt={row[header.name]}
                sx={{ width: 20, height: 20, fontSize: "0.8rem" }}
                src={row[header.name]}
              />{" "}
              {row[header.name]}
            </Box>
          ) : (
            row[header.name]
          )}
        </TableCell>
      ))}
    </TableRow>
  );

  // Get paginated data
  const startIndex = entries === "all" ? 0 : (page - 1) * entries;
  const endIndex =
    entries === "all" ? sortedData.length : startIndex + parseInt(entries);
  const showEntries = sortedData.slice(startIndex, endIndex);

  return (
    <Box bgcolor={"#fff"} p={2} borderRadius={2} color="#4E4E4E">
      <Typography fontSize={"14px"} fontWeight={500}>
        Select employee
      </Typography>

      <FileUploader
        xlFile="/Voucher_Order.xlsx"
        setExcelData={setExcelData}
        setTotalAmount={setTotalAmount}
        expectedHeaders={expectedHeaders}
        setFileError={setFileError}
        fileError={fileError}
        handleRemoveFile={handleRemoveFile}
      />

      <Divider sx={{ color: "#9C9C9C", mt: 2 }}>OR</Divider>
      <Box
        sx={{
          cursor: fileError || excelData.length !== 0 ? "not-allowed" : "",
          pointerEvents: fileError || excelData.length !== 0 ? "none" : "auto",
          opacity: fileError || excelData.length !== 0 ? 0.5 : 1,
        }}
      >
        <Typography mt={1} fontSize={"14px"} fontWeight={500}>
          Select employee from list
        </Typography>
        <RadioGroup
          value={selectEmployeeFrom}
          onChange={(e) => setSelectEmployeeFrom(e.target.value)}
          aria-labelledby="demo-radio-buttons-group-label"
          sx={{ display: "flex", gap: 1, flexDirection: "row" }}
        >
          <FormControlLabel
            value="employee"
            control={<Radio size="small" />}
            label="Select Employee"
          />

          <FormControlLabel
            value="department"
            control={<Radio size="small" />}
            label="Select Department"
          />
        </RadioGroup>

        <Box display={"flex"} gap={2} alignItems={"center"} mt={2}>
          <SortDropdown
            handleChange={handleSort}
            sortOption={sortOption}
            sortOptions={sortOptions}
          />
          <EntriesButton entries={entries} handleChange={handleEntriesChange} />
        </Box>

        <Box mt={2} sx={{ overflowY: "auto" }} height={"calc(100vh - 400px)"}>
          <TableComponent
            tableHeader={tableHeader}
            tableData={showEntries}
            renderRow={renderRow}
          />
        </Box>
      </Box>

      {/* lower part: summary and proceed button */}
      <Box display={"flex"} gap={1} justifyContent={"space-between"} mt={2}>
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          flexDirection={"column"}
          mt={2}
        >
          <Box
            display="flex"
            alignItems="center"
            color={"#667085"}
            fontSize={12}
          >
            Showing{" "}
            {entries === "all"
              ? "All"
              : `${(page - 1) * entries + 1} to ${Math.min(
                  page * entries,
                  sortedData.length
                )}`}{" "}
            of {sortedData.length}
          </Box>

          <Pagination
            variant="outlined"
            size="small"
            shape="rounded"
            count={
              entries === "all" ? 1 : Math.ceil(sortedData.length / entries)
            }
            showLastButton
            page={page}
            onChange={(event, value) => setPage(value)}
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: "12px",
              },
            }}
          />
        </Box>
        <Box display={"flex"} gap={1} justifyContent={"end"} mr={4}>
          {totalAmount > 0 && (
            <Box display={"flex"} flexDirection={"row"} gap={4}>
              <Typography>Order Summary:</Typography>
              <Typography fontWeight={500}>
                &#8377; {new Intl.NumberFormat("en-US").format(totalAmount)}
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          mt={2}
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent={"end"}
        >
          <Button
            onClick={handleBack}
            variant="outlined"
            sx={{
              height: "35px",
              borderColor: "#6311CB",
              color: "#6311CB",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <KeyboardBackspaceOutlinedIcon />
          </Button>
          <Button
            variant="contained"
            onClick={handleProceed}
            disabled={totalAmount === 0 || fileError.length > 0}
            sx={{
              "&:hover": {
                background: "linear-gradient(to right, #6311CB, #8F40FB)",
                color: "white",
              },
              px: 10,
              textTransform: "none",
              backgroundColor: "#6311CB",
            }}
          >
            Proceed
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SelectEmployee;
