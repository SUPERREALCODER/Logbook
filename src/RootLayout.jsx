import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import FooterSection from "./components/FooterSection";
import LoadingScreen from "./components/Loading";

const RootLayout = () => {
  return (
    <>
    <LoadingScreen />
      <Header />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default RootLayout;
