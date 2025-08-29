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
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByIdAPI } from "../../service/productService";
import { deleteProduct } from "../../redux/productSlice";
import { useDispatch } from "react-redux";
const ProductCard = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedThickness, setSelectedThickness] = useState(null);
  const [product, setProduct] = useState(null);
  console.log(product);
  console.log("selectedColor=", selectedColor);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id))
          .unwrap()
          .then(() => {
            Swal.fire(
              "Deleted!",
              "Your product has been deleted.",
              "success"
            ).then(() => {
              navigate("/view-product"); // redirect to homepage after alert
            });
          })
          .catch((err) => {
            console.error("Delete failed:", err);
            Swal.fire("Error!", "Failed to delete product.", "error");
          });
      }
    });
  };
  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductByIdAPI(id);
        setProduct(data);

        // Default selections
        const defaultMaterial = data.materials?.[0] || null;
        const defaultThickness = defaultMaterial?.thicknesses?.[0] || null;
        const defaultColor = defaultThickness?.colors?.[0] || null;

        setSelectedMaterial(defaultMaterial);
        setSelectedThickness(defaultThickness);
        setSelectedColor(defaultColor);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  // Material click
  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
    const firstThickness = material.thicknesses?.[0] || null;
    setSelectedThickness(firstThickness);
    setSelectedColor(firstThickness?.colors?.[0] || null);
  };

  // Thickness click
  const handleThicknessClick = (thickness) => {
    setSelectedThickness(thickness);
    setSelectedColor(thickness?.colors?.[0] || null);
  };

  // Color click
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  const defaultVariantImage =
    product.materials?.[0]?.thicknesses?.[0]?.colors?.[0]?.image ||
    "/images/sheet.webp";

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
            Easily add new products to your store with images, materials,
            colors, thickness, and variant details.
          </p>
          <ButtonGroup>
            <ActionButton
              variant="delete"
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </ActionButton>
            {/* <ActionButton
              variant="edit"
              onClick={() => navigate(`/edit-product/${id}`)}
            >
              Edit
            </ActionButton> */}
          </ButtonGroup>
        </HeaderRow>

        {/* Product Card */}
        <CardWrapper>
          {/* IMAGE */}
          <ImageSection>
            <ProductImage
              src={
                selectedColor?.image ? selectedColor.image : defaultVariantImage
              }
              alt={product.productName}
            />
          </ImageSection>

          <InfoSection>
            {/* Brand */}
            {product.brandIcon && (
              <Logo src={`${product.brandIcon}`} alt={product.brandName} />
            )}
            {/* {product.brandName && (
              <ProductDesc><strong>Brand:</strong> {product.brandName}</ProductDesc>
            )} */}

            {/* Main Info */}
            <ProductTitle>{product.brandName}</ProductTitle>
            <ProductTitle>{product.productName}</ProductTitle>
            <ProductDesc>{product.description}</ProductDesc>

            {/* Primary details */}
            <SectionTitle>Material</SectionTitle>
            <OptionsRow>
              {product.materials.map((m) => (
                <OptionButton
                  key={m._id}
                  selected={selectedMaterial?._id === m._id}
                  onClick={() => handleMaterialClick(m)}
                >
                  {m.materialName}
                </OptionButton>
              ))}
            </OptionsRow>
            <ProductDesc>
              {selectedMaterial?.thicknesses?.length > 0 && (
                <>
                  <SectionTitle>Thickness</SectionTitle>
                  <OptionsRow>
                    {selectedMaterial.thicknesses.map((t) => (
                      <OptionButton
                        key={t._id}
                        selected={selectedThickness?._id === t._id}
                        onClick={() => handleThicknessClick(t)}
                      >
                        {t.thickness}
                      </OptionButton>
                    ))}
                  </OptionsRow>
                </>
              )}
            </ProductDesc>
            <ProductDesc>
              {/* {product.primaryColor}{" "} */}
              {selectedThickness?.colors?.length > 0 && (
                <>
                  <SectionTitle style={{ marginTop: "-2rem" }}>
                    Color:
                  </SectionTitle>
                  <OptionsRow>
                    {selectedThickness.colors.map((c) => (
                      <div key={c._id} style={{ textAlign: "center" }}>
                        <ColorSwatch
                          color={c.colorCode}
                          selected={selectedColor?._id === c._id}
                          onClick={() => handleColorClick(c)}
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
                  </OptionsRow>
                </>
              )}
            </ProductDesc>

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

            {selectedMaterial?.colors?.length > 0 && (
              <>
                <SectionTitle>Color</SectionTitle>
                <OptionsRow>
                  {selectedMaterial.colors.map((c) => (
                    <div key={c._id}>
                      <ColorSwatch
                        color={c.colorCode}
                        selected={selectedColor?.colorName === c.colorName}
                        onClick={() => handleColorClick(c)}
                      />
                      <p>{c.colorName}</p>
                    </div>
                  ))}
                </OptionsRow>
              </>
            )}

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
