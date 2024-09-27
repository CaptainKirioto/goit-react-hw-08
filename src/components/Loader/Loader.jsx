import { ProgressBar } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.loaderWrapper}>
      <ProgressBar
        className={s.loader}
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        borderColor="#665e4f"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
