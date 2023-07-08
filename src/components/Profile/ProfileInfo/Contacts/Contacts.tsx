import React, { FC } from "react";
import { ContactsType } from "../../../../redux/profile/profileReducer";
import s from "./Contacts.module.css";
import Contact from "./Contact/Contact";

type ContactsPropsType = {
  isOwner: boolean;
  contacts: ContactsType;
};

const Contacts: FC<ContactsPropsType> = (props) => {
  return (
    <div className={s.contacts}>
      {Object.keys(props.contacts).map((key) => (
        <Contact
          key={key}
          isOwner={props.isOwner}
          contact={props.contacts[key as keyof ContactsType]}
          label={key}
        />
      ))}
    </div>
  );
};

export default Contacts;
