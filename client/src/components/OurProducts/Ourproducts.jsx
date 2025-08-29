// OurProducts.jsx
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
import { addToCart } from "../../redux/cartSlice";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";
import Swal from "sweetalert2";

const OurProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  const [expanded, setExpanded] = useState(null);
  const [selections, setSelections] = useState({});

  // Initialize default material/thickness selection
  const initSelection = (product) => {
    const firstMaterial = product.materials?.[0];
    const material = firstMaterial?.materialName ?? "GI";
    const firstThickness = firstMaterial?.thicknesses?.[0];
    const thickness = firstThickness?.thickness ?? "0.35 mm";
    return { material, thickness, colorIndex: 0 };
  };

  // Fetch products
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Initialize selections after products load
  useEffect(() => {
    if (products.length > 0) {
      const selObj = {};
      products.forEach((p) => {
        const id = p._id || p.productName;
        selObj[id] = initSelection(p);
      });
      setSelections(selObj);
    }
  }, [products]);

  // Update selection for product
  const updateSelection = (id, values) => {
    setSelections((prev) => ({
      ...prev,
      [id]: { ...prev[id], ...values },
    }));
  };

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

  if (error) {
    return (
      <Section>
        <HeaderWrapper>
          <Title>Our Products</Title>
          <IntroText style={{ color: "red" }}>{error}</IntroText>
        </HeaderWrapper>
      </Section>
    );
  }

  return (
    <Section>
      {/* Header text hidden when product expanded */}
      {!expanded && (
        <HeaderWrapper>
          <Title>Our Products</Title>
          <IntroText>
            We offer a wide variety of high-quality roofing solutions, including
            metal roofing sheets, performance materials, and complete roofing
            accessories. At Lee Roofs, quality meets trust. Whether you’re a
            builder, architect, or homeowner, our range of roofing products is
            designed to combine aesthetics with superior protection. Committed
            to excellence, we ensure that our roofing sheets not only last
            longer but also provide lasting comfort and energy savings. Explore
            our brands below.
          </IntroText>
        </HeaderWrapper>
      )}

      {/* Back button when expanded */}
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

      {/* Render products */}
      {products.map((product, idx) => {
        const id = product._id || product.productName;
        const sel = selections[id] || initSelection(product);

        const materials = product.materials ?? [];
        const materialOptions = materials.map((m) => m.materialName);
        const selectedMaterialObj = materials.find(
          (m) => m.materialName === sel.material
        ) ||
          materials[0] || { thicknesses: [] };
        const thicknessOptions =
          selectedMaterialObj.thicknesses?.map((t) => t.thickness) ?? [];
        const selectedThicknessObj = selectedMaterialObj.thicknesses?.find(
          (t) => t.thickness === sel.thickness
        ) ||
          selectedMaterialObj.thicknesses?.[0] || { colors: [] };
        const colors = selectedThicknessObj.colors ?? [];
        const productImage =
          (colors[sel.colorIndex] && colors[sel.colorIndex].image) ||
          product.brandIcon ||
          "";

        return (
          (!expanded || expanded === id) && (
            <React.Fragment key={id}>
              {/* Brand pill */}
              <BrandPill>
                <BrandPillLogo
                  src={product.brandIcon || ""}
                  alt={`${product.brandName} logo`}
                />
                <BrandPillText>{product.productName}</BrandPillText>
              </BrandPill>

              {/* Product card */}
              <Card $reverse={idx % 2 === 1}>
                <ImageWrapper>
                  <ProductImage
                    src={productImage}
                    alt={`${product.brandName} Sheet`}
                  />
                </ImageWrapper>
                <CardContent>
                  <CardHeader>
                    <Logo>
                      <LogoImage
                        src={product.brandIcon || ""}
                        alt={`${product.brandName} logo`}
                      />
                    </Logo>
                    <CardTitle>{product.brandName} Roofing Sheets</CardTitle>
                  </CardHeader>
                  <CardDescription>{product.description}</CardDescription>

                  {/* Material + Thickness options */}
                  <Options>
                    <OptionGroup>
                      <OptionLabel>Material</OptionLabel>
                      <OptionValues>
                        {(materialOptions.length > 0
                          ? materialOptions
                          : ["GI", "Al-Zn"]
                        ).map((m) => (
                          <OptionValue
                            key={m}
                            active={sel.material === m}
                            onClick={() =>
                              updateSelection(id, {
                                material: m,
                                thickness:
                                  materials.find(
                                    (mat) => mat.materialName === m
                                  )?.thicknesses?.[0]?.thickness ??
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
                        {(thicknessOptions.length > 0
                          ? thicknessOptions
                          : ["0.35 mm", "0.40 mm"]
                        ).map((t) => (
                          <OptionValue
                            key={t}
                            active={sel.thickness === t}
                            onClick={() =>
                              updateSelection(id, {
                                thickness: t,
                                colorIndex: 0,
                              })
                            }
                          >
                            {t}
                          </OptionValue>
                        ))}
                      </OptionValues>
                    </OptionGroup>
                  </Options>

                  {/* Colors */}
                  <Colors>
                    {(colors.length > 0
                      ? colors
                      : [{ colorCode: "#FFFFFF", colorName: "White" }]
                    ).map((c, ci) => (
                      <div key={ci} style={{ textAlign: "center" }}>
                        <ColorRectangle
                          style={{ background: c.colorCode }}
                          onClick={() =>
                            updateSelection(id, { colorIndex: ci })
                          }
                        />
                        <p
                          style={{
                            color: c.colorCode,
                            marginTop: "0.5rem",
                            fontFamily: "Helvetica, sans-serif",
                          }}
                        >
                          {c.colorName}
                        </p>
                      </div>
                    ))}
                  </Colors>

                  {expanded === id ? (
                    <AddToCartBtn
                      onClick={() => {
                        const selectedColor =
                          colors[sel.colorIndex]?.colorName || "Default Color";

                        dispatch(
                          addToCart({
                            id,
                            name: product.productName,
                            description: product.description,
                            image: productImage,
                            material: sel.material,
                            thickness: sel.thickness,
                            color: selectedColor,
                            qty: 1,
                          })
                        );

                        Swal.fire({
                          title: "Added to Cart!",
                          text: `${product.productName} (${sel.material}, ${sel.thickness}, ${selectedColor}) has been added successfully.`,
                          icon: "success",
                          confirmButtonColor: "#004D7B",
                          timer: 1500,
                          showConfirmButton: false,
                          position: "top-end",
                          toast: true,
                        });
                      }}
                    >
                      Add to cart
                    </AddToCartBtn>
                  ) : (
                    <ViewMore onClick={() => setExpanded(id)}>
                      Click to view more
                    </ViewMore>
                  )}
                </CardContent>
              </Card>
            </React.Fragment>
          )
        );
      })}

      {/* Footer note always visible */}
      <FooterNote>
        Whether you're building a new home, upgrading a commercial site, or
        tackling an industrial project, Lee Roofs is your trusted partner. We
        offer more than just materials <br /> —we offer guidance, reliability,
        and quality that lasts for years.
      </FooterNote>
    </Section>
  );
};

export default OurProducts;
