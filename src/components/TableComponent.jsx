import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TableComponent = ({ tableHeader, tableData, renderRow }) => {
  return (
    <TableContainer sx={{ mt: 3, height: "calc(100vh - 350px)" }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {tableHeader.map((header) => (
              <TableCell
                key={header.name}
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                  color: "#667085",
                  padding: 0.2,
                }}
              >
                {header.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.length > 0 &&
            tableData.map((row, rowIndex) => renderRow(row, rowIndex))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
