import styled from "styled-components";

const Wrapper = styled.div `
  min-height: 100vh;
`

const PictureWrapper = styled.div`
  position: absolute;
  text-align: center;
  margin-top: 30vw;
`;

const Picture = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  margin-top: 20px;
  margin-left: 20px;
  font-size: calc(2rem + 2vw);
`;

const TextWrapper = styled.div`
  margin: 100px 20px 50px 20px;
  text-align: center;
`;

const Heading = styled.h2``;

const MainText = styled.p`
  margin-bottom: 20px;
`;


export {Wrapper, PictureWrapper, Picture, Title, TextWrapper, Heading, MainText};
