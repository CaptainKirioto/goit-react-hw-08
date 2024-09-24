import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <nav>
      <div className={s.auth}>
        <NavLink to="/register" className={buildLinkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={buildLinkClass}>
          Log In
        </NavLink>
      </div>
    </nav>
  );
};

export default AuthNav;