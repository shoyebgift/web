import books from "../assets/svg/wallet/books.svg";
import gift from "../assets/svg/wallet/gifts.svg";
import fuel from "../assets/svg/wallet/fuel.svg";
import food from "../assets/svg/wallet/food.svg";
import gadget from "../assets/svg/wallet/gadgets.svg";
import learning from "../assets/svg/wallet/learning.svg";
import telecom from "../assets/svg/wallet/telecom.svg";
import cardFront from "../assets/img/wallet/cardFront.png";
import arrorw from "../assets/svg/arrow.svg";

import { Box, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const BenefitWalletContainer = () => {
  const wallets = [
    {
      name: "food",
      icon: food,
      button: ["View Transaction"],
      pauseWallet: true,
    },
    {
      name: "fuel",
      icon: fuel,
      button: ["Upload Bills", "View Transaction"],
      pauseWallet: true,
    },

    {
      name: "gift",
      icon: gift,
      pauseWallet: false,
    },
    {
      name: "telecom",
      icon: telecom,
      pauseWallet: false,
    },
    {
      name: "books",
      icon: books,
      pauseWallet: false,
    },
    {
      name: "learning",
      icon: learning,
      pauseWallet: false,
    },
    {
      name: "gadget",
      icon: gadget,
      pauseWallet: false,
    },
  ];

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      className="no-select"
      sx={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        flexWrap: "wrap",
        minWidth: "250px",
        maxWidth: "390px",
        width: "95%",
        mx: "auto",
      }}
    >
      {/* wallet top  */}

      {wallets.slice(0, isSmallScreen ? 4 : wallets.length).map((wallet) => (
        <Box
          key={wallet.name}
          sx={{
            width: "100%",
            mt: 1,
            mr: "12px",
            background:
              "linear-gradient(184.31deg, #FFFFFF 3.5%, #DBD8FF 180.2%)",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "space-between",
            p: 1,
          }}
        >
          <Typography
            component={"div"}
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              background: "linear-gradient(90deg, #DBD8FF 0%, #DFC9FF 100%)",
              borderRadius: "8px",
            }}
          >
            <img
              src={wallet.icon}
              alt={wallet.name}
              style={{ width: "25px" }}
            />
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              ml: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                p: "0.5rem",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontSize: "16px", textTransform: "capitalize" }}
                >
                  {wallet.name}
                </Typography>
                <Typography sx={{ fontSize: "18px" }}>₹ 4,500</Typography>
              </Box>
              {wallet.pauseWallet && (
                <Box>
                  <Typography
                    sx={{
                      fontSize: "10px",
                      textDecoration: "underline",
                      color: "#E81515",
                    }}
                  >
                    Pause Wallet
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "6px",
                      mt: "4px",
                      fontWeight: 800,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      height: "12px",
                      width: "12px",
                      borderRadius: "100%",
                      bgcolor: "#E81515",
                    }}
                  >
                    ||
                  </Typography>
                </Box>
              )}
            </Box>

            {wallet?.button && (
              <>
                <Box sx={{ display: "flex", alignItems: "start", gap: "1rem" }}>
                  {wallet.button.map((button, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "14px",
                        border: 1,
                        color: "#3725EA",
                        width: "fit-content",
                        p: 1,
                        borderRadius: "5px",
                      }}
                    >
                      {button}
                    </Typography>
                  ))}
                </Box>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    color: "#5B5B5B",
                    pt: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    How to Use? - Where I can use the card?
                  </Typography>
                  <Typography
                    sx={{
                      border: 2,
                      height: 10,
                      width: 10,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      fontSize: "10px",
                      fontWeight: 800,
                      p: 1,
                      ml: 1,
                    }}
                  >
                    i
                  </Typography>
                </Box>
              </>
            )}
          </Box>

          <Box
            component={"img"}
            src={arrorw}
            alt="arrow"
            sx={{
              rotate: wallet?.button ? "00deg" : "180deg",
              width: "20px",
              ml: "0.5rem",
            }}
          />
        </Box>
      ))}

      <Box width={"100%"}>
        <Box
          sx={{
            position: "relative",
            width: "80%",
            mt: "2rem",
            py: 2.5,
            background:
              "linear-gradient(184.31deg, #FFFFFF 3.5%, #DBD8FF 180.2%)",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "390px",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              width: "120px",
            }}
          >
            Apply for physical card
          </Typography>

          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#3725EA",
                textDecoration: "underline",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                mr: "4.5rem",
              }}
            >
              <ArrowForwardOutlinedIcon fontSize="small" /> Click here
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "2px",
              right: "-85px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              width: "160px",
              maxWidth: "50%",
              height: "165px",
              "@media (max-width: 1000px) and (min-width: 900px)": {
                width: "120px",
                height: "135px",
                right: "-70px",
              },
              "@media (max-width: 900px)": {
                width: "120px",
                height: "125px",
                right: "-65px",
              },
            }}
          >
            <img
              src={cardFront}
              alt="cardFront.png"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                zIndex: 5,
              }}
            />
          </Box>

          <Typography
            component={"div"}
            sx={{
              zIndex: 3,
              top: "12px",
              right: "-58px",
              bgcolor: "#C7AEDD",
              borderRadius: "8px",
              width: "105px",
              height: "165px",
              rotate: "-22deg",
              position: "absolute",
              "@media (max-width: 1000px) and (min-width: 900px)": {
                width: "80px",
                height: "125px",
                top: "15px",
                right: "-48px",
              },
              "@media (max-width: 900px)": {
                top: "7px",
                width: "80px",
                height: "125px",
                right: "-43px",
              },
            }}
          />
          <Typography
            component={"div"}
            sx={{
              zIndex: 2,
              top: "25px",
              right: "-55px",
              bgcolor: "#DECEED",
              borderRadius: "8px",
              width: "105px",
              height: "165px",
              rotate: "-22deg",
              position: "absolute",
              "@media (max-width: 1000px) and (min-width: 900px)": {
                width: "82px",
                height: "128px",
                top: "22px",
                right: "-46px",
              },
              "@media (max-width: 900px)": {
                top: "12px",
                width: "80px",
                height: "125px",
                right: "-40px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitWalletContainer;
