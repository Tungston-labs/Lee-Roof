// src/layouts/WebsiteLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
