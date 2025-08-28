// src/layouts/WebsiteLayout.jsx
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const WebsiteLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
