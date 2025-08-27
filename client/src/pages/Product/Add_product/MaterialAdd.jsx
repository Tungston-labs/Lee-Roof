import React, { useState } from "react";
import axios from "axios";
import {
  PageWrapper,
  Header,
  Title,
  Subtitle,
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

const ProductMaterialForm = ({ data, onUpdate }) => {
  const { materials = [], images = [] } = data;

  const [inputValue, setInputValue] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleAddMaterial = () => {
    if (inputValue && !materials.some((m) => m.materialName === inputValue)) {
      const updatedMaterials = [...materials, { materialName: inputValue, thicknesses: [] }];
      onUpdate({ ...data, materials: updatedMaterials });
      setInputValue("");
    }
  };

  const handleRemoveMaterial = (matName) => {
    const updatedMaterials = materials.filter((m) => m.materialName !== matName);
    onUpdate({ ...data, materials: updatedMaterials });
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    onUpdate({ ...data, images: updatedImages });
  };

  const handleUpload = async (files) => {
    const uploadedUrls = [];
    setUploading(true);

    const token = localStorage.getItem("token");

    for (const file of files) {
      const formData = new FormData();
      formData.append("images", file);

      try {
        const res = await axios.post("http://localhost:5000/api/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data && res.data.images) {
          res.data.images.forEach((img) => uploadedUrls.push(img.url));
        }
      } catch (err) {
        console.error("Upload failed for", file.name, err);
      }
    }

    onUpdate({ ...data, images: [...images, ...uploadedUrls] });
    setUploading(false);
  };

  return (
    <PageWrapper>
      <div>
        <MultiStepForm currentStep={2} totalSteps={3} />
      </div>

      <Header>
        <div>
          <Title>Add product image and material</Title>
          <Subtitle>
            Easily add new products to your store with images, pricing, descriptions, and stock
            details, keeping your listings updated for customers.
          </Subtitle>
        </div>
      </Header>

      {/* Material Input */}
      <MaterialSection>
        <div style={{ display: "flex", gap: "0.75rem", flex: 1 }}>
          <Input
            type="text"
            placeholder="Material"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <AddButton onClick={handleAddMaterial}>+ Add</AddButton>
        </div>

        <TagsWrapper>
          {materials.map((mat, idx) => (
            <Tag key={idx}>
              {mat.materialName}
              <span onClick={() => handleRemoveMaterial(mat.materialName)}>✕</span>
            </Tag>
          ))}
        </TagsWrapper>

        <Actions>
          <CancelButton>Cancel</CancelButton>
          <SaveButton onClick={() => onUpdate(data)}>Save</SaveButton>
        </Actions>
      </MaterialSection>

      {/* Upload and Images */}
      <UploadSection>
        <input
          type="file"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          id="fileInput"
          onChange={(e) => handleUpload(Array.from(e.target.files))}
        />

        <UploadBox onClick={() => document.getElementById("fileInput").click()}>
          <p>{uploading ? "Uploading..." : "Click to upload or Drag and Drop"}</p>
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
    </PageWrapper>
  );
};

export default ProductMaterialForm;
