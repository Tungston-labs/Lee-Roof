import React from "react";
import {
  NavbarWrapper,
  Logo,
  NavBarRight,
  NavLinks,
  NavLink,
  ProfileImage,
} from "./Navbar.Styles";
import { FaUserCircle  } from "react-icons/fa";
import logo from "../../assets/client/logo.svg";
import { Link } from "react-router-dom"; 
// import profileImg from "../../assets/profile.jpg"; 

const Navbar = () => {
  return (
    <NavbarWrapper>
      {/* Left Logo */}
      <Logo>
        <img src={logo} alt="LEE-ROOF" />
      </Logo>

      {/* Right Blue Section */}
      <NavBarRight>
        {/* Center Nav Links */}
        <NavLinks>
         <NavLink to="/dashboard" end>
  Dashboard
</NavLink>
<NavLink to="/enquiry">
  Enquiry
</NavLink>
<NavLink to="/view-product">
  Product
</NavLink>
        </NavLinks>

        {/* Right Profile */}
    <FaUserCircle style={{ fontSize: "40px", color: "white" }} />

      </NavBarRight>
    </NavbarWrapper>
  );
};

export default Navbar;
