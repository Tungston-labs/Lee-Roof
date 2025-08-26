import React, { useState } from "react";
import {
  PageWrapper,
  Header,
  Title,
  Subtitle,
//   StepIndicator,
  MaterialSection,
  Input,
  AddButton,
  TagsWrapper,
  Tag,
  UploadSection,
  UploadBox,
  ImageGrid,
  ImageCard,
  ImagePreview,
  RemoveIcon,
  Actions,
  CancelButton,
  SaveButton,
} from "./MaterialAdd.Styles";
import MultiStepForm from "../../../components/Navbar/multistep/MultiStepForm";

const ProductMaterialForm = () => {
      const [step, setStep] = useState(1);
      const totalSteps = 3;
  const [materials, setMaterials] = useState(["GI", "Al-Zn"]);
  const [inputValue, setInputValue] = useState("");
  const [images, setImages] = useState([
    "/images/roof1.png",
    "/images/roof2.png",
    "/images/roof3.png",
    "/images/roof4.png",
  ]);

  const handleAddMaterial = () => {
    if (inputValue && !materials.includes(inputValue)) {
      setMaterials([...materials, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveMaterial = (mat) => {
    setMaterials(materials.filter((m) => m !== mat));
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <PageWrapper>

             <div>
      <MultiStepForm currentStep={2} totalSteps={3} />

      {/* <div style={{ marginTop: '20px' }}>
        <button onClick={() => setStep(s => Math.max(1, s - 1))}>Back</button>
        <button onClick={() => setStep(s => Math.min(totalSteps, s + 1))}>Next</button>
      </div> */}
    </div>
      <Header>
        <div>
          <Title>Add product image and material</Title>
          <Subtitle>
            Easily add new products to your store with images, pricing,
            descriptions, and stock details, keeping your listings updated for
            customers.
          </Subtitle>
        </div>

      </Header>

      {/* Material Input */}
    <MaterialSection>
  {/* Left: Input + Add */}
  <div style={{ display: "flex", gap: "0.75rem", flex: 1 }}>
    <Input
      type="text"
      placeholder="Material"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />
    <AddButton onClick={handleAddMaterial}>+ Add</AddButton>
  </div>

  {/* Middle: Tags */}
  <TagsWrapper>
    {materials.map((mat, idx) => (
      <Tag key={idx}>
        {mat} <span onClick={() => handleRemoveMaterial(mat)}>✕</span>
      </Tag>
    ))}
  </TagsWrapper>

  {/* Right: Actions */}
  <Actions>
    <CancelButton>Cancel</CancelButton>
    <SaveButton>Save</SaveButton>
  </Actions>
</MaterialSection>

      {/* Upload and Images */}
      <UploadSection>
        <UploadBox>
          <p>Click to upload or Drag and Drop</p>
          <span>Max 800x400px PNG or JPG</span>
        </UploadBox>
        <ImageGrid>
          {images.map((img, idx) => (
            <ImageCard key={idx}>
              <RemoveIcon onClick={() => handleRemoveImage(idx)}>✕</RemoveIcon>
              <ImagePreview src={img} alt="product" />
            </ImageCard>
          ))}
        </ImageGrid>
      </UploadSection>

      {/* Actions */}
    
    </PageWrapper>
  );
};

export default ProductMaterialForm;