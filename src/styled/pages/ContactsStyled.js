import styled from "styled-components";


const Wrapper = styled.div`
position: relative;
min-width: 500px;
width: 50vw;
margin: 60px auto 0 auto;
z-index: 1;
@media screen and (max-width: 600px) {
  min-width: 100%;
  margin: 80px auto 0 auto;
}
`;

const Contacts = styled.img`
  display: block;
  margin: 50px auto 0 auto;
  width: 70%;
  max-width: 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  font-size: 0.8rem;
`;

const Input = styled.input`
font-size: 1rem;
height: 30px;
background-color: white;
border: none;
border-radius: 3px;
padding-left: 5px;
&:focus {
  outline: none;
}
@media screen and (max-width: 600px) {
  height: inherit;
  border: solid 1px;
  border-radius: 0;
  font-size: 0.8rem;
}
`;

const TextArea = styled.textarea`
height: 30vh;
padding: 5px;
margin: 20px 0;
font-size: 1rem;
background-color: white;
border-radius: 10px;
border: none;
&:focus {
  outline: none;
}
@media screen and (max-width: 600px) {
  margin-top: 5px;
  font-size: 0.8rem;
  border: solid 1px;
  border-radius: 0;
}
`;
const Button = styled.button`
width: 180px;
height: 40px;
margin: 10px auto 0 auto;
border-radius: 10px;
background-color: lightgrey;
font-size: 1rem;
&:hover {
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  width: 130px;
  height: 30px;
  margin: 10px auto 0 auto;
  background-color: lightgrey;
  font-size: 0.8rem;
}
`;

const Footer = styled.footer`
width: 100%;
height: 130px;
margin: 50px auto 30px auto;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 1.2rem;
@media screen and (max-width: 600px) {
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
}
`;

const Anchor = styled.a`
font-size: 2rem;
display: flex;
@media screen and (max-width: 600px) {
  font-size: 1.5rem;
}
`;


export {Wrapper, Contacts, Form, Input, TextArea, Button, Footer, Anchor};
