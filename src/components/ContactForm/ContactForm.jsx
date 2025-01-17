import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const ContactsSchema = Yup.object({
    name: Yup.string()
      .min(2, "Longer, please!")
      .max(50, "Shorter, please!")
      .required("Type something in!"),
    number: Yup.string()
      .required("Type something in!")
      .matches(/^\+?[0-9-]+$/, "It's a phone NUMBER")
      .min(6, "Longer, please!")
      .max(50, "Shorter, please!"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    const newContact = {
      name: data.name,
      number: data.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  // Form -- autoComplete="off"

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactsSchema}
      >
        <Form className={s.form}>
          <h3 className={s.head}>Add new contact</h3>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" placeholder="Jane Lane" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field
              className={s.input}
              name="number"
              placeholder="000-000-000"
            />
            <ErrorMessage
              name="number"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
