import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import "./index.css";
import styled from 'styled-components';
import Dashboard from './pages/Dashboard/Dashboard';
import Enquiry from './pages/Enquiry/Enquiry';
import EnquiryDetails from './pages/Enquiry/EnquiryDetails';
import ViewProduct from "./pages/Product/ViewProduct";
import AddProduct from "./pages/Product/AddProduct";
import Productcard from './pages/Product/Productcard';
import EditProduct from "./pages/Product/EditProduct"
import ProductAdd from "./pages/Product/ProductAdd"
import Login from './pages/Dashboard/Login';
const App = () => {
  return (
    <>


      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/enquiry-page" element={<EnquiryDetails />} />
        <Route path="/view-product" element={<ViewProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product-card" element={<Productcard />} />
        <Route path="/edit-product" element={<EditProduct />} />
         <Route path="/product" element={<ProductAdd />} />
         <Route path="/login" element={<Login />} />

      </Routes>
    </>
  );
};

export default App;
