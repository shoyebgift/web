import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const Breadcrumb = () => {
  const location = useLocation();
  const { user, walletId, voucherId } = useParams();

  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment && segment !== user.toString());

  if (
    location.pathname ===
      `/${user}/gifts-&-rewards/my-vouchers/apply-for-brand-voucher` ||
    location.pathname.split("/").includes(voucherId)
  ) {
    return (
      <Typography fontSize={"14px"}>
        Optifii Gifts & Rewards / Apply For Brand Voucher
      </Typography>
    );
  }

  if (
    location.pathname === `/${user}/gifts-&-rewards/dashboard` ||
    location.pathname === `/${user}/gifts-&-rewards/dashboard/card` ||
    location.pathname === `/${user}/gifts-&-rewards/dashboard/cash` ||
    location.pathname ===
      `/${user}/gifts-&-rewards/dashboard/card/where-to-share` ||
    location.pathname ===
      `/${user}/gifts-&-rewards/dashboard/cash/add-employee` ||
    location.pathname ===
      `/${user}/gifts-&-rewards/dashboard/card/${walletId}/add-employee`
  ) {
    return (
      <Typography fontSize={"14px"} fontFamily={"Gilroy"} fontWeight={500}>
        Optifii Gifts & Rewards / Apply for gift card
      </Typography>
    );
  }

  if (location.pathname.split("/").includes("orders")) {
    return (
      <Typography fontSize={"14px"} fontFamily={"Gilroy"} fontWeight={500}>
        Optifii Gifts & Rewards / Application Status /{" "}
        {walletId ? "Card Wallet" : "Cash Wallet"}
      </Typography>
    );
  }

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Typography fontSize={"14px"} fontFamily={"Gilroy"} fontWeight={500}>
        Optifii
      </Typography>
      {pathSegments.map((segment, index) => {
        let formattedSegment = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());
        const to = "/" + pathSegments.slice(0, index + 1).join("/");

        return (
          <React.Fragment key={segment}>
            {index > 0 && (
              <Typography
                fontSize={"14px"}
                fontFamily={"Gilroy"}
                fontWeight={500}
              >
                /
              </Typography>
            )}
            {index === pathSegments.length - 1 ? (
              <Typography
                fontSize={"14px"}
                fontFamily={"Gilroy"}
                fontWeight={500}
              >
                {formattedSegment}
              </Typography>
            ) : (
              <Typography
                fontSize={"14px"}
                fontFamily={"Gilroy"}
                fontWeight={500}
              >
                {formattedSegment}
              </Typography>
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default Breadcrumb;
