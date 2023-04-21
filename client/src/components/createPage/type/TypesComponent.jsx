import { useEffect, useState } from "react";
import style from "./Types.module.css";
import { useSelector } from "react-redux";

export default function TypesComponent({ campos, setCampos }) {
  const types = useSelector((state) => state.types);
  const [active, setActive] = useState([]);

  function addType(event) {
    const copy = [...campos.types];
    const actives = [...active];
    const value = parseInt(event.target.value);
    if (!campos.types.includes(value)) {
      setActive([...active, value]);
      setCampos({ ...campos, types: [...campos.types, value] });
    } else {
      const values = copy.filter((elemento) => elemento != value);
      setCampos({ ...campos, types: values });
      const desactives = actives.filter((element) => element != value);
      setActive(desactives);
    }
  }

  useEffect(() => {
    console.log(campos.types);
  }, [campos]);

  return (
    <div className={style.contenedorTypes}>
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
            {type.id} {type.name}
          </button>
        ))}
      </div>
    </div>
  );
}
