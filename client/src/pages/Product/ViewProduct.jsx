import React, { useEffect, useState } from "react";
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
  BackButton,
} from "./ViewProduct.Styles";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { getProductsAPI } from "../../service/productService"; 

const ProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsAPI();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []); // 👈 no need for [id] here

  return (
    <>
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <Header>
          <TitleWrapper>
            <BackButton onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </BackButton>
            <Title>Product</Title>
          </TitleWrapper>
          <AddButton onClick={() => navigate("/add-product")}>
            Add product
          </AddButton>
        </Header>

        <Subtitle>
          Easily add new products to your store with images, pricing, descriptions,
          and stock details, keeping your listings updated for customers.
        </Subtitle>

        {/* Product Grid */}
        <ProductsGrid>
          {products.length > 0 ? (
            products.map(({ _id, name, size, primaryImage }) => (
              <ProductCard
                key={_id}
                onClick={() => navigate(`/products-card/${_id}`)} // navigate to detail page
                style={{ cursor: "pointer" }}
              >
                <ProductImage
                  src={
                    primaryImage
                      ? `http://localhost:5000/${primaryImage}`
                      : "/images/sheet.webp"
                  }
                  alt={name}
                />
                <ProductTitle>{name}</ProductTitle>
              </ProductCard>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </ProductsGrid>
      </PageWrapper>
    </>
  );
};

export default ProductPage;
