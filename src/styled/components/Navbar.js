import styled from "styled-components";
import { Link } from "react-router-dom";

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
  font-size: 2.3vw;
  color: black;
  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export { TopNav, TopNavLink };
