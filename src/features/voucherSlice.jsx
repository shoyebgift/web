import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vouchers: {
    myVouchers: [],
    draftVouchers: [],
  },
  loading: false,
  error: null,
};

const voucherSlice = createSlice({
  name: "voucher",
  initialState,
  reducers: {
    addMyVoucher: (state, action) => {
      state.vouchers.myVouchers.push(action.payload);
    },
    draftVouchers: (state, action) => {
      state.vouchers.draftVouchers.push(action.payload);
    },
    removeDraftVoucher: (state, action) => {
      state.vouchers.draftVouchers = state.vouchers.draftVouchers.filter(
        (voucher) => voucher.id !== action.payload
      );
    },
  },
});

export const { addMyVoucher, draftVouchers, removeDraftVoucher } =
  voucherSlice.actions;

export default voucherSlice.reducer;
