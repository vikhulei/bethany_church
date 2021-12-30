import React from "react";
import styled from "styled-components";

const SelectLang = styled.div`
  position: absolute;
  right: 10px;
  top: 60px;
  @media screen and (min-width: 600px) {
    right: 30px;
    top: 45px;
  }
  font-weight: 600;
  font-size: 0.9rem;
  color: black;
  text-align: center;
  padding: 3px;
  background-color: rgb(180, 180, 180);
  width: 65px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translate(2px, 2px);
  }
  z-index: 99;
`;

const Lang = ({ setEnglish }) => {
  return <SelectLang onClick={setEnglish}>укр/eng</SelectLang>;
};

export default Lang;
