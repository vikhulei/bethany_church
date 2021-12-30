import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-height: calc(100vh - 120px);
    margin: 80px 30px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0;
    height: fit-content;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
@media screen and (max-width: 600px) {
  text-align: left;
  margin: 0 0 0 20px;
}
`;

const Title = styled.h1`
  font-size: calc(2rem + 3vh);
@media screen and (max-width: 600px) {
  font-size: calc(2rem + 2vw);
}
`;

const TextWrapper = styled.div`
  flex: 1;
  margin-right: 50px;
@media screen and (max-width: 600px) {
  flex: 0;
  margin: 20px;
}
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin: 30px 0 5px;
@media screen and (max-width: 600px) {
  font-size: 1.2rem;
  margin: 10px 0 2px;
}
`;

const MainText = styled.p`
  font-size: 1.3rem;
  margin-left: 30px;
@media screen and (max-width: 600px) {
  margin-left: 30px;
}
`;

const PictureWrapper = styled.div`
  flex: 1;
@media screen and (max-width: 600px) {
  flex: 0;
  margin: 20px;
  justify-content: center;
}
`;

const Picture = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;


export {Wrapper, TitleWrapper, Title, TextWrapper, Heading, MainText, PictureWrapper, Picture};
