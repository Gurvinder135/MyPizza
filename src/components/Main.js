import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
function Main() {
  return (
    <>
      <Outlet />

      <Contact />
      <Footer />
    </>
  );
}

export default Main;
