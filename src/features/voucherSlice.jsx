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
      if (action.payload.id) {
        state.vouchers.draftVouchers = state.vouchers.draftVouchers.filter(
          (voucher) => voucher.id !== action.payload.id
        );
      }
      state.vouchers.myVouchers = [
        ...state.vouchers.myVouchers,
        {
          id: Date.now(),
          ...action.payload,
          ...(action.payload.orderstatus === "scheduled"
            ? {}
            : { dateTime: new Date().toISOString() }),
        },
      ];
    },
    draftVouchers: (state, action) => {
      const index = state.vouchers.draftVouchers.findIndex(
        (voucher) => voucher.id === action.payload.id
      );

      if (index !== -1) {
        // Update existing voucher
        state.vouchers.draftVouchers[index] = {
          ...state.vouchers.draftVouchers[index],
          ...action.payload,
        };
      } else {
        // Add new voucher
        state.vouchers.draftVouchers = [
          ...state.vouchers.draftVouchers,
          { ...action.payload, id: Date.now() },
        ];
      }
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
