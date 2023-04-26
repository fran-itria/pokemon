import { useState } from "react";
import style from "./Types.module.css";
import { useSelector } from "react-redux";
import validate from "../form/ValidateFunction.js";

export default function TypesComponent({ campos, setCampos, setErrors }) {
  const types = useSelector((state) => state.types);
  const [active, setActive] = useState([]);

  function addType(event) {
    const actives = [...active];
    const value = parseInt(event.target.value);
    if (!campos.types.includes(value)) {
      setActive([...active, value]);
      setCampos({ ...campos, types: [...campos.types, value] });
      setErrors(validate({ ...campos, types: [...campos.types, value] }));
    } else {
      const desactives = actives.filter((element) => element != value);
      setActive(desactives);
      setCampos({ ...campos, types: desactives });
      setErrors(validate({ ...campos, types: desactives }));
    }
  }

  return (
    <div className={style.contenedorTypes}>
      <p className={style.p}>Select type for you pokemon:</p>
      <div className={style.types}>
        {types.map((type) => (
          <button
            name={type.name}
            value={type.id}
            onClick={(event) => addType(event)}
            className={
              active.includes(type.id)
                ? style.buttonActive
                : style.buttonDesactive
            }
          >
            {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}
