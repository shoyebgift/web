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

import { termsAndConditions, privacyPolicy } from "../utils/TermsAndConditions";
import { getAnnotation } from "../utils/index";

import { NavLink } from "react-router-dom";

const TermsAndPolicyPages = () => {
  const data =
    location.pathname.split("/")[1] === "privacy-policy"
      ? privacyPolicy
      : termsAndConditions;

  const renderdata = (description) => {
    return description.map((desc, index) => {
      let text = desc.text;

      // Replace bold words by wrapping them with <b> tags
      if (desc.boldtext) {
        desc.boldtext.forEach((boldWord) => {
          const boldRegex = new RegExp(`(${boldWord})`, "g");
          text = text.replace(
            boldRegex,
            `<b style="font-weight: bold;">$1</b>`
          );
        });
      }

      // Replace links by wrapping the link name with NavLink
      if (desc.links) {
        desc.links.forEach((link) => {
          const linkRegex =
            desc.links.length > 1
              ? new RegExp(`(${link.name})`)
              : new RegExp(`(${link.name})`, "g");
          text = text.replace(
            linkRegex,
            `<NavLink to="${link.url}" style="color: #6311CB; text-decoration: underline;">$1</NavLink>`
          );
        });
      }

      // Render text with proper formatting
      return (
        <Typography
          key={index}
          component="div"
          fontSize={{ xs: ".8rem", md: "1rem" }}
          mb={2}
          whiteSpace="pre-line"
        >
          {/* Split by a pattern that targets <NavLink> and <b> tags */}
          {text.split(/(<NavLink.*?<\/NavLink>|<b.*?<\/b>)/g).map((part, i) => {
            // If it's a <NavLink>, render it as a NavLink component
            if (part.includes("<NavLink")) {
              const linkName = part.match(/>(.*?)<\/NavLink>/)[1];
              const linkUrl = part.match(/to="(.*?)"/)[1];
              return (
                <NavLink
                  key={i}
                  to={linkUrl}
                  style={{ color: "#6311CB", textDecoration: "underline" }}
                >
                  {linkName}
                </NavLink>
              );
            }

            // If it's a <b> tag, render it as bold text
            if (part.includes("<b")) {
              const boldText = part.match(/>(.*?)<\/b>/)[1];
              return <b key={i}>{boldText}</b>;
            }

            // Regular text (not a link or bold word)
            return part;
          })}
        </Typography>
      );
    });
  };

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
              {item?.description && (
                <Typography sx={{ fontSize: { xs: ".8rem", md: "1rem" } }}>
                  {item.description}
                </Typography>
              )}
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
        <Box
          whiteSpace={"pre-line"}
          fontSize={{ xs: ".8rem", md: "1rem" }}
          mb={2}
          pl={2}
        >
          {item.desc && renderdata(item.desc)}
        </Box>

        {/* needs to be removed */}
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

      {data?.description && renderdata(data.description)}

      {data?.data && dataExcerpt(data.data)}
    </Box>
  );
};

export default TermsAndPolicyPages;
