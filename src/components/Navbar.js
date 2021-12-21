import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopNav = styled.div`
  position: absolute;
  top: 10px;
  right: 30px;
  display: flex;
  justify-content: space-between;
  width: 50vw;
`;

const TopNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
`;

const Navbar = ({ mobileVersion }) => {
  return (
    <div>
      <TopNav>
        <TopNavLink to="/pages/home">Home</TopNavLink>
        <TopNavLink to="/pages/about">About</TopNavLink>
        <TopNavLink to="/pages/services">Services</TopNavLink>
        <TopNavLink to="/pages/contacts">Contacts</TopNavLink>
      </TopNav>
    </div>
  );
};

export default Navbar;
