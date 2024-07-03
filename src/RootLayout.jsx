import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import FooterSection from "./components/FooterSection";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default RootLayout;
