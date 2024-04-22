import Routers from "../../Routers/Routers";
import React from "react";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
