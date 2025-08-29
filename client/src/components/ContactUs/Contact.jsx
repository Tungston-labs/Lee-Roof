import React from "react";
import {
  ContactSection,
  ContactContainer,
  ContactContent,
  Title,
  Description,
  ContactInfo,
  InfoItem,
  InfoIcon,
  InfoText,
  SocialSection,
  SocialTitle,
  SocialIcons,
  SocialIcon,
  MapWrapper,
  MapIframe,
} from "./Contact.style";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import whatsappIcon from "../../assets/whatsapp.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";

const Contact = () => {
  
  return (
    <ContactSection>
      <ContactContainer>
        <ContactContent>
          <Title>Get in Touch with Lee Roofs</Title>
          <Description>
            Your Local Roofing Experts. We’d love to hear from you! Whether you
            have a question, feedback, or need assistance, our friendly team is
            ready to help. Reach out to us via email, phone, and we’ll respond
            promptly, usually within 24 hours. Your thoughts matter, and we
            appreciate you connecting with us for your roofing needs.
          </Description>

          <ContactInfo>
            <InfoItem>
              <InfoIcon className="location">
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoText>
                Lee Factory, 4HX2+FJV,<br />
                Vengoor, Kerala 683544
              </InfoText>
            </InfoItem>

            <InfoItem>
              <InfoIcon className="phone">
                <FaPhoneAlt />
              </InfoIcon>
              <InfoText>+91 9400144330</InfoText>
            </InfoItem>

            <InfoItem>
              <InfoIcon className="mail">
                <FaEnvelope />
              </InfoIcon>
              <InfoText>leeroofingsheets@gmail.com</InfoText>
            </InfoItem>
          </ContactInfo>

          <SocialSection>
            <SocialTitle>Follow us on</SocialTitle>
            <SocialIcons>
              <SocialIcon href="#">
                <img src={whatsappIcon} alt="WhatsApp" />
              </SocialIcon>
              <SocialIcon href="#">
                <img src={facebookIcon} alt="Facebook" />
              </SocialIcon>
              <SocialIcon href="#">
                <img src={instagramIcon} alt="Instagram" />
              </SocialIcon>
              <SocialIcon href="#">
                <img src={twitterIcon} alt="Twitter" />
              </SocialIcon>
            </SocialIcons>
          </SocialSection>
        </ContactContent>

        <MapWrapper>
          <MapIframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15731.673!2d76.408348!3d10.058807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ce6e9fbd0d9%3A0x8d3f3cde4a5e45c5!2sVengoor%2C%20Kerala%20683544!5e0!3m2!1sen!2sin!4v1692789712345!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></MapIframe>
        </MapWrapper>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
