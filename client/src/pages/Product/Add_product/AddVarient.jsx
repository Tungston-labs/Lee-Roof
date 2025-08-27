import React, { useState } from "react";
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
import MultiStepForm from "../../../components/Navbar/multistep/MultiStepForm";

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
  );
};

export default VariantForm;