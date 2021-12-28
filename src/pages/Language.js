import React from "react";
import styled from "styled-components";

const SelectLang = styled.div`
  position: fixed;
  right: 10px;
  top: 60px;
  box-shadow: 10px 10px 30px black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: lightgray;
  text-align: center;
  /* background-color: grey; */
  width: 40px;
  &:hover {
    cursor: pointer;
  }
`;

const Lang = () => {
  return <SelectLang>UKR</SelectLang>;
};

export default Lang;
