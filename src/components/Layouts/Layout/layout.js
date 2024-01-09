import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const Layout = ({ children }) => {
  return (
    <div className=" min-h-screen flex flex-col" style={{background:"#f9f9ff"}}>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
