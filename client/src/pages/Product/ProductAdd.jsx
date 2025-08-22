import React, { useState } from "react";
import {
  FormContainer,
  UploadContainer,
  UploadBox,
  UploadPreview,
  UploadInfo,
  RemoveButton,
  InputGroup,
  Label,
  Input,
  Button,
  ColorPicker,
} from "./ProductAdd.Styles";
import { FaUpload } from "react-icons/fa";

const ProductForm = () => {
  const [primaryImage, setPrimaryImage] = useState(null);
  const [brandIcon, setBrandIcon] = useState(null);
  const [thicknesses, setThicknesses] = useState([]);
  const [thicknessInput, setThicknessInput] = useState("");
  const [productName, setProductName] = useState("");
  const [productColor, setProductColor] = useState("");
  const [material, setMaterial] = useState("");

  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      if (type === "primary") setPrimaryImage({ file, preview });
      if (type === "brand") setBrandIcon({ file, preview });
    }
  };

  const removeFile = (type) => {
    if (type === "primary") setPrimaryImage(null);
    if (type === "brand") setBrandIcon(null);
  };

  const addThickness = () => {
    if (!thicknessInput.trim()) return;
    const newThicknesses = thicknessInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
    setThicknesses((prev) => [...prev, ...newThicknesses]);
    setThicknessInput("");
  };

  const removeThickness = (index) => {
    setThicknesses((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FormContainer>
      <h2>Product</h2>
      <p>
        Easily add new products to your store with images, pricing,
        descriptions, and stock details.
      </p>

      <UploadContainer>
        {/* Primary Display Image */}
        <UploadBox>
          <label htmlFor="primary-upload">
            <FaUpload size={22} />
            <p>Click to upload or Drag and Drop<br />Max 10 MB, png only</p>
          </label>
          <input
            id="primary-upload"
            type="file"
            accept="image/png"
            hidden
            onChange={(e) => handleUpload(e, "primary")}
          />
          {primaryImage && (
            <UploadPreview>
              <img src={primaryImage.preview} alt={primaryImage.file.name} />
              <UploadInfo>
                {primaryImage.file.name} {(primaryImage.file.size / 1024 / 1024).toFixed(1)} MB
              </UploadInfo>
              <RemoveButton onClick={() => removeFile("primary")}>×</RemoveButton>
            </UploadPreview>
          )}
        </UploadBox>

        {/* Product Brand Icon */}
        <UploadBox>
          <label htmlFor="brand-upload">
            <FaUpload size={22} />
            <p>Click to upload or Drag and Drop<br />Max 10 MB, png only</p>
          </label>
          <input
            id="brand-upload"
            type="file"
            accept="image/png"
            hidden
            onChange={(e) => handleUpload(e, "brand")}
          />
          {brandIcon && (
            <UploadPreview>
              <img src={brandIcon.preview} alt={brandIcon.file.name} />
              <UploadInfo>
                {brandIcon.file.name} {(brandIcon.file.size / 1024 / 1024).toFixed(1)} MB
              </UploadInfo>
              <RemoveButton onClick={() => removeFile("brand")}>×</RemoveButton>
            </UploadPreview>
          )}
        </UploadBox>

        {/* Product Name Dropdown/Input */}
        <InputGroup style={{ flex: 1 }}>
          <Label>Product Name</Label>
          <Input
            type="text"
            placeholder="Product name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            list="product-options"
          />
          <datalist id="product-options">
            <option value="Roof Sheet" />
            <option value="Metal Sheet" />
            <option value="Tile" />
          </datalist>
        </InputGroup>
      </UploadContainer>

      {/* Thickness Section */}
      <InputGroup>
        <Label>Thickness</Label>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Input
            placeholder="Enter Thickness"
            value={thicknessInput}
            onChange={(e) => setThicknessInput(e.target.value)}
          />
          <Button type="button" onClick={addThickness}>+ Add</Button>
        </div>
        <div style={{ marginTop: "8px" }}>
          {thicknesses.map((t, index) => (
            <span key={index} style={{ marginRight: "8px", background: "#eee", padding: "2px 6px", borderRadius: "4px" }}>
              {t} <span onClick={() => removeThickness(index)} style={{ cursor: "pointer", color: "red" }}>×</span>
            </span>
          ))}
        </div>
      </InputGroup>

      {/* Product Color and Material */}
      <InputGroup>
        <Label>Product Color</Label>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <Input
            placeholder="Product Colour"
            value={productColor}
            onChange={(e) => setProductColor(e.target.value)}
          />
          <ColorPicker type="color" value={productColor} onChange={(e) => setProductColor(e.target.value)} />
        </div>
      </InputGroup>

      <InputGroup>
        <Label>Material</Label>
        <Input
          placeholder="Material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
      </InputGroup>

      {/* Save / Cancel Buttons */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "16px" }}>
        <Button style={{ background: "red" }}>Cancel</Button>
        <Button style={{ background: "#004D7B", color: "#fff" }}>Save</Button>
      </div>
    </FormContainer>
  );
};

export default ProductForm;
