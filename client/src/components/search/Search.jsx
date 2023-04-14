import { useDispatch } from 'react-redux'
import style from './Search.module.css'
import { useState } from 'react'
import { onSearch } from '../redux/actions/actions'

export default function () {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onChange = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }

    return (
        <div className={style.contenedor}>
            <input onChange={(event) => onChange(event)}></input>
            <button onClick={() => dispatch(onSearch(text))}>buscar</button>
        </div>
    )
}