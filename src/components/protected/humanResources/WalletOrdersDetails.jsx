import {
  Avatar,
  Box,
  InputAdornment,
  Pagination,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SortDropdown from "../../SortDropdown";
import EntriesButton from "../../EntriesButton";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TableComponent from "../../TableComponent";
import { maskCardNumber, maskEmail } from "../../../utils";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const WalletOrdersDetails = () => {
  const { cardWallets, cashWallets } = useSelector((state) => state.wallet);
  const { walletId, orderId } = useParams();
  const employees = (
    walletId
      ? cardWallets?.find(
          (wallet) => wallet.id.toString() === walletId.toString()
        )?.orders
      : cashWallets
  )?.find(
    (order) => order.order_ID.toString() === orderId.toString()
  )?.employees;
  const [sortOption, setSortOption] = useState("empId-asc");
  const [entries, setEntries] = useState(10);
  const [sortedData, setSortedData] = useState(employees || "");
  const [page, setPage] = useState(1);
  // Sort options
  const sortOptions = [
    { value: "empId-asc", label: "Employee ID (Ascending)" },
    { value: "empId-desc", label: "Employee ID (Descending)" },
    { value: "name-asc", label: "Name (Ascending)" },
    { value: "name-desc", label: "Name (Descending)" },
    { value: "card-balance-asc", label: "Card Balance (Ascending)" },
    { value: "card-balance-desc", label: "Card Balance (Descending)" },
  ];

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
    setPage(1);
  };

  const handleChange = (event) => {
    setSortOption(event.target.value);

    // Sorting logic based on selected option
    let sorted = [...sortedData];
    switch (event.target.value) {
      case "empId-asc":
        sorted.sort((a, b) => a.emp_ID - b.emp_ID);
        break;
      case "empId-desc":
        sorted.sort((a, b) => b.emp_ID - a.emp_ID);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "card-balance-asc":
        sorted.sort((a, b) => a.card_balance - b.card_balance);
        break;
      case "card-balance-desc":
        sorted.sort((a, b) => b.card_balance - a.card_balance);
        break;
      default:
        break;
    }

    setSortedData(sorted);
  };

  const tableHeader = [
    { title: "Emp ID", name: "emp_ID" },
    { title: "Name", name: "name" },
    { title: "Email Address", name: "email_address" },
    { title: "Card Number", name: "card_number" },
    { title: "Amount", name: "card_balance" },
  ];
  const renderRow = (row, rowIndex) => (
    <TableRow key={rowIndex}>
      {tableHeader.map((header) => (
        <TableCell
          key={header.name}
          sx={{
            textAlign: "center",
            color: "#667085",
            padding: 0.8,
            fontSize: "16px",
            fontFamily: "TT Commons",
          }}
        >
          {header.name === "card_balance" ? (
            `₹ ${row[header.name]}`
          ) : header.name === "name" ? (
            <Typography
              component={"span"}
              fontFamily={"TT Commons"}
              display={"flex"}
              width={"150px"}
              whiteSpace={"nowrap"}
              mx={"auto"}
              gap={2}
            >
              <Avatar sx={{ height: 25, width: 25 }} /> {row[header.name]}
            </Typography>
          ) : header.name === "email_address" ? (
            maskEmail(row[header.name])
          ) : header.name === "card_number" ? (
            maskCardNumber(row[header.name])
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
    <Box mt={2}>
      <Box
        display={"flex"}
        bgcolor={"#FFF"}
        borderRadius={2}
        p={2}
        gap={2}
        flexDirection={"column"}
      >
        {" "}
        <Box display={"flex"} gap={2} alignItems={"center"}>
          {" "}
          <SortDropdown
            sortOptions={sortOptions}
            sortOption={sortOption}
            handleChange={handleChange}
          />
          <EntriesButton entries={entries} handleChange={handleEntriesChange} />
        </Box>
        <Typography
          mt={2}
          fontSize={"22px"}
          fontWeight={500}
          fontFamily={"TT Commons"}
        >
          Order Status{" "}
          <Typography
            component={"span"}
            fontFamily={"TT Commons"}
            fontSize={"16px"}
            color={"#3725EA"}
          >
            #{orderId}
          </Typography>
        </Typography>
      </Box>
      <Box mt={2} borderRadius={2} p={2} bgcolor={"#FFFFFF"}>
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
        <Box
          mt={2}
          height={"calc(100vh - 350px)"}
          sx={{ overflowY: "auto" }}
          px={8}
        >
          <TableComponent
            tableHeader={tableHeader}
            tableData={showEntries}
            renderRow={renderRow}
          />
        </Box>
      </Box>
      <Box
        bgcolor={"#FFFFFF"}
        mt={1}
        p={2}
        borderRadius="5px"
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display="flex" alignItems="center" color={"#667085"} fontSize={12}>
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
          count={entries === "all" ? 1 : Math.ceil(sortedData.length / entries)}
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
    </Box>
  );
};

export default WalletOrdersDetails;
