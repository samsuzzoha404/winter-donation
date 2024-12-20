import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import MainLayout from "../layouts/MainLayout";
import CampaignsPage from "../pages/CampaignsPage";
import Dashboard from "../pages/Dashboard";
import DonationDetails from "../pages/DonationDetails";
import Home from "../pages/Home";
import HowToHelp from "../pages/HowToHelp";
import NotFoundPage from "../pages/NotFound";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "/campaigns",
        element: <CampaignsPage />,
        loader: async () => {
          const response = await fetch("/data.json");
          const data = await response.json();
          return data;
        },
      },
      {
        path: "campaigns/:campaignId",
        element: (
          <PrivateRoutes>
            <DonationDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const response = await fetch("/data.json"); // Fetch all campaigns
          const data = await response.json();
          const campaign = data.find(
            (item) => item.id === parseInt(params.campaignId)
          );
          if (!campaign) {
            throw new Error("Campaign not found");
          }
          return campaign;
        },
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/how-to-help",
        element: <HowToHelp />,
      },
    ],
  },
]);
export default router;
