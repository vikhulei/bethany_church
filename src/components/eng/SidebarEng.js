import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as Grommet from "react-icons/gr";
import {IconWrapper, SideNav, SideNavLink} from "../../styled/components/Sidebar"


const SidebarEng = ({ sideBar, showSideBar }) => {
  return (
    <>
      {sideBar ? null : (
        <IconWrapper>
          <FontAwesome.FaBars onClick={showSideBar} />
        </IconWrapper>
      )}
      <SideNav sideBar={sideBar} onClick={showSideBar}>
        <IconWrapper>
          <Grommet.GrClose onClick={showSideBar} />
        </IconWrapper>
        <SideNavLink to="/pages/home">Home</SideNavLink>
        <SideNavLink to="/pages/about">About</SideNavLink>
        <SideNavLink to="/pages/services">Services</SideNavLink>
        <SideNavLink to="/pages/contacts">Contacts</SideNavLink>
      </SideNav>
    </>
  );
};

export default SidebarEng;
