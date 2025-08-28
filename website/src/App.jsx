import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Header from "./Components/Home/Header";
import RoofingSolutions from "./Components/Home/RoofingSolutions";
import FAQ from "./Components/Home/FAQ";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import AboutDetails from "./Components/AboutUs/AboutDetails";
import OurProducts from "./Components/OurProducts/Ourproducts";
import Contact from "./Components/ContactUs/Contact";
import EnquiryForm from "./Components/ContactUs/EnquiryForm";
import Cart from "./Components/Cart/Cart";
import Jsw from "./Components/OurProducts/Jsw";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <RoofingSolutions />
              <FAQ />

            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <AboutDetails />

            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              <OurProducts />
            </>
          }
        />

        
       
        <Route
          path="/cart"
          element={
            <>
              <Cart />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <EnquiryForm />
            </>
          }
        />

      </Routes>
      <Footer />
    </>
  );
}


export default App;
