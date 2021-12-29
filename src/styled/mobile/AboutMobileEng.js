import styled from "styled-components";


const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const TitleWrapper = styled.div`
  margin-left: 20px;
`;

const Title = styled.h1`
  font-size: calc(2rem + 2vw);
`;

const TextWrapper = styled.div`
  margin: 20px;
`;

const Heading = styled.h2`
  font-size: calc(1.2rem);
  margin: 10px 0 2px;
`;

const MainText = styled.p`
  margin-left: 30px;
`;

const PictureWrapper = styled.div`
  margin: 20px;
  justify-content: center;
`;

const Picture = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;


export {Wrapper, TitleWrapper, Title, TextWrapper, Heading, MainText, PictureWrapper, Picture};
