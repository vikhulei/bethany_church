import styled from "styled-components";

const Wrapper = styled.div `
min-height: 150vh;
margin: 80px 10vw 0 10vw;
@media screen and (max-width: 600px) {
  min-height: 100vh;
  margin: 10px 0 0;
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

// const TitleWrapper = styled.div`
//   text-align: center;
//   margin-bottom: 30px;
// @media screen and (max-width: 600px) {
//   text-align: left;
//   margin: 0 0 0 20px;
// }
// `;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
@media screen and (max-width: 600px) {
  text-align: left;
  margin: 0 0 0 20px;
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


export {Wrapper, PictureWrapper, Picture, TitleWrapper, TextWrapper};
