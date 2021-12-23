import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import contact from "../../assets/contact.png";
import * as FontAwesome from "react-icons/fa";

const Contacts = styled.img`
  display: block;
  margin: 50px auto 0 auto;
  width: 70%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;

const Label = styled.label`
  /* text-align: left; */
`;

const Input = styled.textarea`
  height: 30vh;
  padding: 5px;
  /* display: flex;
  align-items: top;
  justify-content: center; */
  width: 100%;
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
  padding: 0 30px;
  margin: 50px auto 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const IconsWrapper = styled.div`
  width: 70px;
  display: flex;
  justify-content: space-between;
`;

const Ancor = styled.a`
  font-size: 1.5rem;
  display: flex;
`;

const ContactsMobile = () => {
  const submit = (event) => {
    alert("You wrote: " + event.target[0].value);
  };
  return (
    <>
      <Contacts src={contact} alt="contact_us" />
      <Form onSubmit={submit}>
        <Label for="input">Your message:</Label>
        <Input id="input" />
        <Button type="submit">Send</Button>
      </Form>
      <Footer>
        <p>+38063 793-1590</p>
        <a href="mailto:vikhulei@gmail.com">vikhulei@gmail.com</a>
        <IconsWrapper>
          <Ancor href="https://www.facebook.com/bethany.nivki" target="_blank">
            <FontAwesome.FaFacebook />
          </Ancor>
          <Ancor href="#">
            <FontAwesome.FaInstagram />
          </Ancor>
        </IconsWrapper>
      </Footer>
    </>
  );
};

export default ContactsMobile;
