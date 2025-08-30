import React from "react";
import bgImage from "../../assets/background1.png"; // ✅ correct path

import {
  Section,
  ContentWrapper,
  Heading,
  SubHeading,
  ImageWrapper,
  InfoCard,
  InfoTitle,
  InfoText,
  EnquireButton,
  IconWrapper
} from "./Header.style";

import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
  return (
    <Section>
      {/* Top Text Section */}
     <ContentWrapper>
  <Heading>
    Engineered Roofing Solutions <br /> for Lasting Protection.
  </Heading>
  <SubHeading>
    Guard your home from the top down. Our quality roofing services <br />
    provide the defense you need.
  </SubHeading>
</ContentWrapper>


      {/* Background Image Section */}
      <ImageWrapper bg={bgImage}>
        <InfoCard>
          <IconWrapper>
            <FiArrowUpRight />
          </IconWrapper>
          <InfoTitle>ENGINEERED ROOFS FOR <br /> LASTING PROTECTION</InfoTitle>
          <InfoText>
            Premium, weather-resistant roofing sheets <br /> designed for style,
            strength, and peace of mind.
          </InfoText>
        <EnquireButton onClick={() => navigate("/contact")}>
      Enquire Now
    </EnquireButton>
        </InfoCard>
      </ImageWrapper>
    </Section>
  );
};

export default Header;
