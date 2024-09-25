import { Field, Formik, Form } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  // Form -- autoComplete="off"

  return (
    <div className={s.wrapper}>
      <h3 className={s.head}>Please, log in</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
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

      <div className={s.redirect}>
        If you&apos;re new here, please{" "}
        <Link to="/register">register here</Link>
      </div>
    </div>
  );
};

export default LoginForm;
