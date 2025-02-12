import { configureStore } from "@reduxjs/toolkit";
import voucherReducer from "./features/voucherSlice";
import walletReducer from "./features/walletSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    voucher: voucherReducer,
  },
});

export default store;
