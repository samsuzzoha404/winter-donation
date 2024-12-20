import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import { useAuth } from "../hooks";

const MainLayout = () => {
  const { loading } = useAuth();
  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader />
      </div>
    );
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
