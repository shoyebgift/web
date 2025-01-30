import React from "react";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Box, Button, Typography } from "@mui/material";

const SuccessExcerpt = ({ handleCheckStatus }) => {
  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgcolor={"rgba(0,0,0,0.5)"}
      zIndex={40}
      height={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"300px"}
        height={"240px"}
        borderRadius={"10px"}
        bgcolor={"white"}
        p={2}
      >
        <Typography
          bgcolor={"#ECFDF3"}
          height={"36px"}
          width={"36px"}
          borderRadius={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            bgcolor={"#D1FADF"}
            height={"28px"}
            width={"28px"}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <TaskAltOutlinedIcon sx={{ fontSize: "20px", color: "#039855" }} />
          </Typography>
        </Typography>

        <Typography
          fontSize={"16px"}
          fontWeight={500}
          mt={1}
          mb={2}
          color={"#101828"}
        >
          Thank You for enrolling
        </Typography>
        <Typography
          fontSize={"12px"}
          fontWeight={500}
          color={"#667085"}
          whiteSpace={"pre-line"}
        >
          {
            " We are one step closer to give you the best product for you and your employee.\nIn the meantime check out our resources curated just for you."
          }
        </Typography>

        <Box mx={"auto"} width={"70%"} mt={2}>
          {" "}
          <Button
            onClick={handleCheckStatus}
            variant="contained"
            fullWidth
            sx={{ bgcolor: "#6311CB", textTransform: "none", color: "white" }}
          >
            Check my status
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SuccessExcerpt;
