import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";

import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };

  const ContactsSchema = Yup.object({
    name: Yup.string()
      .min(3, "Longer, please!")
      .max(50, "Shorter, please!")
      .required("Type something in!"),
    number: Yup.string()
      .required("Type something in!")
      .min(3, "Longer, please!")
      .max(50, "Shorter, please!")
      .matches(/^\+?[0-9-]+$/, "It's a phone NUMBER"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    console.log(data);

    const newContact = {
      name: data.name,
      number: data.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactsSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="number" />
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
