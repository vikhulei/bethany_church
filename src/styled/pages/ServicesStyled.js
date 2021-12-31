import styled from "styled-components";

const Wrapper = styled.div `
min-height: 150vh;
margin: 80px 10vw 0 10vw;
@media screen and (max-width: 600px) {
  min-height: 100vh;
  margin: 0;
}
`

const PictureWrapper = styled.div`
position: absolute;
width: 80%;
text-align: center;
margin: 0 auto;
@media screen and (max-width: 600px) {
  width: 100%;
  margin: 30vw 0 0;
}
`;

const Picture = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 100vh;
`;

const Title = styled.h1`
position: relative;
text-align: center;
font-size: calc(2rem + 3vh);
margin-bottom: -60px;
@media screen and (max-width: 600px) {
  text-align: left;
  margin: 20px 20px 0 20px;
  font-size: calc(2rem + 2vw);
}
`;

const TextWrapper = styled.div`
position: relative;
margin: 100px 20px 50px 20px;
text-align: center;
@media screen and (max-width: 600px) {
  margin: 100px 20px 50px 20px;
}
`;

const Heading = styled.h2`
font-size: 2rem;
margin: 50px 0 5px;
@media screen and (max-width: 600px) {
  font-size: 1.5rem;
  margin: 0;
}
`;

const MainText = styled.p`
  
font-size: 1.5rem;
margin-left: 30px;
@media screen and (max-width: 600px) {
  font-size: 1rem;
  margin: 0 0 20px 0;
}
`;


export {Wrapper, PictureWrapper, Picture, Title, TextWrapper, Heading, MainText};
