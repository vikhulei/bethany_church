import React from "react";
import {TopNav, TopNavLink} from "../../styled/components/Navbar"

const NavbarEng = () => {
  return (
    <TopNav>
      <TopNavLink to="/pages/home">Home</TopNavLink>
      <TopNavLink to="/pages/about">About</TopNavLink>
      <TopNavLink to="/pages/services">Services</TopNavLink>
      <TopNavLink to="/pages/contacts">Contacts</TopNavLink>
    </TopNav>
  );
};

export default NavbarEng;
