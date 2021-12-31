import React from "react";
import ContactsMobileEng from "../pages/eng/ContactsEng";
import ContactsMobileUkr from "../pages/ukr/ContactsUkr";

const Contacts = ({ eng }) => {
  
  return (
    <>
      {eng ?  <ContactsMobileEng /> : <ContactsMobileUkr /> }
    </>
  );
};

export default Contacts;
