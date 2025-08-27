import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductForm from "./Add_product/AddProduct";
import ProductMaterialForm from "./Add_product/MaterialAdd";
import VariantForm from "./Add_product/AddVarient";

const AddFullProductPage = ({ existingProduct }) => {
  const [formData, setFormData] = useState({
    product: {
      brandIconFile: null,
      brandIconUrl: "", 
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

  useEffect(() => {
    if (existingProduct) {
      setFormData({
        product: {
          brandIconFile: null, 
          brandIconUrl: existingProduct.brandIcon || "",
          brandName: existingProduct.brandName || "",
          productName: existingProduct.productName || "",
          description: existingProduct.description || "",
        },
        materials: {
          materials: existingProduct.materials || [],
          images: existingProduct.materials
            ? existingProduct.materials.flatMap((mat) =>
                (mat.thicknesses || []).flatMap((th) =>
                  (th.colors || []).map((c) => c.image).filter(Boolean)
                )
              )
            : [],
        },
        variants: existingProduct.variants || [],
      });
    }
  }, [existingProduct]);

  const handleSubmit = async () => {
    try {
      // Build normalized materials array by merging variants into materials
      const baseMaterials = formData.materials.materials || []; // from MaterialAdd
      const variants = formData.variants || []; // from VariantForm

      // Normalize function to convert your variant shape -> backend shape
      const normalizeThicknesses = (thicknesses = []) =>
        thicknesses.map((th) => ({
          thickness: th.thickness || "",
          colors: (th.colors || []).map((c) => ({
            colorName: c.color || "", // name field in VariantForm was `color`
            colorCode: c.colorHex || "", // hex color was stored as `colorHex`
            image: c.image || null,
          })),
        }));

      // Start with baseMaterials and replace thicknesses if variant exists for that material
      const merged = baseMaterials.map((mat) => {
        const v = variants.find((x) => x.material === mat.materialName);
        if (v) {
          return {
            ...mat,
            thicknesses: normalizeThicknesses(v.thicknesses),
          };
        }
        // keep existing thicknesses if any
        return { ...mat, thicknesses: mat.thicknesses || [] };
      });

      // Also include any variants whose material wasn't present in baseMaterials
      variants.forEach((v) => {
        const exists = merged.some((m) => m.materialName === v.material);
        if (!exists) {
          merged.push({
            materialName: v.material,
            thicknesses: normalizeThicknesses(v.thicknesses),
          });
        }
      });

      // Now prepare FormData
      const form = new FormData();
      if (formData.product.brandIconFile)
        form.append("brandIcon", formData.product.brandIconFile);
      form.append("brandName", formData.product.brandName || "");
      form.append("productName", formData.product.productName || "");
      form.append("description", formData.product.description || "");
      // IMPORTANT: send merged array (not the wrapper object)
      form.append("materials", JSON.stringify(merged));
      form.append("variants", JSON.stringify(formData.variants || []));

      // send request (same as before)
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        body: form,
      });
      const data = await response.json();
      if (response.ok) alert("Form submitted successfully");
      else alert("Failed to submit: " + (data.error || JSON.stringify(data)));
    } catch (err) {
      console.error("submit error", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />

      <ProductForm
        data={formData.product}
        onUpdate={(updatedProduct) =>
          setFormData((prev) => ({
            ...prev,
            product: { ...prev.product, ...updatedProduct },
          }))
        }
      />

      <ProductMaterialForm
        data={formData.materials}
        onUpdate={(updatedMaterials) =>
          setFormData((prev) => ({
            ...prev,
            materials: { ...prev.materials, ...updatedMaterials },
          }))
        }
      />

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
