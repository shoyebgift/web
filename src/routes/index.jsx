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
import GiftVouchersPage from "../pages/GiftVouchers";
import BrandVouchersPage from "../components/protected/giftsVouchers/BrandVouchers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <UnprotectedLayout>
            <HomePage />
          </UnprotectedLayout>
        ),
      },
      {
        path: "solutions",
        element: (
          <UnprotectedLayout>
            <SolutionsPage />
          </UnprotectedLayout>
        ),
      },
      {
        path: "products",
        children: [
          {
            path: "expense",
            element: (
              <UnprotectedLayout>
                <ExpensePage />
              </UnprotectedLayout>
            ),
          },
          {
            path: "benefits",
            element: (
              <UnprotectedLayout>
                <BenefitsPage />
              </UnprotectedLayout>
            ),
          },
          {
            path: "rewards",
            element: (
              <UnprotectedLayout>
                <RewardsPage />
              </UnprotectedLayout>
            ),
          },
        ],
      },
      {
        path: "/contact-us",
        element: (
          <UnprotectedLayout>
            <ContactUsPage />
          </UnprotectedLayout>
        ),
      },
      {
        path: "/terms-conditions",
        element: (
          <UnprotectedLayout>
            <TermsAndPolicyPages />
          </UnprotectedLayout>
        ),
      },

      {
        path: "/privacy-policy",
        element: (
          <UnprotectedLayout>
            <TermsAndPolicyPages />
          </UnprotectedLayout>
        ),
      },
      {
        path: "/SignUp",
        element: (
          <UnprotectedLayout>
            <SignUpPage />
          </UnprotectedLayout>
        ),
      },
      {
        path: "/SignIn",
        element: (
          <UnprotectedLayout>
            <SignInPage />
          </UnprotectedLayout>
        ),
      },
      {
        path: "/:user",
        element: <ProtectedLayout />,
        children: [
          {
            path: "dashboard",
          },
          {
            path: "gifts-&-rewards",
            element: <GiftVouchersPage />,

            children: [
              {
                path: "apply-for-gift-card",
              },
              {
                path: "gift-cards",
              },
              {
                path: "my-vouchers",
                element: <BrandVouchersPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
