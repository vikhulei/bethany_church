import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FontAwesome from "react-icons/fa";
import * as Grommet from "react-icons/gr";

const TopNav = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  width: 50vw;
`;

const TopNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
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
