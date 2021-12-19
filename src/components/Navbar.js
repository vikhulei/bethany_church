import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FontAwesome from "react-icons/fa"

const NavWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  width: 50vw;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Rosarivo";
  font-size: 1rem;
  color: black;
`;

const HamWrapper = styled.div `
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  };
`

const Navbar = ( {mobileVersion} ) => {
  return (
    <div>
      {mobileVersion ?
      <NavWrapper>
        <NavLink to="/pages/home">Home</NavLink>
        <NavLink to="/pages/about">About</NavLink>
        <NavLink to="/pages/services">Services</NavLink>
        <NavLink to="/pages/contacts">Contacts</NavLink>
      </NavWrapper>
      : <HamWrapper>
        <FontAwesome.FaBars onClick={() => alert()}/>
      </HamWrapper>}
    </div>
  );
};

export default Navbar;
