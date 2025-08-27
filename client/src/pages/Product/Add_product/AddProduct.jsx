import React from "react";
import {
  PageWrapper,TitleWrapper,
  FormWrapper,BackButton,
  UploadSection,
  UploadBox,
  RightSection,
  Label,
  Select,
  Input,
  Textarea,
  Title,
  Subtitle,
  Header,
} from "./AddProduct.Styles";
import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar"
// import MaterialAdd from "./MaterialAdd"
// import AddVarient from "./AddVarient"
import MultiStepForm from "../../../components/Navbar/multistep/MultiStepForm";
import { FaArrowLeft } from "react-icons/fa";

const ProductForm = () => {
 const [step, setStep] = useState(1);
      const totalSteps = 3;
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
                {/* <AddButton onClick={() => navigate("/add-product")}>
                  Add product
                </AddButton> */}
              </Header>
      
              <Subtitle>
                Easily add new products to your store with images, pricing, descriptions,
                and stock details, keeping your listings updated for customers.
              </Subtitle>
      
        <div>
      <MultiStepForm currentStep={1} totalSteps={3} />
    </div>
      <FormWrapper>
        {/* Left Upload Box */}
        <UploadSection>
          <Label>Product Brand Icon</Label>
          <UploadBox>
            <p>Click to upload or Drag and Drop</p>
            <span>Max 800x400px PNG or JPG</span>
          </UploadBox>
        </UploadSection>

        {/* Right Inputs */}
        <RightSection>
          <div>
            <Label>Product Brand name</Label>
            <Select>
              <option>Product name</option>
              <option>Brand A</option>
              <option>Brand B</option>
            </Select>
          </div>

          <div>
            <Label>Product name</Label>
            <Input type="text" placeholder="Product name" />
          </div>

          <div>
            <Label>Product Description</Label>
            <Textarea placeholder="Product Description" />
          </div>
        </RightSection>
      </FormWrapper>
    </PageWrapper>
    {/* <MaterialAdd />
    <AddVarient/> */}
    </>
  );
};

export default ProductForm;