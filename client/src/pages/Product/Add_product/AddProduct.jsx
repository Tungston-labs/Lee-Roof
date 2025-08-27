import React, { useState } from "react";
import {
  PageWrapper,
  TitleWrapper,
  FormWrapper,
  BackButton,
  UploadSection,
  UploadBox,
  RightSection,
  Label,
  Input,
  Textarea,
  Title,
  Subtitle,
  Header,
} from "./AddProduct.Styles";

import Navbar from "../../../components/Navbar/Navbar";
import MaterialAdd from "./MaterialAdd";
import AddVarient from "./AddVarient";
import MultiStepForm from "../../../components/Navbar/multistep/MultiStepForm";
import { FaArrowLeft } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/productSlice"; // ✅ thunk

const ProductForm = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.product);

  const [brandIcon, setBrandIcon] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  
  const handleFileChange = (e) => {
    setBrandIcon(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("brandName", brandName);
    formData.append("productName", productName);
    formData.append("description", description);
    if (brandIcon) formData.append("brandIcon", brandIcon);

    dispatch(createProduct(formData));
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <Header>
          <TitleWrapper>
            <BackButton onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </BackButton>
            <Title>Product</Title>
          </TitleWrapper>
        </Header>

        <Subtitle>
          Easily add new products to your store with images, pricing,
          descriptions, and stock details, keeping your listings updated for
          customers.
        </Subtitle>

        <div>
          <MultiStepForm currentStep={1} totalSteps={3} />
        </div>

        <form onSubmit={handleSubmit}>
          <FormWrapper>
            {/* Left Upload Box */}
            <UploadSection>
              <Label>Product Brand Icon</Label>
              <UploadBox>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setBrandIcon(file); // save file for API
                    }
                  }}
                />
                {brandIcon ? (
                  <img
                    src={URL.createObjectURL(brandIcon)}
                    alt="Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  <>
                    <p>Click to upload or Drag and Drop</p>
                    <span>Max 800x400px PNG or JPG</span>
                  </>
                )}
              </UploadBox>
            </UploadSection>

            {/* Right Inputs */}
            <RightSection>
              <div>
                <Label>Product Brand name</Label>
                <Input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Brand name"
                />
              </div>

              <div>
                <Label>Product name</Label>
                <Input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="Product name"
                />
              </div>

              <div>
                <Label>Product Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Product Description"
                />
              </div>
            </RightSection>
          </FormWrapper>

          
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </PageWrapper>

      <MaterialAdd />
      <AddVarient />
    </>
  );
};

export default ProductForm;
