// // // Ourproducts.jsx
// // import React, { useState } from "react";
// // import {
// //   Section,
// //   HeaderWrapper,
// //   Title,
// //   IntroText,
// //   BrandPill,
// //   BrandPillLogo,
// //   BrandPillText,
// //   CardsWrapper,
// //   Card,
// //   ImageWrapper,
// //   ProductImage,
// //   CardContent,
// //   CardHeader,
// //   Logo,
// //   LogoImage,
// //   CardTitle,
// //   CardDescription,
// //   Options,
// //   OptionGroup,
// //   OptionLabel,
// //   OptionValues,
// //   OptionValue,
// //   Colors,
// //   ColorRectangle,
// //   ViewMore,
// //   FooterNote,
// // } from "./Ourproducts.style";

// // import jswLogo from "../../assets/jsw.png";
// // import tataLogo from "../../assets/TATA.png";
// // import jslLogo from "../../assets/jsl.png";

// // const OurProducts = () => {
// //   const [card1, setCard1] = useState({ material: "GI", thickness: "0.35 mm" });
// //   const [card2, setCard2] = useState({ material: "GI", thickness: "0.35 mm" });
// //   const [card3, setCard3] = useState({ material: "GI", thickness: "0.35 mm" });

// //   return (
// //     <Section>
// //       <HeaderWrapper>
// //         <Title>Our Products</Title>
// //         <IntroText>
// //           We offer a wide variety of high-quality roofing solutions, including
// //           metal roofing sheets, performance materials, and complete roofing
// //           accessories. At Lee Roofs, quality meets trust. Whether you’re a
// //           builder, architect, or homeowner, our range of roofing products is
// //           designed to combine aesthetics with superior protection. Committed to
// //           excellence, we ensure that our roofing sheets not only last longer but
// //           also provide lasting comfort and energy savings. Explore our brands
// //           below.
// //         </IntroText>
// //       </HeaderWrapper>


// //       {/* ===== JSW ===== */}
// //       <BrandPill>
// //         <BrandPillLogo src={jswLogo} alt="JSW logo" />
// //         <BrandPillText>JSW Colouron+</BrandPillText>
// //       </BrandPill>

// //       <Card>
// //         <ImageWrapper>
// //           {/* backend sheet image here */}
// //           <ProductImage src="" alt="JSW Sheet" />
// //         </ImageWrapper>
// //         <CardContent>
// //           <CardHeader>
// //             <Logo>
// //               <LogoImage src={jswLogo} alt="JSW Logo" />
// //             </Logo>
// //             <CardTitle>JSW Roofing Sheets</CardTitle>
// //           </CardHeader>
// //           <CardDescription>
// //             Made from high-tensile pure steel and featuring an Al–Zn
// //             (Galvalume) anti-corrosion layer, JSW roofing sheets offer deeper
// //             rust resistance, even in coastal or humid environments. They’re
// //             designed for strength, durability, and long-term performance.
// //           </CardDescription>
// //           <Options>
// //             <OptionGroup>
// //               <OptionLabel>Material</OptionLabel>
// //               <OptionValues>
// //                 {["GI", "Al-Zn"].map((m) => (
// //                   <OptionValue
// //                     key={m}
// //                     active={card1.material === m}
// //                     onClick={() => setCard1({ ...card1, material: m })}
// //                   >
// //                     {m}
// //                   </OptionValue>
// //                 ))}
// //               </OptionValues>
// //             </OptionGroup>
// //             <OptionGroup>
// //               <OptionLabel>Thickness</OptionLabel>
// //               <OptionValues>
// //                 {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
// //                   <OptionValue
// //                     key={t}
// //                     active={card1.thickness === t}
// //                     onClick={() => setCard1({ ...card1, thickness: t })}
// //                   >
// //                     {t}
// //                   </OptionValue>
// //                 ))}
// //               </OptionValues>
// //             </OptionGroup>
// //           </Options>
// //           <Colors>
// //             <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
// //             <ColorRectangle style={{ background: "#008479" }} title="Teal Green" />
// //             <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
// //           </Colors>
// //           <ViewMore>Click to view more</ViewMore>
// //         </CardContent>
// //       </Card>

// //       {/* ===== TATA ===== */}
// //       <BrandPill>
// //         <BrandPillLogo src={tataLogo} alt="TATA logo" />
// //         <BrandPillText>TATA</BrandPillText>
// //       </BrandPill>

// //       <Card $reverse>
// //         <ImageWrapper>
// //           <ProductImage src="" alt="TATA Sheet" />
// //         </ImageWrapper>
// //         <CardContent>
// //           <CardHeader>
// //             <Logo>
// //               <LogoImage src={tataLogo} alt="TATA Logo" />
// //             </Logo>
// //             <CardTitle>TATA Roofing Sheets</CardTitle>
// //           </CardHeader>
// //           <CardDescription>
// //             Tata Shaktee galvanized sheets with ISI certification and zinc
// //             coating deliver durability and cost-effective roofing solutions.
// //             Built to withstand extreme conditions, they combine corrosion
// //             resistance, heat resistance, and thermal comfort for long-lasting
// //             protection.
// //           </CardDescription>
// //           <Options>
// //             <OptionGroup>
// //               <OptionLabel>Material</OptionLabel>
// //               <OptionValues>
// //                 {["GI", "Al-Zn"].map((m) => (
// //                   <OptionValue
// //                     key={m}
// //                     active={card2.material === m}
// //                     onClick={() => setCard2({ ...card2, material: m })}
// //                   >
// //                     {m}
// //                   </OptionValue>
// //                 ))}
// //               </OptionValues>
// //             </OptionGroup>
// //             <OptionGroup>
// //               <OptionLabel>Thickness</OptionLabel>
// //               <OptionValues>
// //                 {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
// //                   <OptionValue
// //                     key={t}
// //                     active={card2.thickness === t}
// //                     onClick={() => setCard2({ ...card2, thickness: t })}
// //                   >
// //                     {t}
// //                   </OptionValue>
// //                 ))}
// //               </OptionValues>
// //             </OptionGroup>
// //           </Options>
// //           <Colors>
// //             <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
// //             <ColorRectangle style={{ background: "#008479" }} title="Teal Green" />
// //             <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
// //           </Colors>
// //           <ViewMore>Click to view more</ViewMore>
// //         </CardContent>
// //       </Card>

// //       {/* ===== JSL ===== */}
// //       <BrandPill>
// //         <BrandPillLogo src={jslLogo} alt="JSL logo" />
// //         <BrandPillText>JSL</BrandPillText>
// //       </BrandPill>

// //       <Card>
// //         <ImageWrapper>
// //           <ProductImage src="" alt="Jindal Sheet" />
// //         </ImageWrapper>
// //         <CardContent>
// //           <CardHeader>
// //             <Logo>
// //               <LogoImage src={jslLogo} alt="JSL Logo" />
// //             </Logo>
// //             <CardTitle>Jindal Roofing Sheets</CardTitle>
// //           </CardHeader>
// //           <CardDescription>
// //             Jindal’s high-strength Alu-Zinc sheets pair superior durability
// //             with advanced colour coatings. Built for long life and reduced
// //             thermal transfer, they help keep interiors cooler while providing
// //             excellent weather resistance.
// //           </CardDescription>
// //           <Options>
// //             <OptionGroup>
// //               <OptionLabel>Material</OptionLabel>
// //               <OptionValues>
// //                 {["GI", "Al-Zn"].map((m) => (
// //                   <OptionValue
// //                     key={m}
// //                     active={card3.material === m}
// //                     onClick={() => setCard3({ ...card3, material: m })}
// //                   >
// //                     {m}
// //                   </OptionValue>
// //                 ))}
// //               </OptionValues>
// //             </OptionGroup>
// //             <OptionGroup>
// //               <OptionLabel>Thickness</OptionLabel>
// //               <OptionValues>
// //                 {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
// //                   <OptionValue
// //                     key={t}
// //                     active={card3.thickness === t}
// //                     onClick={() => setCard3({ ...card3, thickness: t })}
// //                   >
// //                     {t}
// //                   </OptionValue>
// //                 ))}
// //               </OptionValues>
// //             </OptionGroup>
// //           </Options>
// //           <Colors>
// //             <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
// //             <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
// //           </Colors>
// //           <ViewMore>Click to view more</ViewMore>
// //         </CardContent>
// //       </Card>


// //       <FooterNote>
// //         Whether you're building a new home, upgrading a commercial site, or tackling an industrial project,
// //         Lee Roofs is your trusted partner. We offer more than just materials <br /> —we offer guidance, reliability,
// //         and quality that lasts for years.
// //       </FooterNote>
// //     </Section>
// //   );
// // };

// // export default OurProducts;



// // Ourproducts.jsx
// import React, { useState } from "react";
// import {
//   Section,
//   HeaderWrapper,
//   Title,
//   IntroText,
//   BrandPill,
//   BrandPillLogo,
//   BrandPillText,
//   CardsWrapper,
//   Card,
//   ImageWrapper,
//   ProductImage,
//   CardContent,
//   CardHeader,
//   Logo,
//   LogoImage,
//   CardTitle,
//   CardDescription,
//   Options,
//   OptionGroup,
//   OptionLabel,
//   OptionValues,
//   OptionValue,
//   Colors,
//   ColorRectangle,
//   ViewMore,
//   FooterNote,
//   AddToCartBtn,
// } from "./Ourproducts.style";

// import jswLogo from "../../assets/jsw.png";
// import tataLogo from "../../assets/TATA.png";
// import jslLogo from "../../assets/jsl.png";

// const OurProducts = () => {
//   const [card1, setCard1] = useState({ material: "GI", thickness: "0.35 mm" });
//   const [card2, setCard2] = useState({ material: "GI", thickness: "0.35 mm" });
//   const [card3, setCard3] = useState({ material: "GI", thickness: "0.35 mm" });

//   const [expanded, setExpanded] = useState(null); // track expanded card

//   return (
//     <Section>
//       <HeaderWrapper>
//         <Title>Our Products</Title>
//         <IntroText>
//           We offer a wide variety of high-quality roofing solutions, including
//           metal roofing sheets, performance materials, and complete roofing
//           accessories. At Lee Roofs, quality meets trust. Whether you’re a
//           builder, architect, or homeowner, our range of roofing products is
//           designed to combine aesthetics with superior protection. Committed to
//           excellence, we ensure that our roofing sheets not only last longer but
//           also provide lasting comfort and energy savings. Explore our brands
//           below.
//         </IntroText>
//       </HeaderWrapper>

//       {/* ===== JSW ===== */}
//       {(!expanded || expanded === "JSW") && (
//         <>
//           <BrandPill>
//             <BrandPillLogo src={jswLogo} alt="JSW logo" />
//             <BrandPillText>JSW Colouron+</BrandPillText>
//           </BrandPill>

//           <Card>
//             <ImageWrapper>
//               <ProductImage src="" alt="JSW Sheet" />
//             </ImageWrapper>
//             <CardContent>
//               <CardHeader>
//                 <Logo>
//                   <LogoImage src={jswLogo} alt="JSW Logo" />
//                 </Logo>
//                 <CardTitle>JSW Roofing Sheets</CardTitle>
//               </CardHeader>
//               <CardDescription>
//                 Made from high-tensile pure steel and featuring an Al–Zn
//                 (Galvalume) anti-corrosion layer, JSW roofing sheets offer deeper
//                 rust resistance, even in coastal or humid environments. They’re
//                 designed for strength, durability, and long-term performance.
//               </CardDescription>
//               <Options>
//                 <OptionGroup>
//                   <OptionLabel>Material</OptionLabel>
//                   <OptionValues>
//                     {["GI", "Al-Zn"].map((m) => (
//                       <OptionValue
//                         key={m}
//                         active={card1.material === m}
//                         onClick={() => setCard1({ ...card1, material: m })}
//                       >
//                         {m}
//                       </OptionValue>
//                     ))}
//                   </OptionValues>
//                 </OptionGroup>
//                 <OptionGroup>
//                   <OptionLabel>Thickness</OptionLabel>
//                   <OptionValues>
//                     {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
//                       <OptionValue
//                         key={t}
//                         active={card1.thickness === t}
//                         onClick={() => setCard1({ ...card1, thickness: t })}
//                       >
//                         {t}
//                       </OptionValue>
//                     ))}
//                   </OptionValues>
//                 </OptionGroup>
//               </Options>
//               <Colors>
//                 <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
//                 <ColorRectangle style={{ background: "#008479" }} title="Teal Green" />
//                 <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
//               </Colors>
//               {expanded === "JSW" ? (
//                 <AddToCartBtn>Add to cart</AddToCartBtn>
//               ) : (
//                 <ViewMore onClick={() => setExpanded("JSW")}>
//                   Click to view more
//                 </ViewMore>
//               )}
//             </CardContent>
//           </Card>
//         </>
//       )}

//       {/* ===== TATA ===== */}
//       {(!expanded || expanded === "TATA") && (
//         <>
//           <BrandPill>
//             <BrandPillLogo src={tataLogo} alt="TATA logo" />
//             <BrandPillText>TATA</BrandPillText>
//           </BrandPill>

//           <Card $reverse>
//             <ImageWrapper>
//               <ProductImage src="" alt="TATA Sheet" />
//             </ImageWrapper>
//             <CardContent>
//               <CardHeader>
//                 <Logo>
//                   <LogoImage src={tataLogo} alt="TATA Logo" />
//                 </Logo>
//                 <CardTitle>TATA Roofing Sheets</CardTitle>
//               </CardHeader>
//               <CardDescription>
//                 Tata Shaktee galvanized sheets with ISI certification and zinc
//                 coating deliver durability and cost-effective roofing solutions.
//                 Built to withstand extreme conditions, they combine corrosion
//                 resistance, heat resistance, and thermal comfort for long-lasting
//                 protection.
//               </CardDescription>
//               <Options>
//                 <OptionGroup>
//                   <OptionLabel>Material</OptionLabel>
//                   <OptionValues>
//                     {["GI", "Al-Zn"].map((m) => (
//                       <OptionValue
//                         key={m}
//                         active={card2.material === m}
//                         onClick={() => setCard2({ ...card2, material: m })}
//                       >
//                         {m}
//                       </OptionValue>
//                     ))}
//                   </OptionValues>
//                 </OptionGroup>
//                 <OptionGroup>
//                   <OptionLabel>Thickness</OptionLabel>
//                   <OptionValues>
//                     {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
//                       <OptionValue
//                         key={t}
//                         active={card2.thickness === t}
//                         onClick={() => setCard2({ ...card2, thickness: t })}
//                       >
//                         {t}
//                       </OptionValue>
//                     ))}
//                   </OptionValues>
//                 </OptionGroup>
//               </Options>
//               <Colors>
//                 <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
//                 <ColorRectangle style={{ background: "#008479" }} title="Teal Green" />
//                 <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
//               </Colors>
//               {expanded === "TATA" ? (
//                 <AddToCartBtn>Add to cart</AddToCartBtn>
//               ) : (
//                 <ViewMore onClick={() => setExpanded("TATA")}>
//                   Click to view more
//                 </ViewMore>
//               )}
//             </CardContent>
//           </Card>
//         </>
//       )}

//       {/* ===== JSL ===== */}
//       {(!expanded || expanded === "JSL") && (
//         <>
//           <BrandPill>
//             <BrandPillLogo src={jslLogo} alt="JSL logo" />
//             <BrandPillText>JSL</BrandPillText>
//           </BrandPill>

//           <Card>
//             <ImageWrapper>
//               <ProductImage src="" alt="Jindal Sheet" />
//             </ImageWrapper>
//             <CardContent>
//               <CardHeader>
//                 <Logo>
//                   <LogoImage src={jslLogo} alt="JSL Logo" />
//                 </Logo>
//                 <CardTitle>Jindal Roofing Sheets</CardTitle>
//               </CardHeader>
//               <CardDescription>
//                 Jindal’s high-strength Alu-Zinc sheets pair superior durability
//                 with advanced colour coatings. Built for long life and reduced
//                 thermal transfer, they help keep interiors cooler while providing
//                 excellent weather resistance.
//               </CardDescription>
//               <Options>
//                 <OptionGroup>
//                   <OptionLabel>Material</OptionLabel>
//                   <OptionValues>
//                     {["GI", "Al-Zn"].map((m) => (
//                       <OptionValue
//                         key={m}
//                         active={card3.material === m}
//                         onClick={() => setCard3({ ...card3, material: m })}
//                       >
//                         {m}
//                       </OptionValue>
//                     ))}
//                   </OptionValues>
//                 </OptionGroup>
//                 <OptionGroup>
//                   <OptionLabel>Thickness</OptionLabel>
//                   <OptionValues>
//                     {["0.35 mm", "0.40 mm", "0.45 mm"].map((t) => (
//                       <OptionValue
//                         key={t}
//                         active={card3.thickness === t}
//                         onClick={() => setCard3({ ...card3, thickness: t })}
//                       >
//                         {t}
//                       </OptionValue>
//                     ))}
//                   </OptionValues>
//                 </OptionGroup>
//               </Options>
//               <Colors>
//                 <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
//                 <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
//               </Colors>
//               {expanded === "JSL" ? (
//                 <AddToCartBtn>Add to cart</AddToCartBtn>
//               ) : (
//                 <ViewMore onClick={() => setExpanded("JSL")}>
//                   Click to view more
//                 </ViewMore>
//               )}
//             </CardContent>
//           </Card>
//         </>
//       )}

//       <FooterNote>
//         Whether you're building a new home, upgrading a commercial site, or tackling an industrial project,
//         Lee Roofs is your trusted partner. We offer more than just materials <br /> —we offer guidance, reliability,
//         and quality that lasts for years.
//       </FooterNote>
//     </Section>
//   );
// };

// export default OurProducts;



// Ourproducts.jsx
import React, { useState } from "react";
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
import jswLogo from "../../assets/jsw.png";
import tataLogo from "../../assets/TATA.png";
import jslLogo from "../../assets/jsl.png";

const OurProducts = () => {
  const [card1, setCard1] = useState({ material: "GI", thickness: "0.35 mm" });
  const [card2, setCard2] = useState({ material: "GI", thickness: "0.35 mm" });
  const [card3, setCard3] = useState({ material: "GI", thickness: "0.35 mm" });

  const [expanded, setExpanded] = useState(null); // track expanded card

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

      {/* ===== JSW ===== */}
      {(!expanded || expanded === "JSW") && (
        <>
          <BrandPill>
            <BrandPillLogo src={jswLogo} alt="JSW logo" />
            <BrandPillText>JSW Colouron+</BrandPillText>
          </BrandPill>

          <Card>
            <ImageWrapper>
              <ProductImage src="" alt="JSW Sheet" />
            </ImageWrapper>
            <CardContent>
              <CardHeader>
                <Logo>
                  <LogoImage src={jswLogo} alt="JSW Logo" />
                </Logo>
                <CardTitle>JSW Roofing Sheets</CardTitle>
              </CardHeader>
              <CardDescription>
                Made from high-tensile pure steel and featuring an Al–Zn
                (Galvalume) anti-corrosion layer, JSW roofing sheets offer deeper
                rust resistance, even in coastal or humid environments. They’re
                designed for strength, durability, and long-term performance.
              </CardDescription>
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
                <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
                <ColorRectangle style={{ background: "#008479" }} title="Teal Green" />
                <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
              </Colors>
              {expanded === "JSW" ? (
                <AddToCartBtn>Add to cart</AddToCartBtn>
              ) : (
                <ViewMore onClick={() => setExpanded("JSW")}>
                  Click to view more
                </ViewMore>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* ===== TATA ===== */}
      {(!expanded || expanded === "TATA") && (
        <>
          <BrandPill>
            <BrandPillLogo src={tataLogo} alt="TATA logo" />
            <BrandPillText>TATA</BrandPillText>
          </BrandPill>

          <Card $reverse>
            <ImageWrapper>
              <ProductImage src="" alt="TATA Sheet" />
            </ImageWrapper>
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
                Built to withstand extreme conditions, they combine corrosion
                resistance, heat resistance, and thermal comfort for long-lasting
                protection.
              </CardDescription>
              <Options>
                <OptionGroup>
                  <OptionLabel>Material</OptionLabel>
                  <OptionValues>
                    {["GI", "Al-Zn"].map((m) => (
                      <OptionValue
                        key={m}
                        active={card2.material === m}
                        onClick={() => setCard2({ ...card2, material: m })}
                      >
                        {m}
                      </OptionValue>
                    ))}
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
                <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
                <ColorRectangle style={{ background: "#008479" }} title="Teal Green" />
                <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
              </Colors>
              {expanded === "TATA" ? (
                <AddToCartBtn>Add to cart</AddToCartBtn>
              ) : (
                <ViewMore onClick={() => setExpanded("TATA")}>
                  Click to view more
                </ViewMore>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* ===== JSL ===== */}
      {(!expanded || expanded === "JSL") && (
        <>
          <BrandPill>
            <BrandPillLogo src={jslLogo} alt="JSL logo" />
            <BrandPillText>JSL</BrandPillText>
          </BrandPill>

          <Card>
            <ImageWrapper>
              <ProductImage src="" alt="Jindal Sheet" />
            </ImageWrapper>
            <CardContent>
              <CardHeader>
                <Logo>
                  <LogoImage src={jslLogo} alt="JSL Logo" />
                </Logo>
                <CardTitle>Jindal Roofing Sheets</CardTitle>
              </CardHeader>
              <CardDescription>
                Jindal’s high-strength Alu-Zinc sheets pair superior durability
                with advanced colour coatings. Built for long life and reduced
                thermal transfer, they help keep interiors cooler while providing
                excellent weather resistance.
              </CardDescription>
              <Options>
                <OptionGroup>
                  <OptionLabel>Material</OptionLabel>
                  <OptionValues>
                    {["GI", "Al-Zn"].map((m) => (
                      <OptionValue
                        key={m}
                        active={card3.material === m}
                        onClick={() => setCard3({ ...card3, material: m })}
                      >
                        {m}
                      </OptionValue>
                    ))}
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
                <ColorRectangle style={{ background: "#FFFFFF" }} title="White" />
                <ColorRectangle style={{ background: "#1F4492" }} title="Royal Blue" />
              </Colors>
              {expanded === "JSL" ? (
                <AddToCartBtn>Add to cart</AddToCartBtn>
              ) : (
                <ViewMore onClick={() => setExpanded("JSL")}>
                  Click to view more
                </ViewMore>
              )}
            </CardContent>
          </Card>
        </>
      )}

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
