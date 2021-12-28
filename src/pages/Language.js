import React from "react";
import styled from "styled-components";

const SelectLang = styled.div`
  position: fixed;
  right: 10px;
  top: 60px;
  /* box-shadow: 10px 10px 30px black; */
  /* font-family: Arial, Helvetica, sans-serif; */
  font-weight: 600;
  font-size: 0.9rem;
  color: black;
  text-align: center;
  /* border: solid 1px gray; */
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
