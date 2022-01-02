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

const TextWrapper = styled.div`
  flex: 1;
  margin-right: 50px;
@media screen and (max-width: 600px) {
  flex: 0;
  margin: 20px;
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


export {Wrapper, TitleWrapper, TextWrapper, PictureWrapper, Picture};
