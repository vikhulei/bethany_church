import styled from "styled-components";


const Wrapper = styled.div`
  position: relative;
  margin: 80px auto 0 auto;
  z-index: 1;
`;

const Contacts = styled.img`
  display: block;
  margin: 50px auto 0 auto;
  width: 70%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
  font-size: 0.8rem;
  color: blue;
`;

const Input = styled.input`
  font-size: 0.8rem;
`;

const TextArea = styled.textarea`
  height: 30vh;
  padding: 5px;
  margin-top: 5px;
  font-size: 0.8rem;
`;
const Button = styled.button`
  width: 130px;
  height: 30px;
  margin: 10px auto 0 auto;
  border-radius: 10px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  margin: 50px auto 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Anchor = styled.a`
  font-size: 1.5rem;
`;


export {Wrapper, Contacts, Form, Input, TextArea, Button, Footer, Anchor};
