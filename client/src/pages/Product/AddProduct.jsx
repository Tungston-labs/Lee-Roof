import React, { useState } from "react";
import {
  PageWrapper,
  Header,
  TitleWrapper,
  Title,
  Subtitle,
  ButtonGroup,
  SaveButton,
  CancelButton,
  UploadBox,
  UploadList,
  UploadItem,
  UploadText,
  Form,
  InputGroup,
  Label,
  Input,
  Textarea,
  ColorPicker,
  AddProductButton,
  UploadInfo,
  UploadImage,
  RemoveButton,
  UploadWrapper,
  ColorRow,
  ButtonWrapper,
  BackButton,
  UploadSection,
  SectionTitle,
  UploadBoxs,
} from "./AddProduct.Styles";
import { FaPlus } from "react-icons/fa";
import { FaArrowLeft, FaUpload, FaTimes } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { AddButton } from "./ViewProduct.Styles";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import namer from "color-namer";
import uploadIcon from "../../assets/client/upload.svg";
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../redux/productSlice";

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.product);

  // Product basic info
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [brandName, setBrandName] = useState("");
  const [primaryMaterial, setPrimaryMaterial] = useState("");

  // Color & thickness
  const [color1, setColor1] = useState("");
  const [color1Hex, setColor1Hex] = useState("#000000");
  const [thicknesses, setThicknesses] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Variant-specific thickness
  const [thicknesses2, setThicknesses2] = useState([]);
  const [inputValue2, setInputValue2] = useState("");

  // Files
  const [primaryImage, setPrimaryImage] = useState(null);
  const [brandIcon, setBrandIcon] = useState(null);
  const [variants, setVariants] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingData, setEditingData] = useState(null);


const handleSave = async () => {
  const formData = new FormData();
  formData.append("name", productName);
  formData.append("description", description);
  formData.append("brandName", brandName);
  formData.append("primaryMaterial", primaryMaterial);
  formData.append("primaryColor", color1);
  formData.append("primaryThickness", thicknesses.join(",")); 
  formData.append("primaryColorCode", color1Hex);

  if (primaryImage) formData.append("primaryImage", primaryImage.file);
  if (brandIcon) formData.append("brandIcon", brandIcon.file);

  // ✅ build variants properly (only metadata)
  const cleanVariants = variants.map((variant) => ({
    material: variant.material,
    colors: [
      {
        name: variant.colorName,
        code: variant.colorCode,
        thickness: variant.thickness
          ? variant.thickness.split(",").map((t) => t.trim())
          : [],
        image: null, // backend will fill once file matches
      },
    ],
  }));

  // ✅ attach color images with correct fieldname
  variants.forEach((variant) => {
    if (variant.image?.file && variant.colorName) {
      const fieldKey = `colorImage_${variant.material}_${variant.colorName}`;
      formData.append(fieldKey, variant.image.file);
    }
  });

  formData.append("variants", JSON.stringify(cleanVariants));

  try {
    await dispatch(createProduct(formData)).unwrap();
    Swal.fire({ 
      icon: "success", 
      title: "Product Saved!", 
      confirmButtonColor: "#004D7B" 
    });
  } catch {
    Swal.fire({ 
      icon: "error", 
      title: "Failed to save product", 
      confirmButtonColor: "#E63946" 
    });
  }
};



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

const addThickness = () => {
  if (!inputValue.trim()) return;

  const newValues = inputValue
    .split(",")
    .map((t) => t.trim())
    .filter((t) => t !== "");

  setThicknesses((prev) => [...prev, ...newValues]);
  setInputValue(""); // clear input
};

  const addThickness2 = () => {
    if (!inputValue2.trim()) return;
    const newThicknesses = inputValue2
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t);
    setThicknesses2((prev) => [...prev, ...newThicknesses]);
    setInputValue2("");
  };


  const handleColorChanges = (e, setHex) => {
    setHex(e.target.value);
  };

  const handleCancel = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Any unsaved changes will be lost!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E63946',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, cancel',
      cancelButtonText: 'No, keep editing'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(-1); // Navigate back to the previous page
      }
    });
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFiles([...files, ...newFiles]);
  };

  // Handle upload
  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const newFile = {
      file,
      preview: URL.createObjectURL(file),
    };

    if (type === "primary") {
      setPrimaryImage(newFile);
    } else {
      setBrandIcon(newFile);
    }
  };

  // Remove uploaded file
  const removeFile = (type) => {
    if (type === "primary") setPrimaryImage(null);
    else setBrandIcon(null);
  };
  const colorNames = {
    "#000000": "Black",
    "#ffffff": "White",
    "#ff0000": "Red",
    "#00ff00": "Green",
    "#0000ff": "Blue",
    "#ffff00": "Yellow",
    "#ffa500": "Orange",
    "#800080": "Purple",
    "#808080": "Gray",
  };

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      {
        material: "",
        thickness: "",
        color: "",
        image: null,
      },
    ]);
  };

  // Handle variant field change
  const handleVariantChange = (index, field, value) => {
    const updated = [...variants];
    updated[index][field] = value;
    setVariants(updated);
  };

  // Handle variant image upload
  const handleVariantImage = (index, e) => {
    const file = e.target.files[0];
    if (!file) return;

    const newFile = {
      file,
      preview: URL.createObjectURL(file),
    };

    const updated = [...variants];
    updated[index].image = newFile;
    setVariants(updated);
  };
  const handleColorNameChange = (index, e) => {
    const updatedVariants = [...variants];
    updatedVariants[index].colorName = e.target.value;
    setVariants(updatedVariants);
  };

  const handleColorChange = (index, e) => {
    const updatedVariants = [...variants];
    updatedVariants[index].colorCode = e.target.value;
    setVariants(updatedVariants);
  };
  const removeThickness2 = (index) => {
    setThicknesses2((prev) => prev.filter((_, i) => i !== index));
  };

  const removeThickness1 = (index) => {
    setThicknesses((prev) => prev.filter((_, i) => i !== index));
  };


  const renderThicknessList = (thicknesses, removeFunc) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
      {thicknesses.map((t, index) => (
        <div
          key={index}
          style={{
            background: "#f0f0f0",
            padding: "4px 8px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <span>{t}</span>
          <button
            type="button"
            onClick={() => removeFunc(index)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              color: "red",
              fontWeight: "bold",
            }}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <Header>
          <TitleWrapper>
            <BackButton onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </BackButton>
            <Title>Product</Title>
          </TitleWrapper>

          <ButtonGroup>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>

            <SaveButton onClick={handleSave}>Save</SaveButton>

          </ButtonGroup>
        </Header>

        <Subtitle>
          Easily add new products to your store with images, pricing, descriptions,
          and stock details, keeping your listings updated for customers.
        </Subtitle>
        <UploadWrapper>
          {/* Primary Display Image */}
          <UploadSection>
            <div>

              <SectionTitle>Primary Display Image</SectionTitle>
              <UploadBox>
                <label htmlFor="primary-upload">
                  <FaUpload size={22} color="#004D7B" />
                  <p>
                    Click to upload or Drag and Drop <br />
                    Max 10 mb File size Only .png file
                  </p>
                </label>
                <input
                  id="primary-upload"
                  type="file"
                  accept="image/png"
                  hidden
                  onChange={(e) => handleUpload(e, "primary")}
                />

              </UploadBox>
            </div>

            {primaryImage && (
              <UploadList>
                <UploadItem>
                  <UploadImage src={primaryImage.preview} alt={primaryImage.file.name} />
                  <UploadInfo>
                    {primaryImage.file.name}{" "}
                    {(primaryImage.file.size / 1024 / 1024).toFixed(1)} MB
                  </UploadInfo>
                  <RemoveButton onClick={() => removeFile("primary")}>×</RemoveButton>
                </UploadItem>
              </UploadList>
            )}
          </UploadSection>

          {/* Product Brand Icon */}
          <UploadSection>
            <div>
              <SectionTitle>Product Brand Icon</SectionTitle>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* Upload Box - LEFT */}
                <UploadBox style={{ flex: 1 }}>
                  <label htmlFor="brand-upload">
                    <FaUpload size={22} color="#004D7B" />
                    <p>
                      Click to upload or Drag and Drop <br />
                      Max 10 mb File size Only .png file
                    </p>
                  </label>
                  <input
                    id="brand-upload"
                    type="file"
                    accept="image/png"
                    hidden
                    onChange={(e) => handleUpload(e, "brand")}
                  />
                </UploadBox>

                {/* Brand Name Input - RIGHT */}
                <div style={{ flex: 1 }}>
                  <label style={{ display: "block", marginBottom: "4px" }}>
                    Brand Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter or select brand"
                    list="brand-options"
                    style={{
                      padding: "6px 10px",
                      border: "1px solid #ccc",
                      borderRadius: "6px",
                      width: "100%",
                    }}
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                  />
                  <datalist id="brand-options">
                    <option value="Tata" />
                    <option value="Jindal" />
                    <option value="Essar" />
                    <option value="JSW" />
                  </datalist>
                </div>
              </div>
            </div>

            {brandIcon && (
              <UploadList>
                <UploadItem style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {/* Brand Icon */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <UploadImage src={brandIcon.preview} alt={brandIcon.file.name} />
                    <UploadInfo>
                      {brandIcon.file.name}{" "}
                      {(brandIcon.file.size / 1024 / 1024).toFixed(1)} MB
                    </UploadInfo>
                    <RemoveButton onClick={() => removeFile("brand")}>×</RemoveButton>
                  </div>

                  {/* Brand Name Input + Dropdown */}

                </UploadItem>
              </UploadList>
            )}
          </UploadSection>

        </UploadWrapper>
        {/* Form */}
        <Form>
          <InputGroup>
            <Label>Product name</Label>

            <Input placeholder="Product name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)} />
          </InputGroup>

         <InputGroup>
  <Label>Thickness</Label>

  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <input
      type="text"
      placeholder="3.2mm,2mm,1.2mm"
      value={inputValue} // bind inputValue, not thicknesses
      onChange={(e) => setInputValue(e.target.value)}
      style={{ flex: 1, padding: "8px" }}
    />

    <button
      type="button"
      onClick={addThickness}
      style={{
        padding: "8px 12px",
        background: "#004D7B",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      + Add
    </button>
  </div>

  {/* Render the list below the input */}
  {thicknesses.length > 0 && renderThicknessList(thicknesses, removeThickness1)}
</InputGroup>


          <InputGroup>
            <Label>Product color</Label>
            <ColorRow>
              <Input
                style={{ flex: 2, marginRight: "8px" }}
                placeholder="Product Colour"
              // value={color1}
              // onChange={(e) => setColor1(e.target.value)}
              />
              <Input
                style={{ flex: 1, marginRight: "8px" }}
                placeholder="Product Colour Code"
                value={color1}
                onChange={(e) => setColor1(e.target.value)}
              />
              <ColorPicker
                type="color"
                value={color1Hex}
                onChange={(e) => handleColorChanges(e, setColor1, setColor1Hex)}
              />
            </ColorRow>

            {/* Second Color */}

          </InputGroup>



          <InputGroup style={{ gridColumn: "span 1" }}>
            <Label>Description</Label>
            <Textarea placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} />
          </InputGroup>


          <InputGroup style={{ marginTop: "-80px" }}>
            <Label>Material</Label>
            <Input placeholder="Material"
              value={primaryMaterial}
              onChange={(e) => setPrimaryMaterial(e.target.value)}
            />
          </InputGroup>

          <ButtonWrapper style={{ gridColumn: "span 2", justifyContent: "center" }}>
            <AddButton onClick={handleAddVariant}>
              <FaPlus style={{ marginRight: "8px" }} /> Add Variant
            </AddButton>
          </ButtonWrapper>
        </Form>

        {/* Render Variants */}
        {variants.map((variant, index) => (
          <Form
            key={index}
            style={{
              marginTop: "20px",
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
              position: "relative", // so cancel button can be positioned
            }}
          >

            {/* Edit Button */}
            <button
              type="button"
              onClick={() => {

                setEditingIndex(index);
                setEditingData(variants[index]);
              }}
              style={{
                position: "absolute",
                top: "8px",
                right: "40px", // place it left of close button
                background: "transparent",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
                color: "#1890ff", // blue color for edit
              }}
            >
              <FiEdit />
            </button>

            {/* Cancel Button */}

            <button
              type="button"
              onClick={() => {
                const updated = variants.filter((_, i) => i !== index);
                setVariants(updated);
              }}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "transparent",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                color: "#ff4d4f", // red cancel color
              }}
            >
              ×
            </button>
            {/* <h3>Variant {index + 1}</h3> */}


            <InputGroup>
              <Label>Material</Label>
              <Input
                placeholder="Material"
                value={variant.material}
                onChange={(e) => handleVariantChange(index, "material", e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <Label>Thickness</Label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                  type="text"
                  placeholder="0.4mm,1.2mm"
                  value={inputValue2}
                  onChange={(e) => setInputValue2(e.target.value)}
                  style={{ flex: 1, padding: "8px" }}
                />
                <button type="button" onClick={addThickness2} style={{ padding: "8px 12px", background: "#004D7B", color: "white" }}>
                  + Add
                </button>
              </div>
              {renderThicknessList(thicknesses2, removeThickness2)}
            </InputGroup>

            <InputGroup>
              <Label>Product Color</Label>
              <ColorRow>
                {/* Color Name */}
                <Input
                  style={{ flex: 3 }}
                  placeholder="Product Colour"
                  value={variant.colorName || ""}
                  onChange={(e) => handleColorNameChange(index, e)}
                />

                {/* Color Code (hex value) */}
                <Input
                  style={{ flex: 2 }}
                  placeholder="Color Code"
                  value={variant.colorCode || ""}
                  readOnly
                />

                {/* Color Picker */}
                <ColorPicker
                  type="color"
                  value={variant.colorCode || "#000000"}
                  onChange={(e) => handleColorChange(index, e)}
                />
              </ColorRow>
            </InputGroup>


            <InputGroup>
              <Label>Product Image</Label>
              <UploadBoxs
                style={{
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "-1%",
                }}
              >
                <label
                  htmlFor={`variant-upload-${index}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                  }}
                >
                  <img src={uploadIcon} alt="upload" width={38} height={38} />
                </label>
                <input
                  id={`variant-upload-${index}`}
                  type="file"
                  accept="image/png"
                  hidden
                  onChange={(e) => handleVariantImage(index, e)}
                />

                {variant.image && (
                  <UploadList style={{ margin: 0 }}>
                    <UploadItem
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <UploadImage src={variant.image.preview} alt={variant.image.file.name} />
                      <UploadInfo>
                        {variant.image.file.name}{" "}
                        {(variant.image.file.size / 1024 / 1024).toFixed(1)} MB
                      </UploadInfo>
                      <RemoveButton
                        onClick={() => {
                          const updated = [...variants];
                          updated[index].image = null;
                          setVariants(updated);
                        }}
                      >
                        ×
                      </RemoveButton>
                    </UploadItem>
                  </UploadList>
                )}
              </UploadBoxs>
            </InputGroup>
          </Form>
        ))}
      </PageWrapper>
    </>
  );
};

export default ProductForm;
