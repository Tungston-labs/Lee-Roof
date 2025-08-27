import React from "react";
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
import MultiStepForm from "../../../components/Navbar/multistep/MultiStepForm";
import { FaArrowLeft } from "react-icons/fa";

const ProductForm = ({ data, onUpdate }) => {
  const handleChange = (field, value) => {
    onUpdate({ ...data, [field]: value });
  };

  return (
    <>
      <PageWrapper>
        <Header>
          <TitleWrapper>
            <BackButton onClick={() => window.history.back()}>
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
                    handleChange("brandIconFile", file); // save actual file
                  }
                }}
              />
              {data.brandIconFile ? (
                <img
                  src={URL.createObjectURL(data.brandIconFile)}
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
                value={data.brandName}
                onChange={(e) => handleChange("brandName", e.target.value)}
                placeholder="Brand name"
              />
            </div>

            <div>
              <Label>Product name</Label>
              <Input
                type="text"
                value={data.productName}
                onChange={(e) => handleChange("productName", e.target.value)}
                placeholder="Product name"
              />
            </div>

            <div>
              <Label>Product Description</Label>
              <Textarea
                value={data.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Product Description"
              />
            </div>
          </RightSection>
        </FormWrapper>
      </PageWrapper>
    </>
  );
};

export default ProductForm;
