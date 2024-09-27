import { useState } from "react";
import s from "./ContactNameEditor.module.css";
import { useDispatch } from "react-redux";
import { editContactName } from "../../redux/contacts/contactsOps";

const ContactEditor = ({ initialValue, contactId, onClose }) => {
  const [text, setText] = useState(initialValue);
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(
      editContactName({
        id: contactId,
        text,
      })
    )
      .unwrap()
      .then(() => onClose());
  };

  return (
    <form className={s.editForm} onSubmit={handleSave}>
      <input
        className={s.editInput}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className={s.save}>
        Save
      </button>
    </form>
  );
};

export default ContactEditor;
