import React from "react";
import {
  SectionWrapper,
  Row,
  TextContent,
  Title,
  Description,
  ImageWrapper,
  FinalHeading,
} from "./AboutDetails.style";

import AboutUS1 from "../../assets/AboutUS1.png";
import AboutUS2 from "../../assets/AboutUS2.png";

const AboutDetails = () => {
  return (
    <SectionWrapper>
      {/* Row 1: Text Left - Image Right */}
      <Row>
        <TextContent>
          <Title>Covering Dreams with Confidence</Title>
          <Description>
            At Lee Roofs, we believe that every great structure begins with a
            strong, reliable roof. As part of the trusted Lee Builders & Systems
            group, we bring decades of engineering excellence and construction
            expertise into every roofing solution we offer. From
            high-performance colour-coated metal sheets to precision-crafted
            accessories, all our products are manufactured using premium raw
            materials and cutting-edge technology.
          </Description>
        </TextContent>
        <ImageWrapper>
          <img src={AboutUS1} alt="About Lee Roofs" />
        </ImageWrapper>
      </Row>

      {/* Row 2: Text Right - Image Left */}
      <Row reverse>
        <TextContent>
          <Title>Beyond Roofing, We Build Relationships.</Title>
          <Description>
            At Lee Roofs, our commitment goes beyond just supplying materials.
            We aim to build lasting relationships through dependable service,
            competitive pricing, and personalized support. Whether you’re
            constructing a new home, renovating a commercial space, or leading a
            large-scale industrial project, we’re here to help you build
            smarter, safer, and stronger.
          </Description>
        </TextContent>
        <ImageWrapper>
          <img src={AboutUS2} alt="Beyond Roofing" />
        </ImageWrapper>
      </Row>

      {/* Final Heading */}
      <FinalHeading>
        Your safety starts at the top, and that’s <br />
        where we deliver our best.
      </FinalHeading>
    </SectionWrapper>
  );
};

export default AboutDetails;

