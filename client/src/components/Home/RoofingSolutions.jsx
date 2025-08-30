import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice"; // adjust path

import {
  Section,
  Title,
  IntroText,
  CardsWrapper,
  Card,
  CardContent,
  CardHeader,
  Logo,
  CardTitle,
  CardDescription,
  ImagePlaceholder,
  Options,
  OptionGroup,
  OptionLabel,
  OptionValue,
  Colors,
  ColorRectangle,
  ViewMore,
  LogoImage,
  HeaderWrapper,
  OptionValues,
} from "./RoofingSolutions.style";
import { useNavigate } from "react-router-dom";
const RoofingSolutions = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [cardStates, setCardStates] = useState({});

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const uniqueBrands = React.useMemo(() => {
    const seen = new Set();
    return products.filter((p) => {
      if (seen.has(p.brandName)) return false;
      seen.add(p.brandName);
      return true;
    });
  }, [products]);

  useEffect(() => {
    if (uniqueBrands.length) {
      const initial = {};
      uniqueBrands.forEach((brand) => {
        initial[brand.brandName] = {
          material: brand.materials?.[0]?.materialName || "",
          thickness: brand.materials?.[0]?.thicknesses?.[0]?.thickness || "",
        };
      });
      setCardStates(initial);
    }
  }, [uniqueBrands]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Section>
      <HeaderWrapper>
        <Title>
          Explore Our <br /> Roofing Solutions
        </Title>
        <IntroText>
          At Lee Roofs, we build lasting relationships with engineers,
          architects, and homeowners by delivering high-quality roofing
          solutions backed by expertise and trust.
        </IntroText>
      </HeaderWrapper>

      <CardsWrapper>
        {uniqueBrands.map((brand, idx) => {
          const cardState = cardStates[brand.brandName] || {};

          // 🔑 Get the currently selected material + thickness
          const selectedMaterial = brand.materials.find(
            (m) => m.materialName === cardState.material
          );
          const selectedThickness = selectedMaterial?.thicknesses.find(
            (t) => t.thickness === cardState.thickness
          );

          const selectedImage = selectedThickness?.colors?.[0]?.image;

          return (
            <Card key={brand._id} $reverse={idx % 2 !== 0}>
              <ImagePlaceholder>
                <img src={selectedImage} alt={brand.productName} width="100%" />
              </ImagePlaceholder>
              <CardContent>
                <CardHeader>
                  <Logo>
                    <LogoImage
                      src={brand.brandIcon}
                      alt={`${brand.brandName} Logo`}
                    />
                  </Logo>
                  <CardTitle>{brand.brandName}</CardTitle>
                </CardHeader>

                <CardDescription>{brand.description}</CardDescription>

                <Options>
                  {/* Material options */}
                  <OptionGroup>
                    <OptionLabel>Material</OptionLabel>
                    <OptionValues>
                      {brand.materials.map((m) => (
                        <OptionValue
                          key={m.materialName}
                          active={cardState.material === m.materialName}
                          onClick={() =>
                            setCardStates((prev) => ({
                              ...prev,
                              [brand.brandName]: {
                                ...prev[brand.brandName],
                                material: m.materialName,
                                thickness:
                                  m.thicknesses?.[0]?.thickness ||
                                  prev[brand.brandName]?.thickness,
                              },
                            }))
                          }
                        >
                          {m.materialName}
                        </OptionValue>
                      ))}
                    </OptionValues>
                  </OptionGroup>

                  {/* Thickness options */}
                  <OptionGroup>
                    <OptionLabel>Thickness</OptionLabel>
                    <OptionValues>
                      {selectedMaterial?.thicknesses.map((t) => (
                        <OptionValue
                          key={t.thickness}
                          active={cardState.thickness === t.thickness}
                          onClick={() =>
                            setCardStates((prev) => ({
                              ...prev,
                              [brand.brandName]: {
                                ...prev[brand.brandName],
                                thickness: t.thickness,
                              },
                            }))
                          }
                        >
                          {t.thickness}
                        </OptionValue>
                      ))}
                    </OptionValues>
                  </OptionGroup>
                </Options>

                {/* Colors */}
                <Colors>
                  {selectedThickness?.colors.map((c) => (
                    <div key={c._id} style={{ textAlign: "center" }}>
                      <ColorRectangle style={{ background: c.colorCode }} />
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
<ViewMore onClick={() => navigate("/products")}>
          Click to view more
        </ViewMore>
              </CardContent>
            </Card>
          );
        })}
      </CardsWrapper>
    </Section>
  );
};

export default RoofingSolutions;
