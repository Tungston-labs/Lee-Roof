import React, { useState, useEffect } from "react";
import {
  CardWrapper,
  ImageSection,
  InfoSection,
  ProductImage,
  ProductTitle,
  ProductDesc,
  SectionTitle,
  OptionsRow,
  OptionButton,
  ColorSwatch,
  ButtonGroup,
  ActionButton,
  Logo,
  HeaderRow,
  BackButton,
  PageWrapper,
  Title,
  TitleWrapper,
} from "./Productcard.Styles";

import Navbar from "../../components/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByIdAPI } from "../../service/productService";

const ProductCard = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedThickness, setSelectedThickness] = useState("");
  const [product, setProduct] = useState(null);
console.log(product)
console.log("selectedColor=",selectedColor)
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductByIdAPI(id);
        setProduct(data);
console.log("data",data)
        // set default selections from primary fields
        const defaultMaterial =
          data.variants.find(v => v.material === data.primaryMaterial) ||
          data.variants[0];
console.log("defaultMaterial=",defaultMaterial)
        const defaultColor =
          defaultMaterial?.colors.find(c => c.name === data.primaryColor) ||
          defaultMaterial?.colors[0];

        const defaultThickness =
          defaultColor?.thickness.find(t => t.value === data.primaryThickness) ||
          defaultColor?.thickness[0];

        setSelectedMaterial(defaultMaterial);
        setSelectedColor(defaultColor);
        setSelectedThickness(defaultThickness?.value || "");
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Handle Material Click
  const handleMaterialClick = (variant) => {
    setSelectedMaterial(variant);
    setSelectedColor(variant.colors[0] || null);
    setSelectedThickness(variant.colors[0]?.thickness[0]?.value || "");
  };

  // Handle Color Click
  const handleColorClick = (color) => {
    setSelectedColor(color);
    setSelectedThickness(color.thickness[0]?.value || "");
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <TitleWrapper>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <Title>Product</Title>
        </TitleWrapper>

        <HeaderRow>
          <p>
            Easily add new products to your store with images, materials, colors,
            thickness, and variant details.
          </p>
          <ButtonGroup>
            <ActionButton variant="delete">Delete</ActionButton>
            <ActionButton
              variant="edit"
              onClick={() => navigate(`/edit-product/${id}`)}
            >
              Edit
            </ActionButton>
          </ButtonGroup>
        </HeaderRow>

        {/* Product Card */}
        <CardWrapper>
          {/* IMAGE */}
          <ImageSection>
            <ProductImage
              src={
                selectedColor?.image
                  ? `${selectedColor.image}`
                  : product.primaryImage
                  ? `${product.primaryImage}`
                  : "/images/sheet.webp"
              }
              alt={product.name}
            />
          </ImageSection>

          <InfoSection>
            {/* Brand */}
            {product.brandIcon && (
              <Logo
                src={`${product.brandIcon}`}
                alt={product.brandName}
              />
            )}
            {/* {product.brandName && (
              <ProductDesc><strong>Brand:</strong> {product.brandName}</ProductDesc>
            )} */}

            {/* Main Info */}
            <ProductTitle>{product.name}</ProductTitle>
            <ProductDesc>{product.description}</ProductDesc>

            {/* Primary details */}
            <ProductDesc>
              <strong>Material:</strong> {product.primaryMaterial}
            </ProductDesc>
            <ProductDesc>
              <strong>Color:</strong> 
              {/* {product.primaryColor}{" "} */}
              {product.primaryColorCode && (
                <span
                  style={{
                    display: "inline-block",
                    width: "16px",
                    height: "16px",
                    background: product.primaryColorCode,
                    borderRadius: "50%",
                    marginLeft: "6px",
                  }}
                />
              )}
            </ProductDesc>
            <ProductDesc>
              <strong>Thickness:</strong> {product.primaryThickness}
            </ProductDesc>

            {/* Material Options */}
            {product.variants?.length > 0 && (
              <>
                <SectionTitle>Material</SectionTitle>
                <OptionsRow>
                  {product.variants.map((variant) => (
                    <OptionButton
                      key={variant.material}
                      selected={selectedMaterial?.material === variant.material}
                      onClick={() => handleMaterialClick(variant)}
                    >
                      {variant.material}
                    </OptionButton>
                  ))}
                </OptionsRow>
              </>
            )}

            {/* Color Options */}
            {selectedMaterial?.colors?.length > 0 && (
              <>
                <SectionTitle>Color</SectionTitle>
                <OptionsRow>
                  {selectedMaterial.colors.map((c) => (
                    <ColorSwatch
                      key={c.name}
                      color={c.code}
                      selected={selectedColor?.name === c.name}
                      onClick={() => handleColorClick(c)}
                    />
                  ))}
                </OptionsRow>
              </>
            )}

            {/* Thickness Options */}
            {selectedColor?.thickness?.length > 0 && (
              <>
                <SectionTitle>Thickness</SectionTitle>
                <OptionsRow>
                  {selectedColor.thickness.map((t) => (
                    <OptionButton
                      key={t.value}
                      selected={selectedThickness === t.value}
                      onClick={() => setSelectedThickness(t.value)}
                    >
                      {t.value}
                    </OptionButton>
                  ))}
                </OptionsRow>
              </>
            )}
          </InfoSection>
        </CardWrapper>
      </PageWrapper>
    </>
  );
};

export default ProductCard;
