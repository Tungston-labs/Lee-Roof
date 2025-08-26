import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import styled from "styled-components";
import Dashboard from "./pages/Dashboard/Dashboard";
import Enquiry from "./pages/Enquiry/Enquiry";
import EnquiryDetails from "./pages/Enquiry/EnquiryDetails";
import ViewProduct from "./pages/Product/ViewProduct";
import AddProduct from "./pages/Product/Add_product/AddProduct";
import Productcard from "./pages/Product/Productcard";
import EditProduct from "./pages/Product/EditProduct";
import MultiStepForm from "./components/Navbar/multistep/MultiStepForm";
import Login from "./pages/Dashboard/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/enquiry-page" element={<EnquiryDetails />} />
        <Route path="/view-product" element={<ViewProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products-card/:id" element={<Productcard />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/mult" element={<MultiStepForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
