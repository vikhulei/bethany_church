import React from "react";
import * as FontAwesome from "react-icons/fa";
import * as Grommet from "react-icons/gr";
import {
  IconWrapper,
  SideNav,
  SideNavLink
} from "../../styled/components/Sidebar";

const SidebarUkr = ({ sideBar, showSideBar }) => {
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
        <SideNavLink to="/pages/home">Головна</SideNavLink>
        <SideNavLink to="/pages/about">Про нас</SideNavLink>
        <SideNavLink to="/pages/services">Служіння</SideNavLink>
        <SideNavLink to="/pages/contacts">Контакти</SideNavLink>
      </SideNav>
    </>
  );
};

export default SidebarUkr;
