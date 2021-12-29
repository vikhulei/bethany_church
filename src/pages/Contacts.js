import React from "react";
import ContactsMobileEng from "../pages/eng/mobile/ContactsMobileEng";
import ContactsMobileUkr from "../pages/ukr/mobile/ContactsMobileUkr";
import ContactsDesk from "./desktop/ContactsDesk";

const Contacts = ({ eng, mobileVersion }) => {
  
  return (
    <>
      {eng ? (
        mobileVersion ? (
          <ContactsMobileEng />
        ) : (
          <ContactsDesk />
        )
      ) : mobileVersion ? (
        <ContactsMobileUkr />
      ) : (
        <ContactsDesk />
      )}
    </>
  );
};

export default Contacts;
