import s from "./Contact.module.css";
import { SiAlienware } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
import { useState } from "react";
import ContactNameEditor from "../ContactNameEditor/ContactNameEditor";
import ContactNumberEditor from "../ContactNumberEditor/ContactNumberEditor";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const [isNameEditing, setNameIsEditing] = useState(false);

  const [isNumberEditing, setNumberIsEditing] = useState(false);

  return (
    <div className={s.contactWrap}>
      <div className={s.contactsInfo}>
        {isNameEditing ? (
          <ContactNameEditor
            initialValue={name}
            contactId={id}
            onClose={() => setNameIsEditing(false)}
          />
        ) : (
          <p onClick={() => setNameIsEditing(true)}>
            <SiAlienware className={s.icon} />
            {name}
          </p>
        )}
        {isNumberEditing ? (
          <ContactNumberEditor
            initialValue={number}
            contactId={id}
            onClose={() => setNumberIsEditing(false)}
          />
        ) : (
          <p onClick={() => setNumberIsEditing(true)}>
            <BsFillTelephoneFill className={s.icon} />
            {number}
          </p>
        )}
      </div>
      <button className={s.delete} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
