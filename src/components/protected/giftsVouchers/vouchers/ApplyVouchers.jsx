import React, { useState } from "react";
import { Box, Button, Divider, Radio, Typography } from "@mui/material";
import nike from "../../../../assets/temp/nike.png";
import parkAvenue from "../../../../assets/temp/parkAvenue.png";
import amazon from "../../../../assets/temp/amazon.png";
import handm from "../../../../assets/temp/handm.png";
import bewakoof from "../../../../assets/temp/bewakoof.png";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { brandVoucher } from "../../../../utils/brandVoucher";
import { useNavigate, useParams } from "react-router-dom";

const ApplyVouchers = ({
  setBrandVoucherData,
  brandVoucherData,
  setCurrentStage,
}) => {
  const navigate = useNavigate();
  const { user } = useParams();

  const [category, setCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [voucher, setVoucher] = useState(
    { ...brandVoucherData?.voucher } || {}
  );

  const brands = [
    { name: "Nike", image: nike },
    { name: "Park Avenue", image: parkAvenue },
    { name: "Amazon", image: amazon },
    { name: "H&M", image: handm },
    { name: "Bewakoof", image: bewakoof },
  ];

  // Filtered vouchers based on selected category
  let filteredVouchers =
    category === "all"
      ? Object.values(brandVoucher).flat() // Merge all categories
      : brandVoucher[category] || []; // Get selected category vouchers

  if (selectedBrand) {
    filteredVouchers = filteredVouchers.filter(
      (voucher) => voucher.name.toLowerCase() === selectedBrand.toLowerCase()
    );
  }

  const handleSubmit = () => {
    if (brandVoucherData?.voucher?.name !== voucher?.name) {
      setBrandVoucherData((prev) => ({ voucher: voucher }));
    }
    setCurrentStage(1);
  };

  return (
    <>
      {/* Popular Brands Section */}
      <Box bgcolor="#FFFFFF" p={2} borderRadius={2}>
        <Typography
          fontSize={"16px"}
          fontFamily={"Gilroy"}
          fontWeight={500}
          mb={2}
        >
          Choose from popular brands
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
          p={2}
          justifyContent="space-around"
        >
          {brands.map((brand) => (
            <Box
              key={brand.name}
              component="img"
              sx={{
                objectFit: "contain",
                cursor: "pointer",
                border:
                  selectedBrand === brand.name
                    ? "1px solid #3725EA"
                    : "1px solid transparent",
              }}
              borderRadius={2}
              src={brand.image}
              alt={brand.name}
              height="34px"
              width="120px"
              p="4px"
              onClick={() => {
                setCategory("all");
                setSelectedBrand((prev) =>
                  prev === brand.name ? null : brand.name
                );
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Category Filter */}
      <Box mt={2} bgcolor="#FFFFFF" p={2} borderRadius={2}>
        <Typography
          fontSize={"16px"}
          fontFamily={"Gilroy"}
          fontWeight={500}
          mb={2}
        >
          Shop by category
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          gap={1}
          flexWrap="wrap"
          textTransform="capitalize"
          color="#828282"
        >
          <Typography
            onClick={() => setCategory("all")}
            bgcolor={category === "all" ? "#3725EA26" : ""}
            p="0 20px"
            borderRadius={1}
            color={category === "all" ? "#3725EA" : ""}
            fontFamily={"TT Commons"}
            fontSize={"14px"}
            sx={{
              cursor: "pointer",
              "&:hover": { backgroundColor: "#3725EA26" },
            }}
          >
            All
          </Typography>
          {Object.keys(brandVoucher).map((cat) => (
            <Typography
              key={cat}
              onClick={() => {
                setSelectedBrand(null);
                setCategory(cat);
              }}
              fontFamily={"TT Commons"}
              fontSize={"14px"}
              bgcolor={category === cat ? "#3725EA26" : ""}
              p="0 20px"
              borderRadius={1}
              color={category === cat ? "#3725EA" : ""}
              whiteSpace="nowrap"
              sx={{
                cursor: "pointer",
                "&:hover": { backgroundColor: "#3725EA26" },
              }}
            >
              {cat}
            </Typography>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />
        {/* Vouchers List */}
        <Box
          mt={2}
          height={"calc(100vh - 370px)"}
          sx={{
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={2} alignItems="flex-start">
            {filteredVouchers.length === 0 ? (
              <Typography
                fontSize={"16px"}
                fontStyle={"italic"}
                color={"#4E4E4E"}
                fontWeight={500}
                fontFamily={"TT Commons"}
              >
                No vouchers found
              </Typography>
            ) : (
              filteredVouchers.map((brand) => (
                <Box
                  key={brand.name}
                  mt={1}
                  flexShrink={0}
                  position="relative"
                  width={"200px"}
                  height={"min-content"}
                  sx={{ cursor: "pointer", "&:hover": { opacity: 0.8 } }}
                  onClick={() => {
                    setVoucher((prev) =>
                      prev?.name === brand.name ? {} : brand
                    );
                  }}
                >
                  <Box
                    component="img"
                    src={brand.image}
                    alt={brand.name}
                    width="200px"
                    height="120px"
                    sx={{ objectFit: "contain" }}
                  />
                  <Radio
                    checked={voucher?.name === brand.name}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 2,
                      borderRadius: "50%",
                      zIndex: 1,
                    }}
                  />
                  <Typography
                    mt={1}
                    fontSize="12px"
                    color="#FFFFFF"
                    bgcolor="#3725EA"
                    width="fit-content"
                    p="2px 15px"
                    borderRadius={5}
                  >
                    {`${brand.discount}% OFF`}
                  </Typography>
                  <Typography fontSize="12px" mt={1}>
                    {brand.name} E-gift card
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Box>
        <Box mt={2} display={"flex"} gap={2}>
          <Button
            onClick={() => navigate(`/${user}/gifts-&-rewards/my-vouchers`)}
            variant="outlined"
            sx={{
              borderColor: "#6311CB",
              color: "#6311CB",
              "&:hover": {
                background: "none",
              },
            }}
          >
            <KeyboardBackspaceOutlinedIcon />
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!voucher.name}
            variant="contained"
            sx={{
              width: "250px",
              "&:hover": {
                background: "linear-gradient(to right, #6311CB, #8F40FB)",
                color: "white",
              },
              textTransform: "none",
              backgroundColor: "#6311CB",
            }}
          >
            Proceed to add
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ApplyVouchers;
