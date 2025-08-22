import React from "react";
import {
  PageWrapper,
  Header,
  TitleWrapper,
  Title,
  Subtitle,
  AddButton,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductInfo,
  QuantityInput,
  BackButton,
} from "./ViewProduct.Styles";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar"
import { useNavigate } from 'react-router-dom';
const ProductPage = () => {
    const navigate = useNavigate();
  const products = [
    { id: 1, name: "JSW Roofing sheets", size: "254 sq ft/m²", img: "/images/sheet.webp" },
    { id: 2, name: "JSW Roofing sheets", size: "254 sq ft/m²", img: "/images/sheet.webp" },
    { id: 3, name: "JSW Roofing sheets", size: "254 sq ft/m²", img: "/images/sheet.webp" },
    { id: 4, name: "JSW Roofing sheets", size: "254 sq ft/m²", img: "/images/sheet.webp" },
    { id: 5, name: "JSW Roofing sheets", size: "254 sq ft/m²", img: "/images/sheet.webp" },
  ];

  return (
    <>
    <Navbar/>
    <PageWrapper>
      {/* Header */}
      <Header>
          <TitleWrapper>
    <BackButton onClick={() => navigate(-1)}>
      <FaArrowLeft />
    </BackButton>
    <Title>Product</Title>
  </TitleWrapper>
       <AddButton onClick={() => navigate('/add-product')}>
  Add product
</AddButton>
      </Header>

      <Subtitle>
        Easily add new products to your store with images, pricing, descriptions, 
        and stock details, keeping your listings updated for customers.
      </Subtitle>

      {/* Product Grid */}
      <ProductsGrid>
        {products.map(({ id, name, size, img }) => (
          <ProductCard key={id}>
            <ProductImage src={img} alt={name} />
            <ProductTitle>{name}</ProductTitle>
            <ProductInfo>
              <QuantityInput type="number" value={254} readOnly />
              <span>{size}</span>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </PageWrapper>
    </>
  );
};

export default ProductPage;
