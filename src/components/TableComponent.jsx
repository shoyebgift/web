import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TableComponent = ({
  tableHeader,
  tableData,
  extraHeader = [],
  renderCell, // Function to customize cell content
  cellStyles = {}, // Object for custom styles
}) => {
  return (
    <Box
      bgcolor={"#FFF"}
      borderRadius={2}
      p={2}
      mt={3}
      color={"#667085"}
      sx={{
        height: "450px",
        overflow: "auto",
        "& .MuiTable-root": {
          "& .MuiTableBody-root": {
            "& .MuiTableRow-root": {
              "& .MuiTableCell-root": {
                borderBottom: "1px solid #E6E6E6",
                textAlign: "center",
                color: "#667085",
              },
            },
          },
        },
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {/* Render main headers */}
            {tableHeader.map((header) => (
              <TableCell
                sx={{ textAlign: "center", fontWeight: "bold", color: "#333" }}
                key={header}
              >
                {header}
              </TableCell>
            ))}

            {/* Render extra headers */}
            {extraHeader.map((header) => (
              <TableCell
                sx={{ textAlign: "center", fontWeight: "bold", color: "#333" }}
                key={header}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((item, colIndex) => (
                <TableCell
                  key={colIndex}
                  sx={{
                    textAlign: "center",
                    bgcolor:
                      colIndex === 3 && item === "completed"
                        ? "#E6F4EA"
                        : "transparent",
                    color:
                      colIndex === 3 && item === "completed"
                        ? "green"
                        : "#667085",
                    ...cellStyles[colIndex],
                  }}
                >
                  {renderCell ? renderCell(item, rowIndex, colIndex) : item}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TableComponent;
