import {
  Box,
  Button,
  Pagination,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SortDropdown from "../../../SortDropdown";
import EntriesButton from "../../../EntriesButton";
import FilterComponent from "../../../FilterComponent";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TableComponent from "../../../TableComponent";
import EmployeeAvatarGroup from "../../../EmployeeAvatarGroup";

const WalletOrders = () => {
  const { cardWallets, cashWallets } = useSelector((state) => state.wallet);
  const { walletId, user } = useParams();
  const orders = walletId
    ? cardWallets.find((wallet) => wallet.id.toString() === walletId.toString())
        ?.orders
    : cashWallets;
  const [sortOption, setSortOption] = useState("date-asc");
  const [entries, setEntries] = useState(10);
  const [sortedData, setSortedData] = useState(orders || "");
  const [page, setPage] = useState(1);

  // Sort options
  const sortOptions = [
    { value: "date-asc", label: "Date & Time (Ascending)" },
    { value: "date-desc", label: "Date & Time (Descending)" },
    { value: "orderId-asc", label: "Order ID (Ascending)" },
    { value: "orderId-desc", label: "Order ID (Descending)" },
    { value: "totalAmount-asc", label: "Total Amount (Ascending)" },
    { value: "totalAmount-desc", label: "Total Amount (Descending)" },
  ];

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
    setPage(1);
  };

  const handleChange = (event) => {
    setSortOption(event.target.value);

    // Sorting logic based on selected option
    let sorted = [...orders];
    switch (event.target.value) {
      case "date-asc":
        sorted.sort(
          (a, b) => new Date(a.submitted_Date) - new Date(b.submitted_Date)
        );
        break;
      case "date-desc":
        sorted.sort(
          (a, b) => new Date(b.submitted_Date) - new Date(a.submitted_Date)
        );
        break;
      case "orderId-asc":
        sorted.sort((a, b) => a.order_ID - b.order_ID);
        break;
      case "orderId-desc":
        sorted.sort((a, b) => b.order_ID - a.order_ID);
        break;
      case "totalAmount-asc":
        sorted.sort((a, b) => a.total_amount - b.total_amount);
        break;
      case "totalAmount-desc":
        sorted.sort((a, b) => b.total_amount - a.total_amount);
        break;
      default:
        break;
    }

    setSortedData(sorted);
  };

  const tableHeader = [
    { title: "Sr. No", name: "srNo" },
    { title: "Order ID", name: "order_ID" },
    { title: "Load Status", name: "load_Status" },
    { title: "Date & Time", name: "submitted_Date" },
    { title: "Total Employees", name: "employees" },
    { title: "Amount", name: "total_amount" },
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
          {header.name === "srNo" ? (
            entries === "all" ? (
              rowIndex + 1
            ) : (
              (page - 1) * entries + rowIndex + 1
            )
          ) : header.name === "order_ID" ? (
            <Typography
              component={Link}
              fontFamily={"TT Commons"}
              fontSize={"16px"}
              color={"#3725EA"}
              sx={{
                textDecoration: "none",
              }}
              to={
                walletId
                  ? `/${user}/human-resource/employees/card/${walletId}/${
                      row[header.name]
                    }`
                  : `/${user}/human-resource/employees/cash/${row[header.name]}`
              }
            >
              #{row[header.name]}
            </Typography>
          ) : header.name === "load_Status" ? (
            <Typography
              component={"span"}
              fontFamily={"TT Commons"}
              fontSize={"14px"}
              color={
                row[header.name] === "fully_loaded" ? "#027A48" : "#A9A9A9"
              }
              fontWeight={500}
              p={"4px 10px"}
              bgcolor={"#ECFDF3"}
              borderRadius={4}
              textTransform={"capitalize"}
            >
              {row[header.name]}
            </Typography>
          ) : header.name === "submitted_Date" ? (
            new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }).format(new Date(row[header.name]))
          ) : header.name === "employees" ? (
            <EmployeeAvatarGroup employees={row[header.name]} />
          ) : (
            `₹ ${row[header.name]}`
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
      <Box bgcolor={"#FFF"} borderRadius={2} p={2}>
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {" "}
          <Box display={"flex"} gap={2} alignItems={"center"}>
            {" "}
            <SortDropdown
              sortOptions={sortOptions}
              sortOption={sortOption}
              handleChange={handleChange}
            />
            <EntriesButton
              entries={entries}
              handleChange={handleEntriesChange}
            />
          </Box>
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
        <Typography
          mt={2}
          fontSize={"22px"}
          fontWeight={500}
          fontFamily={"TT Commons"}
        >
          Order Status
        </Typography>
      </Box>
      <Box
        mt={2}
        height={"calc(100vh - 290px)"}
        sx={{ overflowY: "auto" }}
        bgcolor={"#FFFFFF"}
        borderRadius={2}
        p={2}
        pt={8}
        px={8}
      >
        <TableComponent
          tableHeader={tableHeader}
          tableData={showEntries}
          renderRow={renderRow}
        />
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

export default WalletOrders;
