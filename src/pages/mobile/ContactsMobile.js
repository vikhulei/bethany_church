import React from "react";
import styled from "styled-components";
import contact from "../../assets/contact.png";

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

const ContactsMobile = () => {
  return (
    <>
      <Contacts src={contact} alt="contact_us" />
      <Form>
        <Label>Your message:</Label>
        <Input type="text" />
        <Button>Send</Button>
      </Form>
    </>
  );
};

export default ContactsMobile;
