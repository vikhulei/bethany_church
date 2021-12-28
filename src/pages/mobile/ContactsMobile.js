import React from "react";
import styled from "styled-components";
import contact from "../../assets/contact.png";
import * as FontAwesome from "react-icons/fa";
import BgroundContact from "../../components/BgroundContact";

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

const ContactsMobile = () => {
  return (
    <Wrapper>
      <Contacts src={contact} alt="contact_us" />
      <Form action="https://formsubmit.co/vikhulei@gmail.com" method="POST">
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Type your email address here"
        ></Input>
        <TextArea
          id="textarea"
          type="text"
          name="text"
          placeholder="Type your message here"
        ></TextArea>
        <input type="hidden" name="_captcha" value="false" />
        <Button type="submit">Send</Button>
      </Form>
      <Footer>
        <p>+380637931590</p>
        <a href="mailto:vikhulei@gmail.com">vikhulei@gmail.com</a>
        <Anchor href="https://www.facebook.com/bethany.nivki" target="_blank">
          <FontAwesome.FaFacebook />
        </Anchor>
      </Footer>
    </Wrapper>
  );
};

export default ContactsMobile;
