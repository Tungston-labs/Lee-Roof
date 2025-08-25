import styled from "styled-components";

export const NavWrapper = styled.div`
  padding: 10px 4%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
`;

/* Logo */
export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 70px;
    width: auto;
    display: block;
  }
`;

/* Blue background box */
export const BlueBox = styled.div`
  flex: 1;
  background: #dae6ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  border-radius: 6px;
  position: relative;
`;

/* Desktop Menu */
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: #000;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 17px;
  position: relative;

  &.active {
    color: #004d7b;
  }

  &.active::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    width: 100%;
    background: #004d7b;
    border-radius: 2px;
  }

  &:hover {
    color: #004d7b;
  }
`;

/* Contact Us button */
export const ContactButton = styled.button`
  background: #fff;
  border: none;
  color: #004d7b;
  font-family: "Segoe UI", sans-serif;
  font-weight: bold;
  font-size: 17px;
  padding: 6px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #004d7b;
    color: #fff;
  }
`;

/* Mobile Cart */
export const CartIconWrapper = styled.div`
  display: none;
  position: relative;
  font-size: 1.5rem;
  color: #004d7b;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: #004d7b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 2px 6px;
`;

/* Hamburger (mobile) */
export const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Mobile Menu */
export const MobileMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: #e8f0ff;
  padding: 20px 0;
  gap: 20px;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;
