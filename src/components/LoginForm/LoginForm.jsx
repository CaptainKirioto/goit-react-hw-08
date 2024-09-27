import { Field, Formik, Form, ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .then(() => {
        toast.success("Log in is successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch(() => {
        toast.error("Log in failed! Try again", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
    actions.resetForm();
  };

  const ContactsSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Type something in!"),
    password: Yup.string()
      .min(8, "Not safe, min 8 symbols long")
      .max(50, "Shorter, please!")
      .required("Type something in!"),
  });

  // Form -- autoComplete="off"

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactsSchema}
      >
        <Form className={s.form}>
          <h3 className={s.head}>Log in here 👇🏽</h3>
          <label className={s.label}>
            Email
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="moonlight@mail.com"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <label className={s.label}>
            Password
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="your password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <div className={s.redirect}>
        If you&apos;re new here, you can{" "}
        <Link to="/register">register here</Link>
      </div>
    </div>
  );
};

export default LoginForm;
