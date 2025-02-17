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
        renderSurplus={(surplus) => <>+{surplus}</>}
        sx={{
          width: "fit-content",
          alignItems: "center",
          mx: "auto",

          "& .MuiAvatar-root:first-of-type": {
            zIndex: employees.length,
          },
          "&  .MuiAvatar-root": {
            width: width ? width : "24px",
            height: height ? height : "24px",
            bgcolor: "#F9F5FF",
            color: "#7F56D9",
            fontSize: fontSize,
            fontFamily: "TT Commons",
            fontWeight: "500",
          },
        }}
      >
        {employees.map((employee, index) => (
          <Avatar
            key={index}
            alt={employee.name}
            src={employee.profileImage || ""}
            sx={{
              zIndex: index,
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
