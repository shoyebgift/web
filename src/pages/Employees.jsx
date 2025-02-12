import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Box,
} from "@mui/material";

const HumanResources = () => {
  const { user } = useParams();
  const { cardWallets, cashWallets } = useSelector((state) => state.wallet);

  return (
    <Box
      bgcolor={"#FFFFFF"}
      sx={{
        p: 4,
        mt: 5,
        height: "calc(100vh - 50px)",
        overflow: "auto",
      }}
    >
      <Typography variant="body2" mb={2} fontWeight="bold">
        Human Resources
      </Typography>

      {cardWallets.length === 0 && cashWallets.length === 0 ? (
        <Typography
          variant="body2"
          sx={{ color: "gray", p: 4, fontWeight: "bold" }}
        >
          No wallets available.
        </Typography>
      ) : (
        <Box sx={{ overflowX: "auto", px: 2 }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
                <TableCell sx={{ fontWeight: "bold" }}>Wallet ID</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Order ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cardWallets.length > 0 &&
                cardWallets.map((wallet) => (
                  <TableRow key={wallet.id} >
                    {/* Wallet ID Cell */}
                    <TableCell>
                      <Typography
                        component={Link}
                        to={`/${user}/gifts-&-rewards/dashboard/card/${wallet.id}/orders`}
                        sx={{
                          fontWeight: "bold",
                          color: "#3725EA",
                          textDecoration: "none",
                        }}
                      >
                        #{wallet.id}
                      </Typography>
                    </TableCell>

                    {/* Orders Cell */}
                    <TableCell>
                      {wallet.orders.length > 0 ? (
                        wallet.orders.map((order) => (
                          <Typography
                            key={order.order_ID}
                            component={Link}
                            to={`card/${wallet.id}/${order.order_ID}`}
                            width={"fit-content"}
                            sx={{
                              display: "block",
                              color: "blue",
                              textDecoration: "none",
                            }}
                          >
                            #{order.order_ID}
                          </Typography>
                        ))
                      ) : (
                        <Typography sx={{ color: "gray" }}>
                          No orders available
                        </Typography>
                      )}
                    </TableCell>
                  </TableRow>
                ))}

              {/* Cash Wallet Row */}
              <TableRow>
                <TableCell>
                  <Typography
                    component={Link}
                    to={`/${user}/gifts-&-rewards/dashboard/cash/orders`}
                    sx={{
                      fontWeight: "bold",
                      color: "#3725EA",
                      textDecoration: "none",
                    }}
                  >
                    #Cash
                  </Typography>
                </TableCell>
                <TableCell>
                  {cashWallets.length > 0 ? (
                    cashWallets.map((order) => (
                      <Typography
                        key={order.order_ID}
                        component={Link}
                        to={`cash/${order.order_ID}`}
                        width={"fit-content"}
                        sx={{
                          display: "block",
                          color: "blue",
                          textDecoration: "none",
                        }}
                      >
                        #{order.order_ID}
                      </Typography>
                    ))
                  ) : (
                    <Typography sx={{ color: "gray" }}>
                      No orders available
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

export default HumanResources;
