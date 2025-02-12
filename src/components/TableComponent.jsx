import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const TableComponent = ({ tableHeader, tableData, renderRow }) => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {tableHeader.map((header) => (
              <TableCell
                key={header.name}
                sx={{
                  backgroundColor: "#F9FAFB",
                  fontFamily: "TT Commons",
                  fontSize: "17px",
                  fontWeight: 400,
                  textAlign: "center",
                  color: "#667085",
                  padding: 1,
                }}
              >
                {header.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData.length > 0 ? (
            tableData.map((row, rowIndex) => renderRow(row, rowIndex))
          ) : (
            <TableRow>
              <TableCell
                colSpan={tableHeader.length}
                sx={{ borderBottom: "none" }}
              >
                <Typography
                  fontSize={"14px"}
                  fontStyle={"italic"}
                  color={"#4E4E4E"}
                >
                  No data found
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
