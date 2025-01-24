import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  termsAndConditions,
  privacyPolicy,
} from "../../utils/TermsAndConditions";
import { getAnnotation } from "../../utils/index";

const TermsAndPolicyPages = () => {
  const data =
    location.pathname.split("/")[1] === "privacy-policy"
      ? privacyPolicy
      : termsAndConditions;

  const dataExcerpt = (data) => {
    const renderList = (listData, annotation) => {
      return (
        <List
          dense
          sx={{
            listStyleType: annotation === "bullet" ? "disc" : "none",
            listStylePosition: "outside",
            paddingLeft: annotation === "bullet" ? 3 : 2,
            "& .MuiListItem-root": {
              display: "list-item",
              padding: 0,
              marginBottom: "4px",
            },
          }}
        >
          {listData.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: { fontSize: { xs: ".8rem", md: "1rem" } },
                    fontWeight: item.nameBold ? 800 : 400,
                  },
                }}
                primary={`${getAnnotation(index, annotation)}${item.name}`}
              />
              {item?.description && <Typography>{item.description}</Typography>}
              {item.data && renderList(item.data, item.listAnnotation)}
            </ListItem>
          ))}
        </List>
      );
    };

    const renderTable = (tableData) => {
      return (
        <TableContainer sx={{ mt: 3 }}>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
                {tableData.headers.map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: ".9rem", md: "1.1rem" },
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      sx={{ fontSize: { xs: ".8rem", md: "1rem" } }}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
    };

    return data.map((item, index) => (
      <Box key={index} sx={{ mb: 1 }}>
        <Typography
          key={index}
          component={"h2"}
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            fontWeight: "bold",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          whiteSpace={"pre-line"}
          fontSize={{ xs: ".8rem", md: "1rem" }}
          mb={2}
          pl={2}
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        {item.childs &&
          item.childs.map((child, index) => {
            return (
              <React.Fragment key={index}>
                {child.type === "table" ? (
                  renderTable(child.data)
                ) : child.type === "list" ? (
                  <>
                    <Typography
                      pl={1}
                      fontSize={{ xs: ".8rem", md: "1rem" }}
                      fontWeight={800}
                    >
                      {child.name}
                    </Typography>

                    {renderList(child.data, child.listAnnotation)}
                  </>
                ) : (
                  <>
                    <Typography fontWeight={child.nameBold ? 800 : 400}>
                      {child.name}
                    </Typography>
                    <Typography
                      whiteSpace={"pre-line"}
                      mb={2}
                      pl={child.name ? 2 : 0}
                      fontSize={{ xs: ".8rem", md: "1rem" }}
                      dangerouslySetInnerHTML={{ __html: child.data }}
                    />
                  </>
                )}
              </React.Fragment>
            );
          })}
      </Box>
    ));
  };

  return (
    <Box
      backgroundColor="white"
      p={4}
      px={8}
      position={"relative"}
      zIndex={5}
      my={4}
      height={"70%"}
      borderRadius={2.5}
      width="90%"
      mx={"auto"}
      sx={{
        overflowY: "auto",
      }}
    >
      {/* heading */}
      <Typography
        fontWeight="bold"
        sx={{
          fontSize: { xs: "1.2rem", md: "1.7rem" },
          background: "linear-gradient(to right, #6311CB, #8F40FB)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          mb: 2,
        }}
      >
        {data.header}
      </Typography>

      {/* description */}
      <Typography
        whiteSpace={"pre-line"}
        mb={2}
        fontSize={{ xs: ".8rem", md: "1rem" }}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
      {data?.data && dataExcerpt(data.data)}
    </Box>
  );
};

export default TermsAndPolicyPages;
