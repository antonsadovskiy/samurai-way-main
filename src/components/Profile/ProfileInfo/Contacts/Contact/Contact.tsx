import React, { FC } from "react";
import s from "./Contact.module.css";

type ContactPropsType = {
  isOwner: boolean;
  contact: string;
  label: string;
};

const Contact: FC<ContactPropsType> = (props) => {
  return (
    <div className={s.contact}>
      {props.isOwner ? (
        <p>
          {props.label}: {props.contact}
        </p>
      ) : (
        props.contact && (
          <p>
            {props.label}: {props.contact}
          </p>
        )
      )}
    </div>
  );
};

export default Contact;
