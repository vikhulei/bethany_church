import styled from "styled-components";
import {Link} from "react-router-dom";

const TopNav = styled.div`
  position: absolute;
  top: 10px;
  right: 30px;
  display: flex;
  justify-content: space-between;
  width: 50vw;
  z-index: 99;
`;

const TopNavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
`;


export {TopNav, TopNavLink};
