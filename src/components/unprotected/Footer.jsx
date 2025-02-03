import "./styles/footer.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Divider,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/OptiFii.svg";
import { unprotectedNavlinks, socialLink } from "../../utils";

const Footer = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const socialIcons = {
    linkedIn: <LinkedInIcon sx={{ fontSize: 16 }} />,
  };
  return (
    <Box
      sx={{
        display: "flex",
        position: "relative",
        zIndex: 5,
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
          gridTemplateColumns: isMediumScreen ? "1fr" : "1fr 3fr",
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
                            className="footer-link"
                            style={{
                              display: "flex",
                              alignItems: "center",
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
                      className="footer-link"
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </Box>
            );
          })}

          {/* social media links */}

          <Box component={"div"} align="left">
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
              social
            </Typography>
            {socialLink.map((item, index) => {
              return (
                <Box
                  fontFamily="inherit"
                  key={index}
                  component={"a"}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  display={"flex"}
                  sx={{ alignItems: "center" }}
                  justifyItems={"center"}
                  mt={1}
                >
                  {socialIcons[item.name]}
                  <Typography
                    fontFamily="inherit"
                    fontSize={"14px"}
                    textTransform={"capitalize"}
                  >
                    {item.name}
                  </Typography>
                </Box>
              );
            })}
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
