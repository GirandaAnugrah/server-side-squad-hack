import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar hideButton={false} />
      <div className="w-full">{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
