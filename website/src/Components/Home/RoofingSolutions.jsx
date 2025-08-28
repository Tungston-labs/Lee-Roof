// RoofingSolutions.js
import React, { useState } from "react";
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

// ✅ Import logos
import jswLogo from "../../assets/jsw.png";
import tataLogo from "../../assets/TATA.png";
import jslLogo from "../../assets/jsl.png";

const RoofingSolutions = () => {
  // Independent selectable state for each card
  const [card1, setCard1] = useState({ material: "GI", thickness: "0.35 mm" });
  const [card2, setCard2] = useState({ material: "GI", thickness: "0.35 mm" });
  const [card3, setCard3] = useState({ material: "GI", thickness: "0.35 mm" });


  return (
    <Section>
      <HeaderWrapper>
        <Title>
          Explore Our <br /> Roofing Solutions
        </Title>
        <IntroText>
          At Lee Roofs, we build lasting relationships with engineers, architects,
          and homeowners by delivering high-quality roofing solutions backed by
          expertise and trust. Committed to sustainability and ongoing
          improvements, we continually refine our products and processes so you
          receive premium roofing sheets on time and at competitive prices across
          South India.
        </IntroText>
      </HeaderWrapper>

      <CardsWrapper>
        {/* Card 1 */}
        <Card>
          <ImagePlaceholder>JSW Image</ImagePlaceholder>
          <CardContent>
            <CardHeader>
              <Logo>
                <LogoImage src={jswLogo} alt="JSW Logo" />
              </Logo>
              <CardTitle>Colouron +</CardTitle>
            </CardHeader>
            <CardDescription>
              Made from high-tensile pure steel and featuring an Al-Zn (Galvalume)
              anti-corrosion layer, JSW roofing sheets offer 4x deeper rust
              resistance, even in coastal or humid environments like Kerala,
              Tamil Nadu, and Andhra Pradesh.
            </CardDescription>

            <Options>
              <OptionGroup>
                <OptionLabel>Material</OptionLabel>
                <OptionValues>
                  <OptionValue
                    active={card1.material === "GI"}
                    onClick={() => setCard1({ ...card1, material: "GI" })}
                  >
                    GI
                  </OptionValue>
                  <OptionValue
                    active={card1.material === "Al-Zn"}
                    onClick={() => setCard1({ ...card1, material: "Al-Zn" })}
                  >
                    Al-Zn
                  </OptionValue>
                </OptionValues>
              </OptionGroup>

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

            <Colors>
              <ColorRectangle style={{ background: "#FFFFFF" }} />
              <ColorRectangle style={{ background: "#008479" }} />
              <ColorRectangle style={{ background: "#1F4492" }} />
            </Colors>

            <ViewMore>Click to view more</ViewMore>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card $reverse>
          <ImagePlaceholder>TATA Image</ImagePlaceholder>
          <CardContent>
            <CardHeader>
              <Logo>
                <LogoImage src={tataLogo} alt="TATA Logo" />
              </Logo>
              <CardTitle>TATA Roofing Sheets</CardTitle>
            </CardHeader>
            <CardDescription>
              Tata Shaktee galvanized sheets with ISI certification and zinc
              coating deliver durability and cost-effective roofing solutions.
              Designed to withstand extreme conditions, they combine corrosion
              resistance, heat resistance, and thermal comfort.
            </CardDescription>

            <Options>
              <OptionGroup>
                <OptionLabel>Material</OptionLabel>
                <OptionValues>
                  <OptionValue
                    active={card2.material === "GI"}
                    onClick={() => setCard2({ ...card2, material: "GI" })}
                  >
                    GI
                  </OptionValue>
                  <OptionValue
                    active={card2.material === "Al-Zn"}
                    onClick={() => setCard2({ ...card2, material: "Al-Zn" })}
                  >
                    Al-Zn
                  </OptionValue>
                </OptionValues>
              </OptionGroup>

              <OptionGroup>
                <OptionLabel>Thickness</OptionLabel>
                <OptionValues>
                  {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
                    <OptionValue
                      key={t}
                      active={card2.thickness === t}
                      onClick={() => setCard2({ ...card2, thickness: t })}
                    >
                      {t}
                    </OptionValue>
                  ))}
                </OptionValues>
              </OptionGroup>
            </Options>

            <Colors>
              <ColorRectangle style={{ background: "#FFFFFF" }} />
              <ColorRectangle style={{ background: "#008479" }} />
              <ColorRectangle style={{ background: "#1F4492" }} />
            </Colors>

            <ViewMore>Click to view more</ViewMore>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card>
          <ImagePlaceholder>JSL Image</ImagePlaceholder>
          <CardContent>
            <CardHeader>
              <Logo>
                <LogoImage src={jslLogo} alt="JSL Logo" />
              </Logo>
              <CardTitle>Jindal Roofing Sheets</CardTitle>
            </CardHeader>
            <CardDescription>
              Jindal’s high-strength Alu-Zinc sheets combine superior durability
              with advanced colour coatings. Designed for long life and reduced
              thermal transfer, they keep interiors cooler while ensuring
              excellent weather resistance.
            </CardDescription>

            <Options>
              <OptionGroup>
                <OptionLabel>Material</OptionLabel>
                <OptionValues>
                  <OptionValue
                    active={card3.material === "GI"}
                    onClick={() => setCard3({ ...card3, material: "GI" })}
                  >
                    GI
                  </OptionValue>
                  <OptionValue
                    active={card3.material === "Al-Zn"}
                    onClick={() => setCard3({ ...card3, material: "Al-Zn" })}
                  >
                    Al-Zn
                  </OptionValue>
                </OptionValues>
              </OptionGroup>

              <OptionGroup>
                <OptionLabel>Thickness</OptionLabel>
                <OptionValues>
                  {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
                    <OptionValue
                      key={t}
                      active={card3.thickness === t}
                      onClick={() => setCard3({ ...card3, thickness: t })}
                    >
                      {t}
                    </OptionValue>
                  ))}
                </OptionValues>
              </OptionGroup>
            </Options>

            <Colors>
              <ColorRectangle style={{ background: "#FFFFFF" }} />
              <ColorRectangle style={{ background: "#1F4492" }} />
            </Colors>

             <ViewMore to="/products">Click to view more</ViewMore>
          </CardContent>
        </Card>
      </CardsWrapper>
    </Section>
  );
};

export default RoofingSolutions;
