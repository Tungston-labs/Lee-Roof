import styled from "styled-components";

export const ContactSection = styled.section`
  background: #004d7b;
  color: #ffffff;
  padding: 80px 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  max-width: 1500px;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const ContactContent = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 55px;
  margin-bottom: 15px;
  font-family: "Raleway", sans-serif;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 25px;
  font-family: Helvetica, Arial, sans-serif;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 25px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoIcon = styled.div`
  font-size: 28px;

  &.location {
    color: #ff4b4b; /* red */
  }

  &.phone {
    color: #2ecc71; /* green */
  }

  &.mail {
    color: #3498db; /* blue */
  }
`;

export const InfoText = styled.div`
  font-size: 18px;
  font-family: Helvetica, Arial, sans-serif;
`;

export const SocialSection = styled.div``;

export const SocialTitle = styled.h4`
  margin-bottom: 12px;
  font-size: 25px;
  font-family: "Raleway", sans-serif;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 22px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
   
  }
`;

export const MapWrapper = styled.div`
  flex: 1;
  min-height: 300px;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;

export const MapIframe = styled.iframe`
  width: 100%;
  height: 400%;
  min-height: 600px;
  border: none;
  border-radius: 1px;
`;
