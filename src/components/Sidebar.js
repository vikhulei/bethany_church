import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FontAwesome from "react-icons/fa";
import * as Grommet from "react-icons/gr";

const HamWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2.5rem;
  color: rgb(50, 50, 50);
  &:hover {
    cursor: pointer;
  }
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
`;

const Sidebar = ({ mobileVersion }) => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div>
      <HamWrapper>
        <FontAwesome.FaBars onClick={showSideBar} />
      </HamWrapper>
      <SideNav sideBar={sideBar} onClick={showSideBar}>
        <HamWrapper>
          <Grommet.GrClose onClick={showSideBar} />
        </HamWrapper>
        <SideNavLink to="/pages/home">Home</SideNavLink>
        <SideNavLink to="/pages/about">About</SideNavLink>
        <SideNavLink to="/pages/services">Services</SideNavLink>
        <SideNavLink to="/pages/contacts">Contacts</SideNavLink>
      </SideNav>
    </div>
  );
};

export default Sidebar;
