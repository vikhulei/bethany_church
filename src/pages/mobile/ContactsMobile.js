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

const Input = styled.input`
  height: 30vh;
  line-height: 10px;
  justify-self: left;
`;
const Button = styled.button`
  width: 130px;
  height: 30px;
  margin: 10px auto 0 auto;
  border-radius: 10px;
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  padding: 0 30px;
  margin: 50px auto 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.a`
  font-size: 1.5rem;
  display: flex;
`;

const ContactsMobile = () => {
  return (
    <>
      <Contacts src={contact} alt="contact_us" />
      <Form>
        <Label>Your message:</Label>
        <Input type="text" />
        <Button>Send</Button>
      </Form>
      <Footer>
        <p>+38063 793-1590</p>
        <IconWrapper
          href="https://www.facebook.com/bethany.nivki"
          target="_blank"
        >
          <FontAwesome.FaFacebook />
        </IconWrapper>
        <IconWrapper href="#">
          <FontAwesome.FaInstagram />
        </IconWrapper>
        <p>vikhulei@gmail.com</p>
      </Footer>
    </>
  );
};

export default ContactsMobile;
