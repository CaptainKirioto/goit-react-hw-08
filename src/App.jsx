import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";

import AppBar from "./components/AppBar/AppBar.jsx";
import s from "./App.module.css";

import HomePage from "./pages/HomePage/HomePage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import Layout from "./components/Layout/Layout.jsx";
import { selectIsRefreshing } from "./redux/auth/selectors.js";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing page, please wait</p>
  ) : (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>

      <AppBar />
      {/* <Layout> */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactsPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      {/* </Layout> */}
    </div>
  );
}

export default App;
