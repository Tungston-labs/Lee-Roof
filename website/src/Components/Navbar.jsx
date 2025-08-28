import React, { useState } from "react";
import {
  NavWrapper,
  Logo,
  BlueBox,
  NavMenu,
  NavItem,
  ContactButton,
  Hamburger,
  MobileMenu,
  CartIconWrapper,
  CartBadge,
} from "./Navbar.style";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Check active route
  const isActive = (path) => location.pathname === path;

  return (
    <NavWrapper>
      {/* Logo */}
      <Logo>
        <img src={logo} alt="LEE-ROOF Logo" />
      </Logo>

      {/* Blue box */}
      <BlueBox>
        {/* Desktop Menu */}
        <NavMenu>
          <NavItem as={Link} to="/" className={isActive("/") ? "active" : ""}>
            Home
          </NavItem>
          <NavItem
            as={Link}
            to="/about"
            className={isActive("/about") ? "active" : ""}
          >
            About Us
          </NavItem>
          <NavItem
            as={Link}
            to="/products"
            className={isActive("/products") ? "active" : ""}
          >
            Our Products
          </NavItem>
          <NavItem
            as={Link}
            to="/cart"
            className={isActive("/cart") ? "active" : ""}
          >
            <FaShoppingCart style={{ marginRight: "6px" }} />
            Cart
          </NavItem>
          <ContactButton as={Link} to="/contact">
            Contact Us
          </ContactButton>
        </NavMenu>

        {/* Cart + Hamburger for Mobile */}
        <CartIconWrapper as={Link} to="/cart">
          <FaShoppingCart />
          <CartBadge>2</CartBadge>
        </CartIconWrapper>
        <Hamburger onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </Hamburger>

        {/* Mobile Menu */}
        <MobileMenu open={open}>
          <NavItem
            as={Link}
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Home
          </NavItem>
          <NavItem
            as={Link}
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            About Us
          </NavItem>
          <NavItem
            as={Link}
            to="/products"
            className={isActive("/products") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            Our Products
          </NavItem>
          <NavItem
            as={Link}
            to="/cart"
            className={isActive("/cart") ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            <FaShoppingCart style={{ marginRight: "6px" }} />
            Cart
          </NavItem>
          <ContactButton
            as={Link}
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </ContactButton>
        </MobileMenu>
      </BlueBox>
    </NavWrapper>
  );
};

export default Navbar;
