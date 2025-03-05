import React from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Checkbox,
  Skeleton,
} from "@mui/material";
const TABLE_PAGINATION = { page: 1, size: 20 };

const NormalTable = ({
  data,
  isLoading,
  tableHeadRow,
  emptyMessage,
  centered,
  showRadioButton,
  selectedRadio,
  setSelectedRadio,
}) => {
  // Toggle checkbox selection for individual rows
  const handleCheckboxChange = (value) => {
    setSelectedRadio((prev) =>
      prev.includes(value)
        ? prev.filter((id) => id !== value)
        : [...prev, value]
    );
  };

  // Handle "Check All" checkbox
  const handleCheckAllChange = () => {
    if (selectedRadio.length === data.length) {
      setSelectedRadio([]); // Deselect all if already selected
    } else {
      const allIds = data.map((item) => item.id);
      setSelectedRadio(allIds); // Select all
    }
  };

  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
      {data?.length === 0 ? (
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          w={"100%"}
          h={"40vh"}
        >
          {emptyMessage}{" "}
        </Box>
      ) : (
        <Table size="small">
          <TableHead sx={{ backgroundColor: "#EDE7F6" }}>
            <TableRow>
              {showRadioButton && (
                <TableCell align="center">
                  <Checkbox
                    checked={selectedRadio?.length === data?.length}
                    onChange={handleCheckAllChange}
                    color="secondary"
                  />
                </TableCell>
              )}
              {tableHeadRow.map((heading, index) => (
                <TableCell
                  key={index}
                  align={
                    centered || index === tableHeadRow.length - 1
                      ? "center"
                      : "left"
                  }
                >
                  {isLoading ? <Skeleton height={20} /> : heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? Array.from({ length: TABLE_PAGINATION?.size }).map(
                  (_, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        backgroundColor: index % 2 === 0 ? "#fff" : "#F3E5F5",
                      }}
                    >
                      {tableHeadRow.map((_, i) => (
                        <TableCell key={i}>
                          <Skeleton height={20} />
                        </TableCell>
                      ))}
                    </TableRow>
                  )
                )
              : data?.map((item, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      transition: "0.2s all",
                      backgroundColor: index % 2 === 0 ? "#fff" : "#F3E5F5",
                    }}
                  >
                    {showRadioButton && (
                      <TableCell align="center">
                        <Checkbox
                          color="secondary"
                          checked={selectedRadio?.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                        />
                      </TableCell>
                    )}
                    {tableHeadRow.map((heading, i) => (
                      <TableCell
                        key={i}
                        align={
                          centered || i === tableHeadRow.length - 1
                            ? "center"
                            : "left"
                        }
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          color: "gray.700",
                          fontWeight: 500,
                        }}
                      >
                        {item[heading]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default NormalTable;
