import "./styles/footer.css";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
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

const Footer = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

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
      <Typography
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
                            <NavigationOutlinedIcon
                              fontSize="small"
                              sx={{
                                transform: "rotate(90deg)",
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
        <Typography
          component={"div"}
          align={isMediumScreen ? "center" : "left"}
        >
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
            component={"form"}
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              mx: "auto",
              width: "80%",
              flexDirection: "column",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Enter your email address"
              variant="outlined"
              size="small"
              fullWidth
              sx={{
                fontWeight: "400",
                backgroundColor: "white",
                borderRadius: "5px",
                "& .MuiInputBase-input": {
                  fontSize: "14px",
                },
                "& .MuiFormLabel-root": {
                  fontSize: "14px",
                },
              }}
            />

            <Button
              variant="contained"
              loading={false}
              sx={{
                textTransform: "none",
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Typography>
      </Typography>
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
