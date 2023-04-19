import style from './Create.module.css'
import { useSelector } from "react-redux";

export default function TypesComponent({campos, setCampos}) {
    const types = useSelector(state => state.types)

    function addType(event) {
        const value = event.target.value
        setCampos({ ...campos, types: [...campos.types, value] })
    }

    return (
        <div className={style.contenedorTypes}>
            <div className={style.types}>
                {types.map(type =>
                    <button
                        name={type.name}
                        value={type.id}
                        onClick={(event) => addType(event)}
                        className={style.buttonType}>
                        {type.id} {type.name}
                    </button>)}
            </div>
        </div>
    )
}