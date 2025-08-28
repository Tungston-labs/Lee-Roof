import React, { useState, useEffect } from "react";
import jswLogo from "../../assets/jsw.png"; // Local JSW brand logo
import {
  BrandPill,
  BrandPillLogo,
  BrandPillText,
  CardsWrapper,
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
  AddToCartButton,
} from "./jsw.style";

const Jsw = () => {
  const [card1, setCard1] = useState({
    material: "GI",
    thickness: "0.35 mm",
  });

  const [sheetImage, setSheetImage] = useState(null);

  // Simulate backend call to fetch product image
  useEffect(() => {
    // Replace this with actual backend API call
    fetch("http://localhost:5000/api/jsw-sheet") // Example endpoint
      .then((res) => res.json())
      .then((data) => {
        setSheetImage(data.imageUrl); // backend should return { imageUrl: "http://..." }
      })
      .catch(() => {
        setSheetImage(null);
      });
  }, []);

  return (
    <div>
      {/* Brand pill */}
      <BrandPill>
        <BrandPillLogo src={jswLogo} alt="JSW logo" />
        <BrandPillText>JSW Colouron+</BrandPillText>
      </BrandPill>

      <CardsWrapper>
        <Card>
          {/* Left side: Product image (from backend) */}
          <ImageWrapper>
            {sheetImage ? (
              <ProductImage src={sheetImage} alt="JSW Sheet" />
            ) : (
              <ProductImage
                src="https://via.placeholder.com/550x350.png?text=Loading+Image"
                alt="Loading..."
              />
            )}
          </ImageWrapper>

          {/* Right side: Card content */}
          <CardContent>
            <CardHeader>
              <Logo>
                <LogoImage src={jswLogo} alt="JSW Logo" />
              </Logo>
              <CardTitle>JSW Roofing Sheets</CardTitle>
            </CardHeader>

            <CardDescription>
              Made from high-tensile pure steel and featuring an Al–Zn
              (Galvalume) anti-corrosion layer, JSW roofing sheets offer up to
              4× greater rust resistance, even in coastal or humid environments
              like Kochi, Kerala. Engineered with superior UV-resistant paint
              technology, <b>JSW Colouron+</b> retains its vibrant, crack- and
              peel-resistant finish year after year, providing durable roofing
              solutions.
            </CardDescription>

            {/* Material Options */}
            <Options>
              <OptionGroup>
                <OptionLabel>Material</OptionLabel>
                <OptionValues>
                  {["GI", "Al-Zn"].map((m) => (
                    <OptionValue
                      key={m}
                      active={card1.material === m}
                      onClick={() => setCard1({ ...card1, material: m })}
                    >
                      {m}
                    </OptionValue>
                  ))}
                </OptionValues>
              </OptionGroup>

              {/* Thickness Options */}
              <OptionGroup>
                <OptionLabel>Thickness</OptionLabel>
                <OptionValues>
                  {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
                    <OptionValue
                      key={t}
                      active={card1.thickness === t}
                      onClick={() => setCard1({ ...card1, thickness: t })}
                    >
                      {t}
                    </OptionValue>
                  ))}
                </OptionValues>
              </OptionGroup>
            </Options>

            {/* Colors */}
            <Colors>
              <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
              <ColorRectangle style={{ background: "#1F4492" }} title="Blue" />
              <ColorRectangle style={{ background: "#008479" }} title="Green" />
            </Colors>

            {/* Add to cart button */}
            <AddToCartButton>Add to cart</AddToCartButton>
          </CardContent>
        </Card>
      </CardsWrapper>
    </div>
  );
};

export default Jsw;
