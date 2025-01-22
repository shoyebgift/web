import "./styles/homePage.css";

import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import barChart from "../assets/svg/barChart.svg";
import boltOutlined from "../assets/svg/boltOutlined.svg";
import mail from "../assets/svg/mail.svg";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import appprototype from "../assets/img/appPrototype.png";
import iphonemockup from "../assets/img/iPhonemockup.png";

import { homePage } from "../utils/index";
import FeatureTitleExcerpt from "./../components/FeatureTitleExcerpt";
import { useState } from "react";
import DummyDashboard from "./../components/DummyDashboard";

const HomePage = () => {
  const { header, description, features } = homePage;
  const featureIcon = {
    MailOutlineIcon: mail,
    boltOutlined,
    barChart,
  };
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const commonEmailDomains =
    /@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|aol\.com|live\.com|msn\.com)$/i;

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      if (commonEmailDomains.test(email)) {
        setError("Please enter a company email address.");
        setLoading(false);
      } else {
        const companyEmailPattern = /@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

        if (!companyEmailPattern.test(email)) {
          setError("Please enter a valid email address.");
        } else {
          setError("");
          setEmail("");
        }
        setLoading(false);
      }
    }, 3000);
  };

  return (
    <Box className="unprotected-homePage">
      {/* top part */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          width: "100%",
        }}
      >
        {/* left of the top part */}
        <Box component={"div"} sx={{ width: "410px", mx: "auto" }}>
          <Typography
            component={"h1"}
            variant={"h2"}
            sx={{
              fontSize: { lg: "55px", md: "40px", xs: "32px" },
              lineHeight: { lg: "55px", md: "42px", xs: "32px" },
              fontWeight: "800",
              mt: "1rem",
            }}
          >
            Business Expenses made easy with OptiFii
          </Typography>

          <Typography
            component={"p"}
            sx={{
              fontWeight: "800",
              mt: "1rem",
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              color: "#52525B",
            }}
          >
            OptiFii provide the solution you need for your organisation for
            payout, reward, and incentive experiences. 
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            label="Enter email address"
            type="email"
            name="getstarted"
            id="getstarted"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            error={!!error}
            helperText={error}
            sx={{
              mt: "1rem",
              "& .MuiOutlinedInput-root": {
                borderRadius: "10px",
              },
            }}
            slotProps={{
              htmlInput: {
                style: { fontSize: "14px" },
              },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      sx={{
                        borderRadius: "8px",
                        color: "white",
                        px: 4,
                        textTransform: "none",
                        backgroundColor: "black",
                        "&:hover": {
                          backgroundColor: "#333",
                        },
                        "&:disabled": {
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          color: "rgba(255, 255, 255, 0.5)",
                        },
                      }}
                      onClick={(e) => handleSubmit(e)}
                      loading={loading}
                      loadingPosition="center"
                    >
                      Get Started
                    </Button>
                  </InputAdornment>
                ),
              },
            }}
          />
        </Box>

        {/* right of the top part */}
        <Box
          component={"div"}
          sx={{
            mt: { xs: "2rem", md: "0" },
            ml: "auto",
            overflow: "hidden",
            position: "relative",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <DummyDashboard />
        </Box>
      </Box>

      {/* middle part :features*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: { md: "1rem", xs: "0" },
          mt: "5rem",
          width: "100%",
          alignItems: "center",
        }}
      >
        <FeatureTitleExcerpt header={header} description={description} />

        <Box
          sx={{ m: "1rem", p: "1rem", textAlign: "end", position: "relative" }}
        >
          <img
            src={appprototype}
            alt="appPrototype.png"
            className="app-prototype-img"
          />
          <img
            src={iphonemockup}
            alt="iphonemockup.png"
            className="iphonemockup-img"
          />
        </Box>
      </Box>

      {/* bottom part */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          my: "4rem",
          mx: "auto",
          pr: "1rem",
          width: "100%",
          maxWidth: "1250px",
        }}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              mt: "1rem",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            <Box
              sx={{
                width: "48px",
                height: "48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F9F5FF",
                borderRadius: "100%",
              }}
            >
              <Typography
                sx={{
                  bgcolor: "#EBE3FF",
                  height: "32px",
                  width: "32px",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={featureIcon[feature.icon]}
                  alt={feature.icon}
                  style={{ width: "24px", height: "24px" }}
                />
              </Typography>
            </Box>
            <Typography
              component={"h2"}
              sx={{
                fontSize: { lg: "20px", md: "18px", xs: "16px" },
                fontWeight: "800",
                mt: "1rem",
                textAlign: "center",
              }}
            >
              {feature.title}
            </Typography>
            <Typography
              component={"p"}
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontWeight: "400",
                color: "#52525B",
                textAlign: "center",
                m: "1rem",
              }}
            >
              {feature.description}
            </Typography>

            <Typography
              component={NavLink}
              to={feature.link}
              sx={{
                mt: "1rem",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#7F56D9",
                "&:hover": {
                  color: "#7F56D9",
                  textDecoration: "underline",
                },
              }}
            >
              Learn More <ArrowForwardOutlinedIcon fontSize="small" />
            </Typography>
            <Divider
              sx={{
                display:
                  index === features.length - 1
                    ? "none"
                    : { md: "none", xs: "block" },
                bgcolor: "#EBE3FF",
                height: "1px",
                width: "80%",
                mt: "1rem",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
