import { useState } from "react";
import s from "./ContactNumberEditor.module.css";
import { useDispatch } from "react-redux";
import { editContactNumber } from "../../redux/contacts/contactsOps";

const ContactNumberEditor = ({ initialValue, contactId, onClose }) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(initialValue);

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      editContactNumber({
        id: contactId,
        number,
      })
    )
      .unwrap()
      .then(() => onClose());
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className={s.editInput}
      />
      <button type="submit" className={s.save}>
        Save
      </button>
    </form>
  );
};

export default ContactNumberEditor;
