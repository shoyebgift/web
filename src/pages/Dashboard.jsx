import { Badge, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Breadcrumb from "../components/BreadCrumb";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import barChart from "../assets/svg/barChart2.svg";
import PlatiniumGift from "../components/protected/Dashboard/PlatinumGiftCard";
import MonthlyExpense from "../components/protected/Dashboard/MonthlyExpense";
import ExpenseOverview from "../components/protected/Dashboard/ExpenseOverview";
import SpendingCard from "../components/protected/Dashboard/SpendingCard";
import EmployeeTransaction from "../components/protected/Dashboard/EmployeeTransaction";
import { dummyData, gridItemsData } from "../utils/dashboard";
import LoadMoneyDialog from "./../components/protected/Dashboard/LoadMoneyDialog";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setIsOpen(true); // Function to open the modal
  const closeModal = () => setIsOpen(false); // Function to close the modal
  return (
    <Box p={2}>
      {" "}
      <Breadcrumb />
      {/* top cards  */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(4, 1fr)"}
        alignItems={"center"}
        gap={3}
        width={"100%"}
        mt={2}
      >
        {/* total employees */}
        {dummyData.map((data, index) => (
          <Box
            key={index}
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
                fontSize="18px"
                display={"flex"}
                alignItems={"center"}
                fontFamily={"Gilroy"}
                fontWeight={"500"}
                gap={1}
              >
                <GroupsOutlinedIcon fontSize="small" /> {data.title}
              </Typography>
              <Typography
                fontFamily={"Gilroy"}
                sx={{ fontWeight: "500" }}
                fontSize="1.5rem"
                my={1}
                color="#333"
              >
                {data.value}
              </Typography>
            </Box>
            <Button
              fullWidth
              sx={{
                backgroundColor: "transparent",
                fontSize: "12px",
                color: "#ffffff",
                fontFamily: "Gilroy",
                fontWeight: "500",
                textTransform: "capitalize",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              startIcon={<GroupsOutlinedIcon fontSize="small" />}
            >
              {data.bottom}
            </Button>
          </Box>
        ))}
        <Box
          bgcolor={"#FFFFFF"}
          borderRadius={2}
          width={"100%"}
          height={"100%"}
          p={2}
          textAlign={"center"}
        >
          <Typography
            fontFamily={"Gilroy"}
            color="'#474279"
            fontSize={"0.875rem"}
            fontWeight={"500"}
            mb={1}
          >
            Connect your current bank A/C
          </Typography>

          <Button
            sx={{
              mt: 2,
              mx: "auto",
              textTransform: "none",
              background: "linear-gradient(to right, #3725EA, #5E0FCD)",
            }}
            onClick={() => navigate("add-bank-account")}
            variant="contained"
            startIcon={<AddCircleOutlineOutlinedIcon fontSize="small" />}
          >
            Add Bank Account
          </Button>
        </Box>
        <Box
          bgcolor={"#FFFFFF"}
          borderRadius={2}
          width={"100%"}
          height={"100%"}
          p={2}
        >
          <Typography
            fontFamily={"Gilroy"}
            color="'#474279"
            fontSize={"0.875rem"}
            fontWeight={"500"}
            mb={1}
          >
            Card Wallet
          </Typography>

          <Typography
            sx={{ color: "#1A202C", fontSize: "1.25rem", fontWeight: 600 }}
            component="span"
          >
            ₹ 0.00
          </Typography>
          <Typography
            sx={{ color: "#90A3BF", fontSize: "0.75rem", ml: 1 }}
            component="span"
          >
            ( INR )
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"} mt={2} gap={1}>
            <Button
              sx={{
                height: "fit-content",
                mx: "auto",
                textTransform: "none",
                background: "linear-gradient(to right, #3725EA, #5E0FCD)",
                fontSize: "0.6rem",
              }}
              variant="contained"
              startIcon={
                <AddCircleOutlineOutlinedIcon sx={{ height: "15px" }} />
              }
              onClick={() => setIsOpen(true)}
            >
              Load Money
            </Button>
            <Button
              sx={{
                height: "fit-content",
                mx: "auto",
                textTransform: "none",
                bgcolor: "#80008024",
                color: "black",
                boxShadow: `0 0 0 0.79px #800080`,
                fontSize: "0.6rem",
              }}
              variant="contained"
            >
              Statement
            </Button>
          </Box>
        </Box>
      </Box>
      {/* Expense card  */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        gap={3}
        mt={3}
      >
        {gridItemsData.map((item, index) => (
          <Box key={index} borderRadius={2} bgcolor={"#FFFFFF"} p={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              mb={1}
              alignItems={"center"}
            >
              <Typography fontSize="0.875rem" fontWeight={500}>
                {item.cardType}
              </Typography>
              <Button
                variant="text"
                sx={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#6311CB",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                }}
                endIcon={<ArrowForwardOutlinedIcon fontSize="small" />}
              >
                {item.manageWallet}
              </Button>
            </Stack>{" "}
            <Divider sx={{ borderStyle: "dashed" }} />
            <Box mt={4} display={"flex"} alignItems={"start"} gap={1}>
              {" "}
              <Box
                bgcolor={item.backgroundColor}
                height={"56px"}
                width={"56px"}
                borderRadius={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  component={"img"}
                  src={barChart}
                  alt="barChart"
                  height={"28px"}
                />
              </Box>
              <Box>
                <Typography color="#A3AED0" fontSize="0.875rem">
                  {item.title}
                </Typography>
                <Typography fontSize="1.5rem" fontWeight={600} color="#2B3674">
                  {item.count}
                </Typography>
              </Box>
            </Box>
            {/* Bottom Section */}
            <Button
              variant="outlined"
              fullWidth
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                mt: 10,
                justifyContent: "space-between",
                backgroundColor: item.buttonBg,
                border: `1px solid ${item.buttonBorder}`,
                color: item.viewTextColor,
              }}
            >
              {!item.hideBadge && (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  color="#FCA100"
                >
                  {/* <WiTime4 /> */}
                  <Typography fontSize="0.75rem" textTransform={"none"}>
                    {item.buttonText}
                  </Typography>
                  <Badge
                    sx={{
                      backgroundColor: item.badgeColor,
                      fontSize: "0.5rem",
                      color: "white",
                      fontWeight: 400,
                      px: 1,
                      borderRadius: "5px",
                      textTransform: "none",
                    }}
                  >
                    {item.badgeText}
                  </Badge>
                </Stack>
              )}
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Typography fontSize="0.875rem" textTransform={"none"}>
                  View
                </Typography>
                <ArrowForwardOutlinedIcon fontSize="small" />
              </Stack>
            </Button>
          </Box>
        ))}

        {/* platinum gift card  */}
        <Box borderRadius={2} bgcolor={"#FFFFFF"} p={2}>
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Box>
              <PlatiniumGift />
            </Box>
            <Box flex={1} pt={2}>
              <Typography
                color="#474279"
                fontWeight={600}
                fontSize="1rem"
                mb={1.5}
              >
                OptiFii Gift Cards
              </Typography>
              <Typography
                color="#A3AED0"
                fontWeight={500}
                fontSize="0.75rem"
                mb={4}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              </Typography>

              <Button
                variant="contained"
                startIcon={<GroupsOutlinedIcon fontSize="small" />}
                sx={{
                  px: 2,
                  bgcolor: "#6311CB",
                  color: "#fff",
                  fontSize: "10px",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#5311A0" },
                }}
              >
                Issue Gift Cards
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      {/* Expense overview  */}
      <Box display={"grid"} gridTemplateColumns={"5fr 2.2fr"} gap={3} mt={2}>
        <ExpenseOverview />

        <Box>
          <MonthlyExpense />
        </Box>
      </Box>
      <Box display={"grid"} gridTemplateColumns={"2.2fr 5fr"} gap={3} mt={2}>
        <Box>
          <SpendingCard />
        </Box>
        <EmployeeTransaction />
      </Box>
      <LoadMoneyDialog isOpen={isOpen} onClose={closeModal} />
    </Box>
  );
};

export default DashboardPage;
