// CombinedProductPage.jsx
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../redux/productSlice";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import {
  PageWrapper,
  TitleWrapper,
  FormWrapper,
  BackButton,
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
} from "./Add_product/AddProduct.Styles";

import {
  MaterialSection,
  AddButton,
  TagsWrapper,
  Tag,
  ImageGrid,
  ImageCard,
  ImagePreview,
  RemoveIcon,
  Actions,
  CancelButton,
  SaveButton,
} from "./Add_product/MaterialAdd.Styles";

import { Row, ColorInput, Button, AddVariantButton } from "./Add_product/AddVarient.Styles";

const API_URL = "http://localhost:5000/api/products"; // adjust if needed

/**
 * Important mapping notes:
 * - backend schema for materials:
 *   materials: [{ materialName, thicknesses: [{ thickness, colors: [{ colorName, colorCode, image }] }] }]
 *
 * - UI uses variants state: [{ material, thickness, colors: [{ name, colorCode, image, imageFile }] }]
 *
 * This component converts between these shapes when fetching / saving.
 */

const CombinedProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: productId } = useParams();

  // Basic info
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [brandName, setBrandName] = useState("");
  const [brandIconFile, setBrandIconFile] = useState(null);
  const [brandIconPreview, setBrandIconPreview] = useState(null);

  // Gallery images: [{ src, file?, isExisting }]
  const [images, setImages] = useState([]);

  // UI-friendly variants
  // variant = { material, thickness, colors: [{ name, colorCode, image, imageFile }] }
  const [variants, setVariants] = useState([
    { material: "", thickness: "", colors: [{ name: "", colorCode: "#000000", image: "", imageFile: null }] },
  ]);

  // A simple materials input (tag style) derived from materials (names only)
  const [materialInput, setMaterialInput] = useState("");
  const [materialTags, setMaterialTags] = useState([]); // array of strings for quick tags

  // ---------- Fetch existing product and prefill ----------
  useEffect(() => {
    if (!productId) return;

  const toAbsolute = (urlOrPath) => {
  if (!urlOrPath) return "";
  if (/^https?:\/\//i.test(urlOrPath)) return urlOrPath; // already absolute
  if (urlOrPath.startsWith("/uploads")) {
    return `${process.env.REACT_APP_API_BASE || "http://localhost:5000"}${urlOrPath}`;
  }
  const base = `${window.location.protocol}//${window.location.host}`;
  return base + (urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`);
};


    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${API_URL}/${productId}`);
        const p = res.data;
        console.debug("Fetched product:", p);

        setProductName(p.productName ?? p.name ?? "");
        setDescription(p.description ?? "");
        setBrandName(p.brandName ?? "");

        if (p.brandIcon) setBrandIconPreview(toAbsolute(p.brandIcon));

        // Gallery images - backend may return p.images or p.primaryImage etc.
        let imgs = [];
        if (Array.isArray(p.images) && p.images.length) imgs = p.images;
        else if (Array.isArray(p.productImages) && p.productImages.length) imgs = p.productImages;
        else if (p.primaryImage) imgs = [p.primaryImage];
        else if (p.image) imgs = Array.isArray(p.image) ? p.image : [p.image];

        setImages((imgs || []).filter(Boolean).map((u, i) => ({ src: toAbsolute(u), isExisting: true, id: `existing-${i}` })));

        // Prefill variants from product.materials (schema you provided)
       // inside fetchProduct()
if (Array.isArray(p.materials) && p.materials.length > 0) {
  const mappedVariants = [];
  const tags = [];

  p.materials.forEach((mat) => {
    const materialName = mat.materialName || "";
    if (materialName) tags.push(materialName);

    (mat.thicknesses || []).forEach((th) => {
      const thicknessVal = th.thickness || "";
      const colors = (th.colors || []).map((c) => ({
        name: c.colorName || "",  // ✅ map to UI "name"
        colorCode: c.colorCode || "#000000",
        image: toAbsolute(c.image || ""),
        imageFile: null,
      }));

      mappedVariants.push({
        material: materialName,   // ✅ matches UI
        thickness: thicknessVal,
        colors: colors.length
          ? colors
          : [{ name: "", colorCode: "#000000", image: "", imageFile: null }],
      });
    });
  });

  setVariants(mappedVariants);
  setMaterialTags([...new Set(tags)]);
} else {
  setVariants([
    { material: "", thickness: "", colors: [{ name: "", colorCode: "#000000", image: "", imageFile: null }] }
  ]);
  setMaterialTags([]);
}

      } catch (err) {
        console.error("Failed to fetch product:", err);
      }
    };

    fetchProduct();
  }, [productId]);

  // ---------- Brand icon preview for newly selected file ----------
  useEffect(() => {
    if (!brandIconFile) return;
    const url = URL.createObjectURL(brandIconFile);
    setBrandIconPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [brandIconFile]);

  // ---------- Materials tag handlers ----------
  const addMaterialTag = () => {
    const v = (materialInput || "").trim();
    if (!v) return;
    if (!materialTags.includes(v)) setMaterialTags((s) => [...s, v]);
    setMaterialInput("");
  };
  const removeMaterialTag = (tag) => setMaterialTags((s) => s.filter((t) => t !== tag));

  // ---------- Gallery handlers ----------
  const handleAddImages = (files) => {
    const arr = Array.from(files).map((file) => ({ file, src: URL.createObjectURL(file), isExisting: false }));
    setImages((s) => [...s, ...arr]);
  };
  const handleRemoveImage = (index) => {
    const img = images[index];
    if (img && !img.isExisting && img.src) URL.revokeObjectURL(img.src);
    setImages((s) => s.filter((_, i) => i !== index));
  };

  // ---------- Variants handlers ----------
  const addVariant = () => setVariants((s) => [...s, { material: "", thickness: "", colors: [{ name: "", colorCode: "#000000", image: "", imageFile: null }] }]);

  const handleVariantChange = (vIndex, field, value) => {
    setVariants((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[vIndex][field] = value;
      return copy;
    });
  };

  const addColorRow = (vIndex) => {
    setVariants((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[vIndex].colors.push({ name: "", colorCode: "#000000", image: "", imageFile: null });
      return copy;
    });
  };

  const handleColorChange = (vIndex, cIndex, field, value) => {
    setVariants((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[vIndex].colors[cIndex][field] = value;
      return copy;
    });
  };

  const handleColorImage = (vIndex, cIndex, file) => {
    const objectUrl = file ? URL.createObjectURL(file) : "";
    setVariants((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      copy[vIndex].colors[cIndex].imageFile = file || null;
      copy[vIndex].colors[cIndex].image = file ? objectUrl : copy[vIndex].colors[cIndex].image || "";
      return copy;
    });
  };

  // ---------- Convert UI variants -> materials schema for backend ----------
  const buildMaterialsPayloadFromVariants = () => {
  const grouped = {};
  variants.forEach((v) => {
    const matName = (v.material || "Unknown").trim();
    if (!grouped[matName]) grouped[matName] = {};
    const thicknessVal = (v.thickness || "").trim() || "Default";
    if (!grouped[matName][thicknessVal]) grouped[matName][thicknessVal] = [];

    (v.colors || []).forEach((c) => {
      grouped[matName][thicknessVal].push({
        colorName: c.name || "",  // ✅ backend expects "colorName"
        colorCode: c.colorCode || "",
        image: typeof c.image === "string" && c.image.startsWith("blob:")
          ? null
          : (c.image || null),
      });
    });
  });

  return Object.keys(grouped).map((matName) => ({
    materialName: matName, // ✅ backend expects "materialName"
    thicknesses: Object.keys(grouped[matName]).map((thk) => ({
      thickness: thk,
      colors: grouped[matName][thk],
    })),
  }));
};


  // ---------- Save handler ----------
  const handleSave = async () => {
    try {
      const formData = new FormData();

      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("brandName", brandName);

      if (brandIconFile) formData.append("brandIcon", brandIconFile);

      // Build materials payload from variants + materialTags
      const materialsPayload = buildMaterialsPayloadFromVariants();
      formData.append("materials", JSON.stringify(materialsPayload));

      // Append gallery images (new files)
      images.forEach((img) => {
        if (!img.isExisting && img.file) {
          formData.append("images", img.file);
        } else if (img.isExisting && img.src) {
          // optional: tell server to keep existing gallery images
          formData.append("existingImages", img.src);
        }
      });

      // Append variant color image files using naming convention:
      // colorImage_<safeMaterial>_<safeColorName>
      variants.forEach((variant) => {
        (variant.colors || []).forEach((color) => {
          if (color.imageFile) {
            const safeMaterial = (variant.material || "material").replace(/\s+/g, "_");
            const safeColorName = (color.name || "color").replace(/\s+/g, "_");
            const fieldKey = `colorImage_${safeMaterial}_${safeColorName}`;
            formData.append(fieldKey, color.imageFile);
          }
        });
      });

      if (!productId) {
        alert("No product id found — this form is for editing. If you want create, implement create flow.");
        return;
      }

      await dispatch(updateProduct({ id: productId, formData })).unwrap();

      alert("✅ Product updated successfully");
      navigate(-1);
    } catch (err) {
      console.error("Save failed:", err);
      alert("❌ Failed to save product: " + (err?.message || JSON.stringify(err)));
    }
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
            <Title>Edit Product</Title>
          </TitleWrapper>
          <Subtitle>Update product details, materials, images and variants from one page.</Subtitle>
        </Header>

        {/* Basic Info */}
        <FormWrapper style={{ marginTop: 16 }}>
          <UploadSection>
            <Label>Product Brand Icon</Label>
            <UploadBox>
              <input type="file" accept="image/*" onChange={(e) => setBrandIconFile(e.target.files[0] || null)} />
              <p>Click to upload or Drag and Drop</p>
              <span>Max 800x400px PNG or JPG</span>

              {brandIconPreview && (
                <div style={{ marginTop: 8 }}>
                  <img src={brandIconPreview} alt="brand preview" style={{ width: 120, height: "auto", borderRadius: 6 }} />
                </div>
              )}
            </UploadBox>
          </UploadSection>

          <RightSection>
            <div style={{ marginBottom: 12 }}>
              <Label>Product Brand name</Label>
              <Select value={brandName} onChange={(e) => setBrandName(e.target.value)}>
                <option value="">Select Brand</option>
                <option value="Brand A">Brand A</option>
                <option value="Brand B">Brand B</option>
              </Select>
            </div>

            <div style={{ marginBottom: 12 }}>
              <Label>Product name</Label>
              <Input type="text" placeholder="Product name" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>

            <div style={{ marginBottom: 12 }}>
              <Label>Product Description</Label>
              <Textarea placeholder="Product Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
          </RightSection>
        </FormWrapper>

        {/* Materials tags & gallery */}
        <div style={{ marginTop: 20 }}>
          <MaterialSection>
            <div style={{ display: "flex", gap: "0.75rem", flex: 1 }}>
              <Input type="text" placeholder="Material" value={materialInput} onChange={(e) => setMaterialInput(e.target.value)} />
              <AddButton onClick={addMaterialTag}>+ Add</AddButton>
            </div>

            <TagsWrapper style={{ marginTop: 12 }}>
              {materialTags.map((mat, idx) => (
                <Tag key={idx}>
                  {mat} <span onClick={() => removeMaterialTag(mat)} style={{ cursor: "pointer", marginLeft: 6 }}>✕</span>
                </Tag>
              ))}
            </TagsWrapper>

            <Actions style={{ justifyContent: "flex-end", marginTop: 12 }}>
              <CancelButton onClick={() => setMaterialInput("")}>Cancel</CancelButton>
              <SaveButton onClick={() => {/* optional: save materials separately */}}>Save</SaveButton>
            </Actions>
          </MaterialSection>

          <UploadSection style={{ marginTop: 12 }}>
            <Label>Product Images / Gallery</Label>
            <UploadBox>
              <input type="file" accept="image/*" multiple onChange={(e) => handleAddImages(e.target.files)} />
              <p>Click to upload or Drag and Drop</p>
              <span>Max 800x400px PNG or JPG</span>
            </UploadBox>

            <ImageGrid style={{ marginTop: 12 }}>
              {images.map((img, idx) => (
                <ImageCard key={img.id || idx}>
                  <RemoveIcon onClick={() => handleRemoveImage(idx)}>✕</RemoveIcon>
                  <ImagePreview src={img.src} alt={`img-${idx}`} />
                </ImageCard>
              ))}
            </ImageGrid>
          </UploadSection>
        </div>

        {/* Variants (mapped to material -> thickness -> colors on save) */}
        <div style={{ marginTop: 28 }}>
          <Header style={{ alignItems: "center" }}>
            <div>
              <Title style={{ fontSize: 18 }}>Variants</Title>
              <Subtitle style={{ marginTop: 6 }}>Add the product variants (material, thickness, color). These will be grouped into materials → thicknesses → colors on save.</Subtitle>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
              <button
                style={{
                  padding: "10px 26px",
                  borderRadius: "6px",
                  border: "none",
                  color: "red",
                  cursor: "pointer",
                  background: "white",
                }}
                onClick={() => navigate(-1)}
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
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </Header>

          <div style={{ marginTop: 12 }}>
            {variants.map((variant, vIndex) => (
              <div key={vIndex} style={{ marginBottom: 18, padding: 12, border: "1px solid #eee", borderRadius: 8 }}>
                <Row style={{ marginBottom: 8 }}>
                  <Select value={variant.material} onChange={(e) => handleVariantChange(vIndex, "material", e.target.value)}>
                    <option value="">Material</option>
                    {/* show quick material tags as options too */}
                    {materialTags.map((t) => <option key={t} value={t}>{t}</option>)}
                    <option value="Steel">Steel</option>
                    <option value="Aluminium">Aluminium</option>
                    <option value="GI">GI</option>
                  </Select>

                  <Select value={variant.thickness} onChange={(e) => handleVariantChange(vIndex, "thickness", e.target.value)}>
                    <option value="">Item thickness</option>
                    <option value="0.5mm">0.5mm</option>
                    <option value="1mm">1mm</option>
                    <option value="2mm">2mm</option>
                  </Select>
                </Row>

                {(variant.colors || []).map((colorRow, cIndex) => (
                  <Row key={cIndex} style={{ alignItems: "center", gap: 10 }}>
                    <Input type="text" placeholder="Colour name" value={colorRow.name} onChange={(e) => handleColorChange(vIndex, cIndex, "name", e.target.value)} />

                    <ColorInput type="color" value={colorRow.colorCode || "#000000"} onChange={(e) => handleColorChange(vIndex, cIndex, "colorCode", e.target.value)} />

                    <div>
                      <input type="file" accept="image/*" onChange={(e) => handleColorImage(vIndex, cIndex, e.target.files[0] || null)} />
                      {colorRow.image && <img src={colorRow.image} alt="color" style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 4, marginLeft: 8 }} />}
                    </div>

                    <Button type="button" onClick={() => addColorRow(vIndex)}>+ Add Color</Button>
                  </Row>
                ))}
              </div>
            ))}

            <AddVariantButton type="button" onClick={addVariant}>+ Add Variant</AddVariantButton>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default CombinedProductPage;
