import { Field, Formik, Form } from "formik";
import s from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

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
    </div>
  );
};

export default LoginForm;
