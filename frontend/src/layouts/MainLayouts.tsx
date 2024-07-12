import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AlertError from "../components/AlertError";
import { useAppSelector } from "../hooks/useRedux";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar hideButton={false} />
      <div className="w-full bg-broken-white">{children}</div>
      <Footer />
      {/* <AlertError /> */}
    </>
  );
};

export default MainLayout;
