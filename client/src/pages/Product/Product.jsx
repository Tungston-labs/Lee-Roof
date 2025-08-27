// AddFullProductPage.jsx
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductForm from "./Add_product/AddProduct";
import ProductMaterialForm from "./Add_product/MaterialAdd";
import VariantForm from "./Add_product/AddVarient";

const AddFullProductPage = () => {
const [formData, setFormData] = useState({
  product: {
    brandIcon: "",
    brandName: "",
    productName: "",
    description: "",
  },
  materials: {              
    materials: [],
    images: [],
  },
  variants: [],
});

  const handleUpdate = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

const handleSubmit = async () => {
  try {
    const form = new FormData();

    // Brand icon
    if (formData.product.brandIconFile) { // store actual file, not URL
      form.append("brandIcon", formData.product.brandIconFile);
    }

    // Product info as JSON string
    form.append("product", JSON.stringify(formData.product));
    form.append("materials", JSON.stringify(formData.materials));
    form.append("variants", JSON.stringify(formData.variants));

    const response = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: form, // do NOT set Content-Type: JSON
    });

    const data = await response.json();

    if (response.ok) {
      alert("Form submitted successfully ✅");
    } else {
      alert("Failed to submit ❌: " + data.error);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};




  return (
    <div style={{ padding: "20px" }}>
     

      {/* Step 1: Product Details */}
    <ProductForm
  data={formData.product}
  onUpdate={(updatedProduct) =>
    setFormData((prev) => ({ ...prev, product: updatedProduct }))
  }
/>

      {/* Step 2: Materials */}
     <ProductMaterialForm
  data={formData.materials}
  onUpdate={(updatedData) =>
    setFormData((prev) => ({ ...prev, materials: updatedData }))
  }
/>


      {/* Step 3: Variants */}
 <VariantForm
  data={formData.variants}
  materials={formData.materials.materials} 
  savedImages={formData.materials.images}  
  onUpdate={(updatedVariants) =>
    setFormData((prev) => ({ ...prev, variants: updatedVariants }))
  }
/>



      <hr />

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit All
      </button>
    </div>
  );
};

export default AddFullProductPage;
