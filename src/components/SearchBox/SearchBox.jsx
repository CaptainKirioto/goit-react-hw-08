import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import {
  changeNameFilter,
  changeNumberFilter,
} from "../../redux/filters/slice";

import {
  selectNameFilter,
  selectNumberFilter,
} from "../../redux/filters/selectors";

const SearchBox = () => {
  const name = useSelector(selectNameFilter);
  const phone = useSelector(selectNumberFilter);

  const dispatch = useDispatch();

  return (
    <div className={s.searchWrap}>
      <h3>Find old contact</h3>
      <label className={s.label}>
        <span className={s.text}>By name</span>
        <input
          className={s.input}
          value={name}
          onChange={(e) => dispatch(changeNameFilter(e.target.value))}
          type="text"
          name="searchName"
          placeholder="Enter name"
        />
      </label>

      <label className={s.label}>
        <span className={s.text}>By number</span>
        <input
          className={s.input}
          value={phone}
          onChange={(e) => dispatch(changeNumberFilter(e.target.value))}
          type="text"
          name="searchPhone"
          placeholder="Enter number"
        />
      </label>
      <div className={s.emoji}>
        <p>🕵🏻‍♀️ </p>
        <p>🕵🏻‍♂️ </p>
        <p>🕵🏻</p>
      </div>
    </div>
  );
};

export default SearchBox;
