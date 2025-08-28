// Ourproducts.jsx
import React, { useEffect, useState } from "react";
import {
  Section,
  HeaderWrapper,
  Title,
  IntroText,
  BrandPill,
  BrandPillLogo,
  BrandPillText,
  Card,
  ImageWrapper,
  ProductImage,
  CardContent,
  CardHeader,
  Logo,
  LogoImage,
  CardTitle,
  CardDescription,
  Options,
  OptionGroup,
  OptionLabel,
  OptionValues,
  OptionValue,
  Colors,
  ColorRectangle,
  ViewMore,
  FooterNote,
  AddToCartBtn,
} from "./Ourproducts.style";

import { BsArrowReturnLeft } from "react-icons/bs"; // back arrow
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";

const OurProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  const [selections, setSelections] = useState({});
  const [expanded, setExpanded] = useState(null);

  const initSelectionForProduct = (product) => {
    const id = product._id || product.productName;
    const firstMaterial = product.materials?.[0];
    const materialName = firstMaterial?.materialName ?? "GI";
    const firstThickness = firstMaterial?.thicknesses?.[0];
    const thicknessValue = firstThickness?.thickness ?? "0.35 mm";
    return {
      material: materialName,
      thickness: thicknessValue,
      colorIndex: 0,
    };
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // initialize selections when products load
  useEffect(() => {
    if (products.length > 0) {
      const selObj = {};
      products.forEach((p) => {
        const id = p._id || p.productName;
        selObj[id] = initSelectionForProduct(p);
      });
      setSelections(selObj);
    }
  }, [products]);

  const updateSelection = (productId, newValues) => {
    setSelections((prev) => ({
      ...prev,
      [productId]: {
        ...(prev[productId] || {}),
        ...newValues,
      },
    }));
  };


  // Render placeholder when no products loaded
  if (loading) {
    return (
      <Section>
        <HeaderWrapper>
          <Title>Our Products</Title>
          <IntroText>Loading products...</IntroText>
        </HeaderWrapper>
      </Section>
    );
  }

  return (
    <Section>
      {/* Hide heading + intro when a product is expanded */}
      {!expanded && (
        <HeaderWrapper>
          <Title>Our Products</Title>
          <IntroText>
            We offer a wide variety of high-quality roofing solutions, including
            metal roofing sheets, performance materials, and complete roofing
            accessories. At Lee Roofs, quality meets trust. Whether you’re a
            builder, architect, or homeowner, our range of roofing products is
            designed to combine aesthetics with superior protection. Committed to
            excellence, we ensure that our roofing sheets not only last longer but
            also provide lasting comfort and energy savings. Explore our brands
            below.
          </IntroText>
        </HeaderWrapper>
      )}

      {/* Back Arrow visible only when product expanded */}
      {expanded && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            marginBottom: "16px",
            color: "#004D7B",
            fontWeight: "500",
            fontSize: "16px",
          }}
          onClick={() => setExpanded(null)}
        >
          <BsArrowReturnLeft size={22} color="#004D7B" />
          Back to all products
        </div>
      )}

      {/* Show error if any */}
      {error && (
        <div style={{ color: "red", marginBottom: 16 }}>
          {error}
        </div>
      )}

      {/* If no products */}
      {products.length === 0 && !loading && !error && (
        <div style={{ marginBottom: 24 }}>No products found.</div>
      )}

      {/* Render products dynamically */}
      {products.map((product, idx) => {
        const id = product._id || product.productName;
        const sel = selections[id] || initSelectionForProduct(product);

        // Materials array from API: each has materialName and thicknesses
        const materials = product.materials ?? [];

        // Material options
        const materialOptions = materials.map((m) => m.materialName);

        // selected material object
        const selectedMaterialObj = materials.find((m) => m.materialName === sel.material) || materials[0] || { thicknesses: [] };

        // thickness options for selected material
        const thicknessOptions = selectedMaterialObj.thicknesses?.map((t) => t.thickness) ?? [];

        // selected thickness object
        const selectedThicknessObj =
          selectedMaterialObj.thicknesses?.find((t) => t.thickness === sel.thickness) ||
          selectedMaterialObj.thicknesses?.[0] ||
          { colors: [] };

        const colors = selectedThicknessObj.colors ?? [];

        // Decide product image: prefer selected color image, then brandIcon, else empty
        const productImageSrc = (colors[sel.colorIndex] && colors[sel.colorIndex].image) || product.brandIcon || "";

        return (
          // preserve alternating reverse layout like original (JSW normal, TATA reverse, JSL normal)
          <React.Fragment key={id}>
            <BrandPill>
              <BrandPillLogo src={product.brandIcon || ""} alt={`${product.brandName || product.productName} logo`} />
              <BrandPillText>{product.productName ?? product.brandName ?? "Product"}</BrandPillText>
            </BrandPill>

            <Card $reverse={idx % 2 === 1}>
              <ImageWrapper>
                <ProductImage src={productImageSrc} alt={`${product.brandName || product.productName} Sheet`} />
              </ImageWrapper>
              <CardContent>
                <CardHeader>
                  <Logo>
                    <LogoImage src={product.brandIcon || ""} alt={`${product.brandName || product.productName} Logo`} />
                  </Logo>
                  <CardTitle>{(product.brandName ?? "Brand") + " Roofing Sheets"}</CardTitle>
                </CardHeader>
                <CardDescription>
                  {product.description ?? "High quality roofing sheets."}
                </CardDescription>
                <Options>
                  <OptionGroup>
                    <OptionLabel>Material</OptionLabel>
                    <OptionValues>
                      {/* If no material options exist, fallback to GI/Al-Zn to avoid breaking UI */}
                      {(materialOptions.length > 0 ? materialOptions : ["GI", "Al-Zn"]).map((m) => (
                        <OptionValue
                          key={m}
                          active={sel.material === m}
                          onClick={() =>
                            updateSelection(id, {
                              material: m,
                              // reset thickness to first thickness of new material
                              thickness:
                                (materials.find((mat) => mat.materialName === m)?.thicknesses?.[0]?.thickness) ??
                                sel.thickness,
                              colorIndex: 0,
                            })
                          }
                        >
                          {m}
                        </OptionValue>
                      ))}
                    </OptionValues>
                  </OptionGroup>
                  <OptionGroup>
                    <OptionLabel>Thickness</OptionLabel>
                    <OptionValues>
                      {/* If no thickness options exist, fallback to typical list */}
                      {(thicknessOptions.length > 0 ? thicknessOptions : ["0.35 mm", "0.40 mm", "0.45 mm"]).map((t) => (
                        <OptionValue
                          key={t}
                          active={sel.thickness === t}
                          onClick={() => updateSelection(id, { thickness: t, colorIndex: 0 })}
                        >
                          {t}
                        </OptionValue>
                      ))}
                    </OptionValues>
                  </OptionGroup>
                </Options>
                <Colors>
                  {/* Show colors from selected thickness. If none, show some placeholders */}
                  {(colors.length > 0 ? colors : [
                    { colorCode: "#FFFFFF", colorName: "White" },
                    { colorCode: "#008479", colorName: "Teal Green" },
                    { colorCode: "#1F4492", colorName: "Royal Blue" },
                  ]).map((c, ci) => (
                    <ColorRectangle
                      key={ci}
                      style={{ background: c.colorCode ?? c.colorCode ?? c.color }}
                      title={c.colorName ?? c.colorName ?? `color-${ci}`}
                      onClick={() => updateSelection(id, { colorIndex: ci })}
                    />
                  ))}
                </Colors>
                {expanded === id ? (
                  <AddToCartBtn>Add to cart</AddToCartBtn>
                ) : (
                  <ViewMore onClick={() => setExpanded(id)}>
                    Click to view more
                  </ViewMore>
                )}
              </CardContent>
            </Card>
          </React.Fragment>
        );
      })}

      {/* Always visible footer */}
      <FooterNote>
        Whether you're building a new home, upgrading a commercial site, or tackling an industrial project,
        Lee Roofs is your trusted partner. We offer more than just materials <br /> —we offer guidance, reliability,
        and quality that lasts for years.
      </FooterNote>
    </Section>
  );
};

export default OurProducts;
