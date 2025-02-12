import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardWallets: [],
  cashWallets: [],
  loading: false,
  error: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    addwallet: (state, action) => {
      state.cardWallets = [
        { id: Date.now(), ...action.payload },
        ...state.cardWallets,
      ];
    },
    updateWalletPolicy: (state, action) => {
      const { wallet, walletId } = action.payload;
      const updatedWalletIndex = state.cardWallets.findIndex(
        (w) => w.id.toString() === walletId.toString()
      );

      if (updatedWalletIndex !== -1) {
        const updatedWallet = {
          ...state.cardWallets[updatedWalletIndex],
          transactionType: wallet.transactionType,
          transactionRules: wallet.transactionRules,
          name: wallet.name,
          orders: wallet.orders,
        };

        state.cardWallets = [
          ...state.cardWallets.slice(0, updatedWalletIndex),
          updatedWallet,
          ...state.cardWallets.slice(updatedWalletIndex + 1),
        ];
      }
    },
    updatewallet: (state, action) => {
      const { cardType, walletId, employees, totalAmount } = action.payload;
      if (cardType === "card") {
        const wallet = state.cardWallets.find(
          (wallet) => wallet.id.toString() === walletId.toString()
        );

        if (wallet) {
          const newOrder = {
            order_ID: Date.now(),
            load_Status: "fully_loaded",
            submitted_Date: new Date().toISOString(),
            total_amount: totalAmount,
            employees: [...employees],
          };

          wallet.orders = [newOrder, ...wallet.orders];
        }
      } else if (cardType === "cash") {
        const newOrder = {
          order_ID: Date.now(),
          load_Status: "fully_loaded",
          submitted_Date: new Date().toISOString(),
          total_amount: totalAmount,
          employees: [...employees],
        };
        state.cashWallets = [newOrder, ...state.cashWallets];
      }
    },
  },
});

export const { addwallet, updatewallet, updateWalletPolicy } =
  walletSlice.actions;

export default walletSlice.reducer;
