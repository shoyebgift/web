import { Box } from "@mui/material";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const SuccessIcon = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"fit-content"}
    >
      {/* Outer Circle */}
      <Box
        bgcolor={"rgba(21, 159, 43, 0.1)"}
        borderRadius={"50%"}
        height={"48px"}
        width={"48px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {/* Inner Circle */}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"32px"}
          width={"32px"}
          borderRadius={"50%"}
          bgcolor={"rgba(21, 159, 43, 0.2)"}
        >
          <TaskAltRoundedIcon
            sx={{
              height: "24px",
              width: "24px",
              color: "#159F2B",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessIcon;
