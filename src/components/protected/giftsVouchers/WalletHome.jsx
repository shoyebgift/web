import {
  Box,
  Button,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import WalletApprovalDialog from "./WalletApprovalDialog";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
const WalletHome = () => {
  const navigate = useNavigate();
  const { user } = useParams();
  const { pathname } = useLocation();

  const { cardWallets } = useSelector((state) => state.wallet);
  const [showPolicy, setShowPolicy] = useState("");

  const handleCreateWallet = () => {
    if (pathname.split("/").includes("cash")) {
      navigate(`/${user}/gifts-&-rewards/dashboard/cash/add-employee`);
    } else {
      navigate(`/${user}/gifts-&-rewards/dashboard/card/where-to-share`);
    }
  };

  useEffect(() => {
    if (!cardWallets) return; // Wait until cardWallets is loaded

    const pathSegments = pathname.split("/");

    if (pathSegments.includes("card") && cardWallets.length === 0) {
      navigate(`/${user}/gifts-&-rewards/dashboard`);
    }
  }, [cardWallets, pathname]);

  const handleClick = (walletId) => {
    if (walletId) {
      navigate(
        `/${user}/gifts-&-rewards/dashboard/card/${walletId}/add-employee`
      );
    } else {
      navigate(`/${user}/gifts-&-rewards/dashboard/cash/add-employee`);
    }
  };

  return (
    <Box
      mt={2}
      bgcolor="#FFFFFF"
      p={2}
      borderRadius={2}
      minHeight={"calc(100vh - 290px)"}
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={"column"}
    >
      <Box>
        <Box display="flex" justifyContent="space-between" px={2}>
          <Typography
            fontSize={"16px"}
            fontFamily={"Gilroy"}
            fontWeight={500}
            color={"#000000"}
          >
            Select card type
          </Typography>
          <Box display={"flex"} gap={2}>
            <Button
              variant="outlined"
              size="small"
              sx={{
                fontFamily: "Gilroy",
                fontWeight: 500,
                borderColor: "#D2D2D2",
                color: "black",
                textTransform: "none",
                "&:hover": {
                  background: "none",
                },
              }}
              startIcon={<UnarchiveOutlinedIcon />}
            >
              View archived
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{
                fontFamily: "Gilroy",
                fontWeight: 500,
                borderColor: "#D2D2D2",
                color: "black",
                textTransform: "none",
                "&:hover": {
                  background: "none",
                },
              }}
              startIcon={<FileUploadOutlinedIcon />}
              endIcon={<ExpandMoreOutlinedIcon />}
            >
              Export
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "Gilroy",
                fontWeight: 500,
                bgcolor: "#6211CB",
                color: "white",
                borderRadius: "6px",
                textTransform: "none",
                "&:hover": {
                  background: "linear-gradient(to right, #6311CB, #8F40FB)",
                  color: "white",
                },
              }}
              startIcon={<AddIcon />}
              onClick={handleCreateWallet}
            >
              Create wallet
            </Button>
          </Box>
        </Box>
        <Box mt={6} mx={3} display={"flex"} gap={2} flexWrap={"wrap"}>
          {pathname.split("/").includes("cash") ? (
            <Box
              width={"332px"}
              height={"195px"}
              borderRadius={"15px"}
              p={"16px"}
              textAlign={"center"}
              sx={{
                background:
                  "linear-gradient(236.43deg, #851472 -4.66%, #3E0982 69.94%)",
              }}
            >
              <Typography
                mt={"20%"}
                fontFamily={"Gilroy"}
                fontSize={"22px"}
                fontWeight={"700"}
                color={"#FFFFFF"}
              >
                General Wallet
              </Typography>
              <Box textAlign={"end"} mt={3}>
                <Button
                  onClick={() => handleClick()}
                  startIcon={<AddIcon />}
                  variant="contained"
                  sx={{
                    bgcolor: "#6211CB",
                    fontFamily: "Albert Sans",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "white",
                    borderRadius: "6px",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(to right, #6311CB, #8F40FB)",
                      color: "white",
                    },
                  }}
                >
                  Load Amount
                </Button>
              </Box>
            </Box>
          ) : (
            cardWallets.map((wallet) => (
              <Box
                key={wallet.id}
                width={"332px"}
                height={"195px"}
                borderRadius={"15px"}
                p={"16px"}
                textAlign={"center"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                sx={{
                  background:
                    "linear-gradient(236.43deg, #851472 -4.66%, #3E0982 69.94%)",
                }}
              >
                <Typography
                  mt={5}
                  fontFamily={"Amiri"}
                  fontSize={"20px"}
                  fontWeight={"700"}
                  color={"#FFFFFF"}
                >
                  {wallet.name}
                </Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  gap={2}
                  mt={3}
                  mb={2}
                >
                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Albert Sans",
                      fontWeight: 600,
                      fontSize: "16px",
                      bgcolor: "#6211CB",
                      color: "white",
                      borderRadius: "6px",
                      textTransform: "none",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #6311CB, #8F40FB)",
                        color: "white",
                      },
                    }}
                    onClick={() => setShowPolicy(wallet.id)}
                  >
                    View Policy
                  </Button>
                  <Button
                    startIcon={<AddIcon />}
                    variant="contained"
                    onClick={() => handleClick(wallet?.id)}
                    sx={{
                      fontFamily: "Albert Sans",
                      fontWeight: 600,
                      fontSize: "16px",
                      bgcolor: "#6211CB",
                      color: "white",
                      borderRadius: "6px",
                      textTransform: "none",
                      "&:hover": {
                        background:
                          "linear-gradient(to right, #6311CB, #8F40FB)",
                        color: "white",
                      },
                    }}
                  >
                    Load Amount
                  </Button>
                </Box>

                {/* View Policy */}
                <WalletApprovalDialog
                  open={showPolicy===wallet.id}
                  onClose={() => setShowPolicy(false)}
                  wallet={wallet}
                />
              </Box>
            ))
          )}
        </Box>
      </Box>
      <Tooltip
        title="GPR Home"
        placement="top"
        arrow
        slotProps={{
          tooltip: {
            sx: {
              background: "linear-gradient(to right, #6311CB, #8F40FB)",
              color: "white",
              fontFamily: "Gilroy",
              fontSize: "16px",
            },
          },
          arrow: {
            sx: {
              color: "#6311CB",
            },
          },
        }}
      >
        <IconButton
          onClick={() => navigate(`/${user}/gifts-&-rewards/dashboard`)}
          sx={{
            color: "#6311CB",
            width: "fit-content",
            height: "fit-content",
            mx: "auto",
          }}
        >
          <HomeOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default WalletHome;
