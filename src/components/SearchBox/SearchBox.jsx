import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const name = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchWrap}>
      <label className={s.label}>
        <span className={s.text}>Find contacts by name</span>
        <input
          className={s.input}
          value={name}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default SearchBox;
