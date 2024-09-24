import { Field, Formik, Form } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    // console.log(values);
    dispatch(register(values));
    actions.resetForm();
    console.log(isLoggedIn);
  };

  // Form -- autoComplete="off"

  return (
    <div className={s.wrapper}>
      <h3 className={s.head}>Please, fill out the registration form</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            Name
            <Field className={s.input} type="text" name="name" />
          </label>
          <label className={s.label}>
            Email
            <Field className={s.input} type="email" name="email" />
          </label>
          <label className={s.label}>
            Password
            <Field className={s.input} type="text" name="password" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
