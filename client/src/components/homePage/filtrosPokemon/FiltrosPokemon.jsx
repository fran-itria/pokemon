import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterOrderPokemons, filters } from "../../redux/actions/actions";
import style from './FiltrosPokemon.module.css'


export default function FiltrosPokemon() {
    const types = useSelector(state => state.types)
    const filtros = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const [select, setSelect] = useState(filtros.select)
    const [filter, setFilter] = useState(filtros.filter)
    const [order, setOrder] = useState(filtros.order)

    function selectPoke(event) {
        setSelect(event.target.value)
        dispatch(filterOrderPokemons(event.target.value, filter, order))
    }
    function filterPoke(event) {
        setFilter(event.target.value)
        dispatch(filterOrderPokemons(select, event.target.value, order))
    }
    function orderPoke(event) {
        setOrder(event.target.value)
        dispatch(filterOrderPokemons(select, filter, event.target.value))
    }

    useEffect(() => {
        if (typeof select !== 'undefined' || filter !== 'undefined' || typeof order !== 'undefined') {
            dispatch(filters(select, filter, order))
        }
    }, [select, filter, order])

    return (
        <div className={style.filtros}>
            <p className={style.p}>Select pokemons: </p>
            <select name='filter' onChange={(event) => selectPoke(event)} className={style.select}>
                <option></option>
                <option value='todos'>Todos</option>
                <option value='api'>Pokemons de la Api</option>
                <option value='creado'>Pokemons creados</option>
            </select>
            <p className={style.p}>Select type: </p>
            <select name='filter' onChange={(event) => filterPoke(event)} className={style.select}>
                <option></option>
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
                <option value='ascendente'>Ataque &#8679;</option> 
                <option value='descendente'> Ataque &#8681;</option>
            </select>
        </div>
    )
}