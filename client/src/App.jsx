import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import WebsiteLayout from "./layout/layout";

// Admin pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Enquiry from "./pages/Enquiry/Enquiry";
import EnquiryDetails from "./pages/Enquiry/EnquiryDetails";
import ViewProduct from "./pages/Product/ViewProduct";
import AddProduct from "./pages/Product/Add_product/AddProduct";
import Productcard from "./pages/Product/Productcard";
import EditProduct from "./pages/Product/EditProduct";
import MultiStepForm from "./components/Navbar/multistep/MultiStepForm";
import Login from "./pages/Dashboard/Login";
import Product from "./pages/Product/Product";

// Website pages
import Header from "./Components/Home/Header";
import RoofingSolutions from "./components/Home/RoofingSolutions";
import FAQ from "./Components/Home/FAQ";
import AboutUs from "./Components/AboutUs/AboutUs";
import AboutDetails from "./Components/AboutUs/AboutDetails";
import Contact from "./Components/ContactUs/Contact";
import EnquiryForm from "./Components/ContactUs/EnquiryForm";
import Cart from "./Components/Cart/Cart";
import OurProducts from "./Components/OurProducts/Ourproducts";

const App = () => {
  return (
    <Routes>
      {/* Admin routes (Protected, No Navbar) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/enquiry"
        element={
          <ProtectedRoute>
            <Enquiry />
          </ProtectedRoute>
        }
      />
      <Route
        path="/enquiry-page"
        element={
          <ProtectedRoute>
            <EnquiryDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/view-product"
        element={
          <ProtectedRoute>
            <ViewProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/add-product"
        element={
          <ProtectedRoute>
            <AddProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/product"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products-card/:id"
        element={
          <ProtectedRoute>
            <Productcard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-product"
        element={
          <ProtectedRoute>
            <EditProduct />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mult"
        element={
          <ProtectedRoute>
            <MultiStepForm />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />

      {/* Website routes (Always with Navbar + Footer) */}
      <Route
        path="/"
        element={
          <WebsiteLayout>
            <Header />
            <RoofingSolutions />
            <FAQ />
          </WebsiteLayout>
        }
      />
      <Route
        path="/about"
        element={
          <WebsiteLayout>
            <AboutUs />
            <AboutDetails />
          </WebsiteLayout>
        }
      />
      <Route
        path="/products"
        element={
          <WebsiteLayout>
            <OurProducts />
          </WebsiteLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <WebsiteLayout>
            <Cart />
          </WebsiteLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <WebsiteLayout>
            <Contact />
            <EnquiryForm />
          </WebsiteLayout>
        }
      />
    </Routes>
  );
};

export default App;
