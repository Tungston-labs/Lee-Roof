import React from "react";
import Navbar from "../Navbar"; // adjust path as per your folder structure
import {
  AboutWrapper,
  VideoBackground,
  Overlay,
  ContentWrapper,
  Title,
  Description,
} from "./Aboutus.style";

import BackgroundVDO from "../../assets/IMG_6033 (1) (1).mp4";

const AboutUs = () => {
  return (
    <AboutWrapper>
      
    

      {/* Background Video */}
      <VideoBackground autoPlay loop muted playsInline>
        <source src={BackgroundVDO} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>

      {/* Dark overlay for better readability */}
      <Overlay />

      {/* Content Section */}
      <ContentWrapper>
        <Title>About us</Title>
        <Description>
          Lee Roofs – Trusted by Experts. Chosen by Families. We’re one of
          India’s leading manufacturers and suppliers of high-quality roofing
          materials, trusted by professionals across South India.
        </Description>
      </ContentWrapper>
    </AboutWrapper>
  );
};

export default AboutUs;
