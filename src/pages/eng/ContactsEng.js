import React from "react";
import contact from "../../assets/contact.png";
import * as FontAwesome from "react-icons/fa";
import {
  Wrapper,
  Contacts,
  Form,
  Input,
  TextArea,
  Button,
  Footer,
  Anchor
} from "../../styled/pages/ContactsStyled";

const ContactsEng = () => {
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
        <Anchor href="https://www.facebook.com/bethany.nivki" target="_blank">
          <FontAwesome.FaFacebook />
        </Anchor>
        <a href="mailto:vikhulei@gmail.com">vikhulei@gmail.com</a>
      </Footer>
    </Wrapper>
  );
};

export default ContactsEng;
