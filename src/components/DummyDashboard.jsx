import { Box, Typography } from "@mui/material";

import barChart from "../assets/svg/barChart2.svg";
import logo from "../assets/svg/Optifii.svg";
import SearchIcon from "@mui/icons-material/Search";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Analytics } from "@mui/icons-material";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import AdsClickIcon from "@mui/icons-material/AdsClick";

const DummyDashboard = () => {
  const dummyData = [
    {
      title: "Total Employees",
      value: "200",
      bottom: "Invite/Add Employees",
      bgcolor: "#6311CB",
      colors: "#3725EA",
    },
    {
      title: "Wallet Requests",
      value: "100",
      bottom: "View Requests",
      bgcolor: "#C33FAD",
      colors: "#C33FAD",
    },
  ];

  const dummyButtons = [
    {
      title: "menu",
      data: [
        {
          title: "Manage Human Resources",
          icon: <SignalCellularAltOutlinedIcon sx={{ fontSize: "16px" }} />,
        },
        {
          title: "OptiFii Expense",
          icon: <RequestPageOutlinedIcon sx={{ fontSize: "16px" }} />,
        },
        {
          title: "OptiFii Tax Benefit",
          icon: <AdsClickIcon sx={{ fontSize: "16px" }} />,
        },
        {
          title: "OptiFii Gifs & Vouchers",
          icon: <AdsClickIcon sx={{ fontSize: "16px" }} />,
        },
      ],
    },
    { title: "Analytics" },
  ];

  return (
    <Box
    className='no-select'
      sx={{
        width: "100%",
        minWidth: "min-content",
        maxWidth: "550px",
        height: "min-content",
        bgcolor: "#F3F3F9",
        zIndex: 5,
        ml: "auto",
        mt: "1rem",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "#ffffff",
          width: "100%",
          alignItems: "center",
          py: 1,
        }}
      >
        <Box component={"img"} p={1} width={"70px"} src={logo} alt="logo" />
        <Box
          component={"p"}
          bgcolor={"#6311CB29"}
          height={"28px"}
          width={"28px"}
          ml={"4rem"}
          borderRadius={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ rotate: "-90deg", fontWeight: "800", color: "#6311CB" }}
        >
          {" "}
          ^
        </Box>

        <Typography
          ml={"2rem"}
          border="1px solid #E4E4E7"
          borderRight={"none"}
          display={"flex"}
          alignItems={"center"}
          borderRadius={"4px 0 0 4px"}
          p={1}
          color="#A1A1AA"
          width={"100%"}
          fontSize="12px"
        >
          <SearchIcon fontSize="small" />
          <span>Type to search</span>
        </Typography>
      </Box>

      <Box display={"grid"} gridTemplateColumns={"200px 1fr"}>
        <Box
          bgcolor={"#1A0436"}
          height={"100%"}
          width={"100%"}
          color={"#ffffff"}
        >
          <Box mt={8} display="flex" alignItems="center">
            {/* Blue line */}
            <Box
              component="div"
              height="100%"
              width="4px"
              bgcolor="blue"
              sx={{ minHeight: "40px" }}
              borderRadius={1}
            />
            <Box
              fontSize={"14px"}
              display="flex"
              width={"100%"}
              alignItems="center"
              borderRadius={"4px 0 0 4px"}
              p={1}
              bgcolor="#382450"
              ml={1}
              sx={{ cursor: "pointer" }}
            >
              <HomeOutlinedIcon sx={{ color: "white" }} />
              <Box ml={1} color="white">
                Dashboard
              </Box>
            </Box>
          </Box>

          {dummyButtons.map((data, index) => (
            <Box key={index}>
              <Typography
                ml={2}
                my={1}
                fontSize={"12px"}
                textTransform={"uppercase"}
              >
                {data.title}
              </Typography>

              <Box
                display="flex"
                sx={{
                  filter: "blur(2px)",
                }}
                flexDirection="column"
                gap={2}
                pr={1}
              >
                {data?.data &&
                  data.data.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        "&:hover .blue-line": {
                          width: "4px",
                        },
                      }}
                    >
                      {/* Blue line */}
                      <Box
                        className="blue-line"
                        height="100%"
                        width="0"
                        bgcolor="blue"
                        sx={{
                          minHeight: "32px",
                          transition: "width 0.3s ease",
                        }}
                        borderRadius={1}
                      />
                      <Box
                        fontSize={"10px"}
                        display="flex"
                        width={"100%"}
                        alignItems="center"
                        borderRadius={"4px 0 0 4px"}
                        p={1}
                        bgcolor="#382450"
                        ml={1}
                      >
                        {item.icon}
                        <Box ml={1} color="white">
                          {item.title}
                        </Box>
                      </Box>
                    </Box>
                  ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Left Side */}
        <Box p={1} maxWidth={"400px"} height={"100%"} position={"relative"}>
          <Typography fontSize="12px" fontWeight="400" my={1.2}>
            <b>Hey Jenny -</b> here's what’s happening today
          </Typography>

          <Box overflow={"hidden"} position={"absolute"} pl={2}>
            {/* total employees & wallet requests */}
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={3}
              width={"min-content"}
            >
              {/* total employees */}
              {dummyData.map((data, index) => (
                <Box
                  key={index}
                  width={"200px"}
                  borderRadius={2}
                  color={"#ffffff"}
                  bgcolor={data.bgcolor}
                >
                  <Box
                    color={data.colors}
                    backgroundColor={"#FFFFFF"}
                    borderRadius={2}
                    p={1}
                  >
                    <Typography
                      fontSize="12px"
                      display={"flex"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <GroupsOutlinedIcon fontSize="small" /> {data.title}
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "550" }}
                      fontSize="14px"
                      my={1}
                      color="#333"
                    >
                      {data.value}
                    </Typography>
                  </Box>
                  <Typography textAlign={"center"} p={1} fontSize={"12px"}>
                    {data.bottom}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Expense Card  */}
            <Box display={"flex"} flexDirection={"row"} gap={1} mt={3}>
              {["Expense Card", "BenefitCard"].map((Card, idx) => (
                <Box
                  key={idx}
                  width={"300px"}
                  height={"min-content"}
                  borderRadius={2}
                  bgcolor={"#FFFFFF"}
                  p={1}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    p={"4px"}
                    borderBottom={"1px dashed #E0E0E0"}
                  >
                    <Typography fontSize={"12px"}>{Card}</Typography>
                    <Typography
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={"12px"}
                      color="#6311CB"
                    >
                      Manage expense wallets{" "}
                      <ArrowForwardOutlinedIcon fontSize="small" />
                    </Typography>
                  </Box>

                  <Box mt={2} display={"flex"} alignItems={"start"} gap={1}>
                    {" "}
                    <Box
                      sx={{
                        width: "38px",
                        height: "38px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#218F001A",
                        borderRadius: "100%",
                      }}
                    >
                      <img
                        src={barChart}
                        alt="barChart"
                        style={{ width: "20px" }}
                      />
                    </Box>
                    <Typography
                      component={"div"}
                      fontSize={"12px"}
                      color="#A3AED0"
                    >
                      <span>Active expense wallets</span>
                      <p style={{ fontSize: "14px", color: "black" }}>50</p>
                    </Typography>
                  </Box>

                  <Box
                    border={" 0.5px solid #FCA100 "}
                    backgroundColor={"#FCA1001A"}
                    borderRadius={2}
                    p={"5px"}
                    mx={2}
                    my={2}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography
                      fontSize={"12px"}
                      component={"div"}
                      display={"flex"}
                      alignItems={"center"}
                      gap={"5px"}
                      color="#FCA100"
                    >
                      {" "}
                      <AccessTimeOutlinedIcon
                        sx={{
                          fontSize: "14px",
                        }}
                      />{" "}
                      <span>Pending requests</span>
                      <p
                        style={{
                          fontSize: "5px",
                          color: "white",
                          backgroundColor: "#3725EA",
                          padding: "1px",
                          borderRadius: "1px",
                        }}
                      >
                        20 New
                      </p>
                    </Typography>

                    <Typography
                      color="#6311CB"
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={"12px"}
                    >
                      View{" "}
                      <ArrowForwardOutlinedIcon sx={{ fontSize: "small" }} />
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DummyDashboard;
