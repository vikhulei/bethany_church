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

const HamWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const SideNav = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 3rem;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 99;
`;

const SideNavLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
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
