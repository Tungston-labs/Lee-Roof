// Navbar.Styles.js
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const NavbarWrapper = styled.nav`
  display: flex;
  width: 100%;
  background: #fff;
  flex-wrap: wrap; /* allow wrapping on small screens */
`;

/* Left Logo */
export const Logo = styled.div`
  background: #fff;
  padding: 5px 20px;

  img {
    width: 22rem;
    max-height: 7rem;
    object-fit: contain;
    background: none;
  }

  @media (max-width: 1024px) {
    padding: 8px 15px;

    img {
        width: 10rem;
      max-height: 7rem;
    }
  }

  @media (max-width: 768px) {
    padding: 8px 15px;

    img {
      max-height: 5rem;
    }
  }
`;

/* Blue Bar containing Nav + Profile */
export const NavBarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #004D7B;
  flex: 1;
  padding: 10px 20px;
  height: 5rem;

  @media (max-width: 1024px) {
    height: 6rem;
    padding: 8px 15px;
  }

  @media (max-width: 768px) {
    // flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 12px;
    gap: 12px;
  }
`;

/* Center Nav Links */
export const NavLinks = styled.div`
  display: flex;
  gap: 20rem;
  margin: 0 auto;

  @media (max-width: 1280px) {
    gap: 4rem;
  }

  @media (max-width: 1024px) {
    gap: 10rem;
  }

  @media (max-width: 768px) {
    // flex-direction: column;
    gap: 5rem;
    width: 100%;
    margin: 0;
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 400;
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
  font-family: "Helvetica", sans-serif;
  transition: all 0.2s ease-in-out;

  &.active {
    font-weight: 700;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: #fff;
    }
  }

  &:hover {
    font-weight: 700;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 100%;
    padding: 8px 0;
  }
`;
/* Profile Image or Icon on right */
export const ProfileImage = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff; /* for icon */
  font-size: 2rem;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 32px;
    width: 32px;
    font-size: 1.6rem;
  }
`;
