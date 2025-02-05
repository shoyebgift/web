import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import nike from "../../../assets/temp/nike.png";
import parkAvenue from "../../../assets/temp/parkAvenue.png";
import amazon from "../../../assets/temp/amazon.png";
import handm from "../../../assets/temp/handm.png";
import bewakoof from "../../../assets/temp/bewakoof.png";
import amazon2 from "../../../assets/temp/cat/amazon.png";
import bewak from "../../../assets/temp/cat/bewak.png";
import handm2 from "../../../assets/temp/cat/h&m.png";
import mmt from "../../../assets/temp/cat/mmt.png";
import myglamm from "../../../assets/temp/cat/myglamm.png";
import parkAvenue2 from "../../../assets/temp/cat/park.png";

import { brandVoucher } from "../../../utils/brandVoucher";

const BuyVouchersPage = () => {
  const [category, setCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(null);

  const voucherImg = {
    amazon: amazon2,
    "h&m": handm2,
    bewakoof: bewak,
    myglamm: myglamm,
    parkAvenue: parkAvenue2,
    makemytrip: mmt,
  };

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

  return (
    <Box mt={2}>
      {/* Popular Brands Section */}
      <Box bgcolor="#FFFFFF" p={2} borderRadius={2}>
        <Typography>Choose from popular brands</Typography>
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
              height="54px"
              width="160px"
              p='4px'
              onClick={() =>
                setSelectedBrand((prev) =>
                  prev === brand.name ? null : brand.name
                )
              }
            />
          ))}
        </Box>
      </Box>

      {/* Category Filter */}
      <Box mt={2} bgcolor="#FFFFFF" p={2} borderRadius={2}>
        <Typography>Choose from categories</Typography>

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
              onClick={() => setCategory(cat)}
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

        {/* Vouchers List */}
        <Box
          mt={2}
          display="flex"
          flexWrap="wrap"
          gap={2}
          justifyContent="flex-start"
        >
          {filteredVouchers.length === 0 ? (
            <Typography>No Results Found</Typography>
          ) : (
            filteredVouchers.map((brand) => (
              <Box key={brand.name} mt={1} flexShrink={0} width="250px">
                <Box
                  component="img"
                  src={voucherImg[brand.image]}
                  alt={brand.name}
                  width="250px"
                  height="150px"
                  borderRadius={2}
                  sx={{ objectFit: "cover" }}
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
    </Box>
  );
};

export default BuyVouchersPage;
