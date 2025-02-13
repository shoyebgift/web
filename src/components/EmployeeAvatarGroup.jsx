import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Tooltip, Typography } from "@mui/material";

const EmployeeAvatarGroup = ({
  employees,
  height,
  width,
  hideTooltip = false,
  fontSize = "12px",
}) => {
  return (
    <Tooltip
      title={employees.length + " Employees"}
      placement="top"
      arrow
      disableHoverListener={hideTooltip}
      slotProps={{
        tooltip: {
          sx: {
            background: "linear-gradient(to right, #6311CB, #8F40FB)",
            color: "white",
            fontFamily: "Gilroy",
            fontSize: "8px",
          },
        },
        arrow: {
          sx: {
            color: "#6311CB",
          },
        },
      }}
    >
      <AvatarGroup
        max={6}
        renderSurplus={(surplus) => (
          <Typography
            sx={{
              fontSize: fontSize,
              fontFamily: "TT Commons",
              fontWeight: "500",
              color: "#7F56D9",
            }}
          >
            +{surplus}
          </Typography>
        )}
        sx={{
          width: "fit-content",
          alignItems: "center",
          mx: "auto",

          "& .css-18k2bs-MuiAvatar-root": {
            width: width ? width : "24px",
            height: height ? height : "24px",
            bgcolor: "#F9F5FF",
            zIndex: employees.length,
          },
        }}
      >
        {employees.map((employee, index) => (
          <Avatar
            key={index}
            alt={employee.name}
            src={employee.profileImage || ""}
            sx={{
              width: width ? width : "24px",
              height: height ? height : "24px",

              fontSize: fontSize,
              fontFamily: "TT Commons",
              fontWeight: "500",
              zIndex: index,
              bgcolor: "#F9F5FF",
              color: "#7F56D9",
            }}
          >
            {!employee.profileImage && employee.name[0]}
          </Avatar>
        ))}
      </AvatarGroup>
    </Tooltip>
  );
};

export default EmployeeAvatarGroup;
