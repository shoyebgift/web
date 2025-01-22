import "./styles/footer.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import {
  Divider,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/OptiFii.svg";
import { unprotectedNavlinks } from "../../utils";
import { useState } from "react";

const Footer = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

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
        setError("Please enter your work email address.");
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
    <Box
      sx={{
        display: "flex",
        position: "relative",
        zIndex: 10,
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component={"div"}
        sx={{
          fontSize: "14px",
          py: 2,
          fontWeight: "400",
          display: "grid",
          gridTemplateColumns: isMediumScreen ? "1fr" : "1fr 2fr 1fr",
          height: "min-content",
        }}
      >
        <Box
          component={"div"}
          align="left"
          sx={{ padding: { xs: "1rem 0 1rem 2.5rem", md: "1rem" } }}
        >
          <IconButton
            component={NavLink}
            to="/"
            sx={{
              ":hover": { backgroundColor: "transparent" },

              width: isMediumScreen ? "150px" : "200px",
            }}
          >
            <img className="unprotected-header-logo" src={logo} alt="OptiFii" />
          </IconButton>

          <Typography
            component={"p"}
            align="left"
            sx={{ fontSize: "13px", fontWeight: "400", width: "80%" }}
          >
            OptiFii is a spend management platform which offers expense
            management, tax benefit and reward program solutions to the
            companies.
          </Typography>
        </Box>

        {/* footer links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            gap: 2,
            mt: 3,
          }}
        >
          {Object.keys(unprotectedNavlinks).map((key) => {
            return (
              <Box
                key={key}
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {/* heading */}
                <Typography
                  component={"h2"}
                  align="left"
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                    color: "#94A3B8",
                    textTransform: "uppercase",
                  }}
                >
                  {key}
                </Typography>

                {/* links */}
                {unprotectedNavlinks[key].map((item) =>
                  item.child ? (
                    <Box key={item.name} textAlign={"left"} color={"black"}>
                      <span>{item.name}</span>

                      {item.child.map((child) => (
                        <Box
                          key={child.name}
                          textAlign={"left"}
                          color={"black"}
                          ml={2}
                        >
                          <NavLink
                            to={child.path}
                            className={"footer-link"}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              color: "inherit",
                            }}
                          >
                            <FiberManualRecordIcon
                              sx={{
                                width: "10px",
                                marginRight: "8px",
                              }}
                            />
                            {child.name}
                          </NavLink>
                        </Box>
                      ))}
                    </Box>
                  ) : (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={"footer-link"}
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </Box>
            );
          })}
        </Box>

        {/* newsletter Subscribe  */}
        <Box component={"div"} align={isMediumScreen ? "center" : "left"}>
          <Typography
            component={"h2"}
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              color: "#94A3B8",
              mt: 3,
            }}
          >
            {" "}
            NEWSLETTER
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              mx: { xs: "auto", md: "0" },
              maxWidth: "350px",
              width: "80%",
              flexDirection: "column",
            }}
          >
            <TextField
              name="newsletter"
              id="newsletter"
              autoComplete="newsletter"
              label="Enter your email address"
              variant="outlined"
              size="small"
              type="email"
              fullWidth
              sx={{
                fontWeight: "400",

                borderRadius: "5px",
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                },
                "& .MuiFormLabel-root": {
                  fontSize: "14px",
                },
              }}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              error={!!error}
              helperText={error}
            />

            <Button
              variant="contained"
              loading={loading}
              loadingPosition="center"
              sx={{
                textTransform: "none",
                "&:disabled": {
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  color: "rgba(255, 255, 255, 0.5)",
                },
              }}
              onClick={(e) => handleSubmit(e)}
            >
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Typography
        variant="subtitle1"
        align="center"
        component={"p"}
        sx={{ fontSize: "12px", py: 2, fontWeight: "400" }}
      >
        © Copyright {new Date().getFullYear()}, All Rights Reserved by OptiFii
      </Typography>
    </Box>
  );
};

export default Footer;
