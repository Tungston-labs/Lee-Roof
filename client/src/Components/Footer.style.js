import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: linear-gradient(
    90deg,
    rgba(0, 77, 123, 1) 1%,
    rgba(9, 22, 46, 1) 64%
  );
  color: #fff;
  padding: 50px 80px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1000px) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  max-width: 300px;
  margin-bottom: 40px;

  @media (max-width: 968px) {
    max-width: 140px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

export const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
    color: #004d7b;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px; /* spacing between links */

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const NavLink = styled.a`
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
  gap: 10px;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #80bfe4;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-self: end;   /* ✅ Pushes the whole section to the right */
  align-items: flex-start; /* ✅ Ensures left alignment of text inside */
  text-align: left;        /* ✅ Left-aligns content */

  @media (max-width: 1000px) {
    justify-self: left;
    align-items: left;
    text-align: left;
  }
`;

export const ContactTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const ContactItem = styled.p`
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
`;

export const ContactIcon = styled.span`
  font-size: 1.2rem;
  color: #fff;
  flex-shrink: 0;
  margin-top: 3px;
`;
