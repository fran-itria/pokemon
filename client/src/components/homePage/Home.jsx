import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../redux/actions/actions";
import Pokemon from "../pokemon/Pokemon";
import style from './Home.module.css'

export default function Home() {
    const pokemons = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    let [page, setPage] = useState(1)
    const [slice, setSlice] = useState({
        init: 0,
        finish: 12
    })
    const [twelvePokemons, setTwelvePokemons] = useState([])

    useEffect(() => {
        dispatch(getPokemons())
    }, [])

    const pagination = (event) => {
        switch (event.target.name) {
            case 'next':
                // if (slice.finish <= 48) {
                setPage(page + 1)
                setTwelvePokemons({ init: twelvePokemons.init + 12, finish: twelvePokemons.finish + 12 })
                // setSlice({ init: slice.init + 12, finish: slice.finish + 12 })
                // }
                break;
            case 'prev':
                // if (slice.finish > 12) {
                setPage(page - 1)
            // setSlice({ init: slice.init - 12, finish: slice.finish - 12 })
            // }
            default:
                break;
        }
    }

    useEffect(() => {
        setTwelvePokemons(pokemons.slice(slice.init, slice.finish))
    }, [pokemons])
    useEffect(() => {
        setTwelvePokemons(pokemons.slice(slice.init, slice.finish))
    }, [page])

    if (pokemons.length == 0) return <div>LOADING</div>
    return (
        <div className={style.contenedor}>
            <div className={style.pokemons}>
                {twelvePokemons && twelvePokemons.map((pokemon) => {
                    const { id, name, sprites, types } = pokemon
                    const image = sprites.front_default
                    const type = types.map(type => type.type.name)
                    return <Pokemon
                        key={'Pokemons con el id:' + id}
                        id={id}
                        name={name}
                        image={image}
                        types={type}
                    />
                })}
            </div>
            <div className={style.pagination}>
                <button name="prev" onClick={(event) => pagination(event)} className={style.button}> Prev </button>
                <p>{page}</p>
                <button name='next' onClick={(event) => pagination(event)} className={style.button}> Next </button>
            </div>
        </div>
    )
}