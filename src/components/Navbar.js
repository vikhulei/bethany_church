import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  width: 50vw;
  background-color: lightcyan;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: "Rosarivo";
  font-size: 1rem;
  color: black;
`;

const Navbar = () => {
  return (
    <div>
      <NavWrapper>
        <NavLink to="/pages/home">Home</NavLink>
        <NavLink to="/pages/about">About</NavLink>
        <NavLink to="/pages/services">Services</NavLink>
        <NavLink to="/pages/contacts">Contacts</NavLink>
      </NavWrapper>
    </div>
  );
};

export default Navbar;
