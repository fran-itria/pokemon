import { useDispatch } from "react-redux"
import { getTypes } from "../redux/actions/actions"
import style from './Landing.module.css'

export default function Landing({ init, setInit }) {
    const dispatch = useDispatch()
    const startApp = () => {
        setInit(!init)
        dispatch(getTypes())
    }

    return (
        <div className={style.contenedor}>
            <button onClick={() => startApp()} className={style.button}>START</button>
        </div>
    )
}