import { useDispatch } from "react-redux"
import { getTypes } from "../redux/actions/actions"

export default function Landing({ init, setInit }) {
    const dispatch = useDispatch()
    const startApp = () => {
        setInit(!init)
        dispatch(getTypes())
    }

    return (
        <div>
            <h1>LANDING PAGE</h1>
            <button onClick={() => startApp()}>Iniciar</button>
        </div>
    )
}