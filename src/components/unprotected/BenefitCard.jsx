import { Avatar, Box, Divider, Typography } from "@mui/material";
import NoFoodOutlinedIcon from "@mui/icons-material/NoFoodOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";

const BenefitCard = ({ type }) => {
  const icon = {
    food: NoFoodOutlinedIcon,
    gift: CardGiftcardOutlinedIcon,
    fuel: LocalGasStationOutlinedIcon,
  };
  const IconComponent = icon[type];

  const cardData = {
    topPart: [
      { title: "Wallet Type", value: "PreFilled" },
      { title: "Department", value: "Sales" },
      { title: "Wallet amount", value: "\u20B9 17,000" },
    ],
    bottomPart: [
      { title: "Created By", value: "Avinash" },
      { title: "Approved By", value: "Gautam Dhingra" },
    ],
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "266px" }, 
        height: "auto", 
        backgroundColor: "#3725EA0D",
        p: "1rem",
        borderRadius: "10px",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Header Section */}
      <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Avatar sx={{ bgcolor: "#3725EA33", flexShrink: 0 }}>
          <IconComponent />
        </Avatar>

        <Box sx={{ flexGrow: 1, minWidth: "0" }}>
          <Typography
            component="h2"
            sx={{
              textTransform: "capitalize",
              fontSize: { xs: "16px", sm: "18px" }, 
              fontWeight: "400",
              textAlign: "start",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {type}
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "10px", sm: "12px" },
              fontWeight: "400",
              color: "#52525B",
              textAlign: "start",
            }}
          >
            Created on 12 June 2024
          </Typography>
          <Typography
            sx={{
              mt: ".5rem",
              backgroundColor: "#00A43814",
              color: "#00A438",
              borderRadius: "10px",
              textTransform: "none",
              fontSize: { xs: "10px", sm: "12px" },
              padding: { xs: "3px 10px", sm: "4px 15px" },
              width: "fit-content",
              border: 1,
            }}
          >
            Active
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          bgcolor: "#3725EA",
          height: "1px",
          width: "100%",
          mt: "1rem",
        }}
      />

      {/* Card Data */}
      {Object.keys(cardData).map((key) => (
        <Box
          key={key}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, 
            gap: "10px",
            mt: "1rem",
          }}
        >
          {cardData[key].map((data) => (
            <Box key={data.title}>
              <Typography
                component="h2"
                sx={{
                  fontSize: "12px",
                  fontWeight: "400",
                  textAlign: "start",
                  color: "#848B99",
                  mt: "10px",
                }}
              >
                {data.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px" }, 
                  fontWeight: "400",
                  textAlign: "start",
                  color: "black",
                }}
              >
                {data.value}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default BenefitCard;
