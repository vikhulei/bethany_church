import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FontAwesome from "react-icons/fa";
import * as Grommet from "react-icons/gr";

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2.5rem;
  color: rgb(50, 50, 50);
  &:hover {
    cursor: pointer;
  }
`;

const HamWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 20px;
`;

const SideNav = styled.div`
  position: absolute;
  top: 0;
  right: ${({ sideBar }) => (sideBar ? "0" : "-60vw")};
  transition: 350ms;
  width: 60vw;
  height: 100vh;
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 3rem;
  background-color: rgba(194, 190, 187, 0.93);
  z-index: 99;
`;

const SideNavLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  color: black;
  &:visited {
    color: black;
  }
  &:active {
    color: darkblue;
    transform: translate(3px, 3px);
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Sidebar = ({ sideBar, showSideBar }) => {
  return (
    <div>
      <IconWrapper>
        <HamWrapper>
          <FontAwesome.FaBars onClick={showSideBar} />
        </HamWrapper>
      </IconWrapper>
      <SideNav sideBar={sideBar} onClick={showSideBar}>
        <IconWrapper>
          <Grommet.GrClose onClick={showSideBar} />
        </IconWrapper>
        <SideNavLink to="/pages/home">Home</SideNavLink>
        <SideNavLink to="/pages/about">About</SideNavLink>
        <SideNavLink to="/pages/services">Services</SideNavLink>
        <SideNavLink to="/pages/contacts">Contacts</SideNavLink>
      </SideNav>
    </div>
  );
};

export default Sidebar;
