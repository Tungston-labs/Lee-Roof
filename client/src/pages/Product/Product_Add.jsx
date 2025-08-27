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
import {
  FormWrapper,
  Row,
  Select,
  Input,
  ColorInput,
  Button,
  AddVariantButton,
  Header,
} from "./AddVarient.Styles";
import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar"
// import MaterialAdd from "./MaterialAdd"
// import AddVarient from "./AddVarient"
import MultiStepForm from "../../../components/Navbar/multistep/MultiStepForm";
import { FaArrowLeft } from "react-icons/fa";

const ProductForm = () => {
 const [step, setStep] = useState(1);
      const totalSteps = 3;


      const VariantForm = () => {
       const [step, setStep] = useState(1);
          const totalSteps = 3;
  const [variants, setVariants] = useState([
    {
      material: "",
      thickness: "",
      colors: [{ image: "", color: "" }],
    },
  ]);

  // Add new Variant (Material + Thickness + Color rows)
  const addVariant = () => {
    setVariants([
      ...variants,
      { material: "", thickness: "", colors: [{ image: "", color: "" }] },
    ]);
  };

  // Update variant field (material or thickness)
  const handleVariantChange = (index, field, value) => {
    const updated = [...variants];
    updated[index][field] = value;
    setVariants(updated);
  };

  // Update color row inside a variant
  const handleColorChange = (vIndex, cIndex, field, value) => {
    const updated = [...variants];
    updated[vIndex].colors[cIndex][field] = value;
    setVariants(updated);
  };

  // Add new color row inside a variant
  const addColorRow = (vIndex) => {
    const updated = [...variants];
    updated[vIndex].colors.push({ image: "", color: "" });
    setVariants(updated);
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
    
  
    </>
  );
};


  return (
    <FormWrapper>
                     <div>
      <MultiStepForm currentStep={3} totalSteps={3} />

      {/* <div style={{ marginTop: '20px' }}>
        <button onClick={() => setStep(s => Math.max(1, s - 1))}>Back</button>
        <button onClick={() => setStep(s => Math.min(totalSteps, s + 1))}>Next</button>
      </div> */}
    </div>
<Header>
  <span>
    Easily add new products to your store with images, pricing,
    descriptions, and stock details, keeping your listings updated for
    customers.
  </span>

  <div style={{ display: "flex", gap: "10px" }}>
    <button
      style={{
        padding: "10px 26px",
        borderRadius: "6px",
        border: "none",
       color:"red",
        cursor: "pointer",
        background:"white"
      }}
    >
      Cancel
    </button>
    <button
      style={{
        padding: "8px 16px",
        borderRadius: "6px",
        border: "none",
        background: "#004D7B",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Save
    </button>
  </div>
</Header>


      {variants.map((variant, vIndex) => (
        <div key={vIndex}>
          {/* Material + Thickness Row */}
          <Row>
            <Select
              value={variant.material}
              onChange={(e) =>
                handleVariantChange(vIndex, "material", e.target.value)
              }
            >
              <option value="">Material</option>
              <option value="Steel">Steel</option>
              <option value="Aluminium">Aluminium</option>
            </Select>
            </Row>
  {/* Variant Row (Thickness + Color Options in SAME line) */}
{variant.colors.map((colorRow, cIndex) => (
  <Row key={cIndex}>
    {/* Thickness */}
    <Select
      value={variant.thickness}
      onChange={(e) =>
        handleVariantChange(vIndex, "thickness", e.target.value)
      }
    >
      <option value="">Item thickness</option>
      <option value="0.5mm">0.5mm</option>
      <option value="1mm">1mm</option>
      <option value="2mm">2mm</option>
    </Select>

    {/* Image */}
    <Select
      value={colorRow.image}
      onChange={(e) =>
        handleColorChange(vIndex, cIndex, "image", e.target.value)
      }
    >
      <option value="">Image</option>
      <option value="img1.png">Image 1</option>
      <option value="img2.png">Image 2</option>
    </Select>

    {/* Colour name */}
    <Input
      type="text"
      placeholder="Colour"
      value={colorRow.color}
      onChange={(e) =>
        handleColorChange(vIndex, cIndex, "color", e.target.value)
      }
    />

    {/* Color Picker */}
    <ColorInput type="color" />

    {/* Add new color row */}
    <Button type="button" onClick={() => addColorRow(vIndex)}>
      + Add
    </Button>
  </Row>
))}
 </div>
        
      ))}

      <AddVariantButton type="button" onClick={addVariant}>
        + Add Variant
      </AddVariantButton>
    </FormWrapper>
    </PageWrapper>
  );
};

export default VariantForm;


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

export default ProductForm;