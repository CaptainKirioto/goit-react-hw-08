import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.left}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </div>
        <div className={s.right}>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Log In
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
