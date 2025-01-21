import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import UnprotectedLayout from "../layouts/Unprotected";
import HomePage from "../pages/HomePage";
import SolutionsPage from "../pages/Solutions";
import ExpensePage from "../pages/Expense";
import BenefitsPage from "./../pages/Benefits";
import RewardsPage from "../pages/Rewards";
import ContactUsPage from "../pages/ContactUs";

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
    ],
  },
]);

export default router;
