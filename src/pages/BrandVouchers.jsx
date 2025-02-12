import React, { useState } from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import {
  Box,
  Button,
  InputAdornment,
  Pagination,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import draft from "../assets/svg/draft.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SortDropdown from "../components/SortDropdown";
import EntriesButton from "../components/EntriesButton";
import TableComponent from "../components/TableComponent";
import FilterComponent from "../components/FilterComponent";
import { useSelector } from "react-redux";

const BrandVouchersPage = () => {
  const { myVouchers } = useSelector((state) => state.voucher.vouchers);
  const tableHeader = [
    { title: "Sr. No", name: "srNo" },
    { title: "Date & Time", name: "dateTime" },
    { title: "Total Users", name: "employee" },
    { title: "Total Order Value", name: "totalAmount" },
    { title: "Order Status", name: "orderstatus" },
    { title: "Allotment History", name: "allotmentHistory" },
  ];
  const [sortOption, setSortOption] = useState("date-asc");
  const [entries, setEntries] = useState(10);
  const [sortedData, setSortedData] = useState(myVouchers);
  const [page, setPage] = useState(1);

  const handleEntriesChange = (event) => {
    setEntries(event.target.value);
    setPage(1);
  };

  const handleChange = (event) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);

    if (!selectedSort) return;

    // Sorting logic based on selected option
    let sorted = [...myVouchers];
    switch (selectedSort) {
      case "date-asc":
        sorted.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        break;
      case "date-desc":
        sorted.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
        break;
      case "users-asc":
        sorted.sort((a, b) => a.totalUsers - b.totalUsers);
        break;
      case "users-desc":
        sorted.sort((a, b) => b.totalUsers - a.totalUsers);
        break;
      case "order-asc":
        sorted.sort((a, b) => a.totalOrderValue - b.totalOrderValue);
        break;
      case "order-desc":
        sorted.sort((a, b) => b.totalOrderValue - a.totalOrderValue);
        break;
      default:
        break;
    }

    setSortedData(sorted);
  };

  const sortOptions = [
    { value: "date-asc", label: "Date & Time (Ascending)" },
    { value: "date-desc", label: "Date & Time (Descending)" },
    { value: "users-asc", label: "Total Users (Ascending)" },
    { value: "users-desc", label: "Total Users (Descending)" },
    { value: "order-asc", label: "Total Order Value (Ascending)" },
    { value: "order-desc", label: "Total Order Value (Descending)" },
  ];

  // Get paginated data
  const startIndex = entries === "all" ? 0 : (page - 1) * entries;
  const endIndex =
    entries === "all" ? sortedData.length : startIndex + parseInt(entries);
  const showEntries = sortedData.slice(startIndex, endIndex);

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
            (page - 1) * entries + rowIndex + 1
          ) : header.name === "dateTime" ? (
            new Intl.DateTimeFormat("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }).format(new Date(row[header.name]))
          ) : header.name === "orderstatus" ? (
            <Box
              bgcolor={
                row[header.name] === "scheduled" ? "#F8F3FF" : "#00A43814"
              }
              color={row[header.name] === "scheduled" ? "#6311CB" : "#00A438"}
              p={"5px 10px"}
              borderRadius={4}
              textTransform={"capitalize"}
              display={"flex"}
              alignItems={"center"}
              gap={"4px"}
              justifyContent={"center"}
              fontSize={"10px"}
              maxWidth={"fit-content"}
              mx={"auto"}
            >
              <Box
                height={"4px"}
                width={"4px"}
                borderRadius={"100%"}
                bgcolor={
                  row[header.name] === "scheduled" ? "#6311CB" : "#00A438"
                }
              />
              {row[header.name]}
            </Box>
          ) : header.name === "employee" ? (
            `${row[header.name].length} Employees`
          ) : header.name === "totalAmount" ? (
            `₹ ${row[header.name]}`
          ) : (
            <Button size="small" sx={{ textTransform: "none" }}>
              <FileDownloadOutlinedIcon /> Download
            </Button>
          )}
        </TableCell>
      ))}
    </TableRow>
  );

  return (
    <Box mt={3}>
      <Box bgcolor={"#FFF"} borderRadius={2} p={2}>
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
        <Box mt={2}>
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
          <Box mt={3} height={"calc(100vh - 350px)"} sx={{ overflowY: "auto" }}>
            <TableComponent
              tableHeader={tableHeader}
              tableData={showEntries}
              renderRow={renderRow}
            />
          </Box>
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

export default BrandVouchersPage;
