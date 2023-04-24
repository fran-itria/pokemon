import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions/actions";
import style from "./Landing.module.css";

export default function Landing({ setInit }) {
  const types = useSelector((state) => state.types);
  const dispatch = useDispatch();
  const startApp = () => {
    setInit(true);
    if (types.length == 0) {
      dispatch(getTypes());
    }
  };

  return (
    <div className={style.contenedor}>
      <button onClick={() => startApp()} className={style.button}>
        START
      </button>
    </div>
  );
}
