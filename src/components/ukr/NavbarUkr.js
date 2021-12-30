import React from "react";
import { TopNav, TopNavLink } from "../../styled/components/Navbar";

const NavbarUkr = () => {
  return (
    <TopNav>
      <TopNavLink to="/pages/home">Головна</TopNavLink>
      <TopNavLink to="/pages/about">Про нас</TopNavLink>
      <TopNavLink to="/pages/services">Служіння</TopNavLink>
      <TopNavLink to="/pages/contacts">Контакти</TopNavLink>
    </TopNav>
  );
};

export default NavbarUkr;
