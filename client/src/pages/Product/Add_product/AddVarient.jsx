import React from "react";
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
import ImageDropdown from "../../../components/ImageDropDown";
import { FaTrash } from "react-icons/fa"; // install with npm i react-icons

const VariantForm = ({ data, materials = [], savedImages = [], onUpdate }) => {
  const handleVariantsChange = (updatedVariants) => {
    onUpdate(updatedVariants);
  };

  const addVariant = () => {
    handleVariantsChange([
      ...data,
      {
        material: "",
        thicknesses: [
          { thickness: "", colors: [{ image: "", color: "", colorHex: "#000000" }] },
        ],
      },
    ]);
  };

  const handleMaterialChange = (vIndex, value) => {
    const updated = [...data];
    updated[vIndex].material = value;
    handleVariantsChange(updated);
  };

  const handleThicknessChange = (vIndex, tIndex, value) => {
    const updated = [...data];
    updated[vIndex].thicknesses[tIndex].thickness = value;
    handleVariantsChange(updated);
  };

  const handleColorChange = (vIndex, tIndex, cIndex, field, value) => {
    const updated = [...data];
    updated[vIndex].thicknesses[tIndex].colors[cIndex][field] = value;
    handleVariantsChange(updated);
  };

  const addColorRow = (vIndex, tIndex) => {
    const updated = [...data];
    updated[vIndex].thicknesses[tIndex].colors.push({
      image: "",
      color: "",
      colorHex: "#000000",
    });
    handleVariantsChange(updated);
  };

  const addThicknessRow = (vIndex) => {
    const updated = [...data];
    updated[vIndex].thicknesses.push({
      thickness: "",
      colors: [{ image: "", color: "", colorHex: "#000000" }],
    });
    handleVariantsChange(updated);
  };

  // 👉 Add these handler functions
const removeVariant = (vIndex) => {
  const updated = [...data];
  updated.splice(vIndex, 1);
  handleVariantsChange(updated);
};

const removeThicknessRow = (vIndex, tIndex) => {
  const updated = [...data];
  updated[vIndex].thicknesses.splice(tIndex, 1);
  handleVariantsChange(updated);
};

const removeColorRow = (vIndex, tIndex, cIndex) => {
  const updated = [...data];
  updated[vIndex].thicknesses[tIndex].colors.splice(cIndex, 1);
  handleVariantsChange(updated);
};

  return (
    <FormWrapper>
      <div>
        <MultiStepForm currentStep={3} totalSteps={3} />
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
              color: "red",
              cursor: "pointer",
              background: "white",
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

     {data.map((variant, vIndex) => (
  <div
    key={vIndex}
    style={{
      marginBottom: 20,
      border: "1px solid #ddd",
      padding: 15,
      borderRadius: 8,
    }}
  >
    {/* Variant Header with remove */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
      }}
    >
      <h4 style={{ margin: 0 }}>Variant {vIndex + 1}</h4>
      <button
        type="button"
        onClick={() => removeVariant(vIndex)}
        style={{
          background: "transparent",
          border: "none",
          color: "red",
          cursor: "pointer",
        }}
      >
        <FaTrash />
      </button>
    </div>

    <Row>
      <Select
        value={variant.material}
        onChange={(e) => handleMaterialChange(vIndex, e.target.value)}
      >
        <option value="">Select material</option>
        {materials.length === 0 && <option disabled>No materials</option>}
        {materials.map((m, i) => (
          <option key={i} value={m.materialName}>
            {m.materialName}
          </option>
        ))}
      </Select>
    </Row>

    {variant.thicknesses.map((th, tIndex) => (
      <div
        key={tIndex}
        style={{
          marginTop: 10,
          border: "1px dashed #ccc",
          padding: 10,
          borderRadius: 6,
        }}
      >
        {/* Thickness Row with remove */}
        <Row>
          <Input
            type="text"
            placeholder="Enter thickness"
            value={th.thickness}
            onChange={(e) => handleThicknessChange(vIndex, tIndex, e.target.value)}
          />
          <button
            type="button"
            onClick={() => removeThicknessRow(vIndex, tIndex)}
            style={{
              marginLeft: 10,
              background: "transparent",
              border: "none",
              color: "red",
              cursor: "pointer",
            }}
          >
            <FaTrash />
          </button>
        </Row>

        {th.colors.map((colorRow, cIndex) => (
          <Row key={cIndex}>
            <ImageDropdown
              images={savedImages}
              value={colorRow.image}
              onChange={(val) =>
                handleColorChange(vIndex, tIndex, cIndex, "image", val)
              }
            />
            <Input
              type="text"
              placeholder="Colour name"
              value={colorRow.color}
              onChange={(e) =>
                handleColorChange(vIndex, tIndex, cIndex, "color", e.target.value)
              }
            />
            <ColorInput
              type="color"
              value={colorRow.colorHex || "#000000"}
              onChange={(e) =>
                handleColorChange(vIndex, tIndex, cIndex, "colorHex", e.target.value)
              }
            />
            <Button type="button" onClick={() => addColorRow(vIndex, tIndex)}>
              + Add Color
            </Button>

            {/* Remove Color */}
            <button
              type="button"
              onClick={() => removeColorRow(vIndex, tIndex, cIndex)}
              style={{
                marginLeft: 10,
                background: "transparent",
                border: "none",
                color: "red",
                cursor: "pointer",
              }}
            >
              <FaTrash />
            </button>
          </Row>
        ))}

        <Button type="button" onClick={() => addThicknessRow(vIndex)}>
          + Add Thickness
        </Button>
      </div>
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