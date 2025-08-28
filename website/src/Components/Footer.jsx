import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  LogoSection,
  Logo,
  SocialIcons,
  SocialIcon,
  NavLinks,
  NavLink,
  ContactSection,
  ContactTitle,
  ContactItem,
  ContactIcon,
} from "./Footer.style";

import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import leeLogo from "../assets/LeeLogo.png"; // ✅ single logo

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Left Section */}
        <LogoSection>
          <Logo src={leeLogo} alt="Lee Builders" />

          <SocialIcons>
            <SocialIcon href="#">
              <FaWhatsapp />
            </SocialIcon>
            <SocialIcon href="#">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon href="#">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#">
              <FaTwitter />
            </SocialIcon>
          </SocialIcons>
        </LogoSection>

        {/* Middle Nav Links (horizontal) */}
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/products">Our Products</NavLink>
          <NavLink href="/cart">Cart</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </NavLinks>

        {/* Right Contact Section */}
        <ContactSection>
          <ContactTitle>Contact us</ContactTitle>
          <ContactItem>
            <ContactIcon>
              <MdEmail />
            </ContactIcon>
            Leebuilders@gmail.com
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <MdPhone />
            </ContactIcon>
            0484-2594964
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <MdLocationOn />
            </ContactIcon>
            PMC V1/195 B, LEE GARDENS, M.C Road <br />
            Perumbavoor - 683542
          </ContactItem>
        </ContactSection>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
