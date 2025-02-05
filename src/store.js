import { configureStore } from "@reduxjs/toolkit";
import voucherReducer from "./features/voucherSlice";

const store = configureStore({
  reducer: {
    voucher: voucherReducer,
  },
});

export default store;
