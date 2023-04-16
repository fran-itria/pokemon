import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrderPokemons, filters } from "../../redux/actions/actions";
import style from '../Home.module.css'


export default function FiltrosPokemon() {
    const types = useSelector(state => state.types)
    const dispatch = useDispatch()
    const [filter, setFilter] = useState()
    const [order, setOrder] = useState()

    function filterPoke(event) {
        setFilter(event.target.value)
        dispatch(filterOrderPokemons(event.target.value, order))
    }
    function orderPoke(event) {
        setOrder(event.target.value)
        dispatch(filterOrderPokemons(filter, event.target.value))
    }

    useEffect(() => {
        if (typeof filter != 'undefined' || typeof order != 'undefined') {
            dispatch(filters(filter, order))
        }
    }, [filter, order])

    return (
        <div className={style.filtros}>
            <p className={style.p}>Select type: </p>
            <select name='filter' onChange={(event) => filterPoke(event)} className={style.select}>
                <option value='All'>All</option>
                {types.map(type => {
                    return <option value={type.name}>{type.name}</option>
                })}
            </select>
            <p className={style.p}>Select order: </p>
            <select name='order' onChange={(event) => orderPoke(event)} className={style.select}>
                <option ></option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='ascendente'>Ascendente</option>
                <option value='descendente'>Descendente</option>
            </select>
        </div>
    )
}