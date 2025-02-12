import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Typography } from "@mui/material";

const EmployeeAvatarGroup = ({ employees }) => {
  return (
    <AvatarGroup
      max={6}
      renderSurplus={(surplus) => (
        <Typography
          sx={{
            fontSize: "12px",
            fontFamily: "Inter",
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
          width: "24px",
          height: "24px",
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
            width: "24px",
            height: "24px",

            fontSize: "12px",
            fontFamily: "Inter",
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
  );
};

export default EmployeeAvatarGroup;
