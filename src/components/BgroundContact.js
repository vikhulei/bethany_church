import styled from "styled-components";
import "./bgroundContact.css";

const Bground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

const BgroundContact = () => {
  return (
    <Bground>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Bground>
  );
};

export default BgroundContact;
