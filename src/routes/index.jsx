import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UnprotectedLayout from "../layouts/Unprotected";
import HomePage from "../pages/HomePage";
import SolutionsPage from "../pages/Solutions";
import ExpensePage from "../pages/Expense";
import BenefitsPage from "../pages/Benefits";
import RewardsPage from "../pages/Rewards";
import ContactUsPage from "../pages/ContactUs";
import TermsAndPolicyPages from "../pages/TermsAndPolicy";
import SignUpPage from "./../pages/SignUp";
import SignInPage from "../pages/SignIn";
import ProtectedLayout from "./../layouts/Protected";
import GiftVouchersLayout from "../layouts/GiftVouchers";
import BrandVouchersPage from "../pages/BrandVouchers";
import BuyVouchers from "../pages/BuyVouchers";
import DraftVoucherPage from "../pages/DraftVoucher";
import ApplyForGiftCardPage from "../pages/ApplyForGiftCard";
import SelectWallet from "../components/protected/giftsVouchers/gpr/SelectWallet";
import WalletHome from "../components/protected/giftsVouchers/gpr/WalletHome";
import WhereToShare from "../components/protected/giftsVouchers/gpr/WhereToShare";
import AddWalletEmployee from "../components/protected/giftsVouchers/gpr/AddWalletEmployee";
import CreateWalletProcess from "../components/protected/giftsVouchers/gpr/CreateWalletProcess";
import HumanResourcesLayout from "../layouts/HumanResources";
import EmployeesPage from "../pages/Employees";
import WalletOrders from "../components/protected/giftsVouchers/gpr/WalletOrders";
import WalletOrdersDetails from "../components/protected/humanResources/WalletOrdersDetails";
import DashboardPage from "./../pages/Dashboard";
import AddBankAccountPage from "../components/protected/Dashboard/AddBankAccount";
import OptifiiExpenseLayout from "../layouts/OptifiiExpense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <UnprotectedLayout />,
        children: [
          {
            path:'',
            element:<HomePage/>
          },
          {
            path: "solutions",
            element: <SolutionsPage />,
          },
          {
            path: "products",
            children: [
              {
                path: "expense",
                element: <ExpensePage />,
              },
              {
                path: "benefits",
                element: <BenefitsPage />,
              },
              {
                path: "rewards",
                element: <RewardsPage />,
              },
            ],
          },
          {
            path: "contact-us",
            element: <ContactUsPage />,
          },
          {
            path: "terms-conditions",
            element: <TermsAndPolicyPages />,
          },

          {
            path: "/privacy-policy",
            element: <TermsAndPolicyPages />,
          },
          {
            path: "/SignUp",
            element: <SignUpPage />,
          },
          {
            path: "/SignIn",
            element: <SignInPage />,
          },
        ],
      },

      //protected routes
      {
        path: "/:user",
        element: <ProtectedLayout />,
        children: [
          {
            path: "dashboard",
            children: [
              {
                path: "",
                element: <DashboardPage />,
              },
              {
                path: "add-bank-account",
                element: <AddBankAccountPage />,
              },
            ],
          },

          {
            path: "human-resource",
            element: <HumanResourcesLayout />,
            children: [
              {
                path: "employees",
                children: [
                  {
                    path: "",
                    element: <EmployeesPage />,
                  },
                  {
                    path: "cash/:orderId/",
                    element: <WalletOrdersDetails />,
                  },
                  {
                    path: "card/:walletId/:orderId/",
                    element: <WalletOrdersDetails />,
                  },
                ],
              },
            ],
          },

          {
            path: "expense",
            element: <OptifiiExpenseLayout />,
            children: [
              {
                path: "dashboard",
                element: <>optifii expense</>,
              },
              {
                path: "wallet-program",
                element: <> wallet program</>,
              },
              {
                path: "advance-expense-request",
                element: <> advance expense request</>,
              },
              {
                path: "reimbursement-request",
                element: <> reimbursement request</>,
              },
            ],
          },

          {
            path: "gifts-&-rewards",
            element: <GiftVouchersLayout />,

            children: [
              {
                path: "dashboard",
                element: <ApplyForGiftCardPage />,
                children: [
                  {
                    path: "",
                    element: (
                      <CreateWalletProcess>
                        <SelectWallet />
                      </CreateWalletProcess>
                    ),
                  },
                  {
                    path: "cash",
                    children: [
                      {
                        path: "",
                        element: (
                          <CreateWalletProcess>
                            <WalletHome />
                          </CreateWalletProcess>
                        ),
                      },
                      {
                        path: "add-employee",
                        element: (
                          <CreateWalletProcess>
                            <AddWalletEmployee />
                          </CreateWalletProcess>
                        ),
                      },
                      {
                        path: "orders",
                        element: <WalletOrders />,
                      },
                    ],
                  },
                  {
                    path: "card",
                    children: [
                      {
                        path: "",
                        element: (
                          <CreateWalletProcess>
                            <WalletHome />
                          </CreateWalletProcess>
                        ),
                      },
                      {
                        path: "where-to-share",
                        element: (
                          <CreateWalletProcess>
                            <WhereToShare />
                          </CreateWalletProcess>
                        ),
                      },
                      {
                        path: "edit/:walletId/where-to-share",
                        element: (
                          <CreateWalletProcess>
                            <WhereToShare />
                          </CreateWalletProcess>
                        ),
                      },

                      {
                        path: ":walletId",
                        children: [
                          {
                            path: "add-employee",
                            element: (
                              <CreateWalletProcess>
                                <AddWalletEmployee />
                              </CreateWalletProcess>
                            ),
                          },
                          {
                            path: "orders",
                            element: <WalletOrders />,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                path: "gift-cards",
              },
              {
                path: "my-vouchers",

                children: [
                  {
                    path: "",
                    element: <BrandVouchersPage />,
                  },
                  {
                    path: "apply-for-brand-voucher",
                    element: <BuyVouchers />,
                  },
                  {
                    path: "voucher-draft",
                    children: [
                      {
                        path: "",
                        element: <DraftVoucherPage />,
                      },
                      {
                        path: ":voucherId",
                        children: [
                          {
                            path: "",
                            element: <BuyVouchers />,
                          },
                          {
                            path: "pay",
                            element: <BuyVouchers />,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
