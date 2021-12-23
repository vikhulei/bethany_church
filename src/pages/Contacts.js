import React from "react";
import ContactsDesk from "./desktop/ContactsDesk";
import ContactsMobile from "./mobile/ContactsMobile";

const Contacts = ({ mobileVersion }) => {
  return <div>{mobileVersion ? <ContactsMobile /> : <ContactsDesk />}</div>;
};

export default Contacts;
