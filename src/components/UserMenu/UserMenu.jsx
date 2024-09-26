import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const username = useSelector(selectUser);
  return (
    <div className={s.wrapper}>
      <p>Welcome, {username.name}!</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
