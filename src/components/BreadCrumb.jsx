import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Breadcrumb = () => {
  const location = useLocation();
  const { user } = useParams();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment && segment !== user.toString());

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {pathSegments.map((segment, index) => {
        let formattedSegment = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        const to = "/" + pathSegments.slice(0, index + 1).join("/");

        return (
          <React.Fragment key={segment}>
            {index > 0 && <Typography fontSize={"14px"}>/</Typography>}
            {index === pathSegments.length - 1 ? (
              <Typography fontSize={"14px"}>{formattedSegment}</Typography>
            ) : (
              <Typography fontSize={"14px"}>
                Optifii {formattedSegment}
              </Typography>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Breadcrumb;
