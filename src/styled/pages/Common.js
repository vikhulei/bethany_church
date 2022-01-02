import styled from "styled-components";

const Title = styled.h1`
  font-size: calc(2rem + 3vh);
@media screen and (max-width: 600px) {
  font-size: calc(2rem + 2vw);
}
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin: 30px 0 5px;
@media screen and (max-width: 600px) {
  font-size: 1.2rem;
}
`;

const MainText = styled.p`
  font-size: 1.3rem;
  margin-left: 30px;
@media screen and (max-width: 600px) {
  margin-left: 30px;
}
`;

export {Title, Heading, MainText};