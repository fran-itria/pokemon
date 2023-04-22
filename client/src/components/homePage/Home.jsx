import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPokemon, getPokemons } from "../redux/actions/actions";
import style from './Home.module.css'
import FiltrosPokemon from "./filtrosPokemon/FiltrosPokemon";
import AllPokemons from "./pokemons/allPokemons/AllPokemons";
import Pagination from "./pagination/Pagination";

export default function Home() {
    const pokemons = useSelector(state => state.pokemons)
    const filtros = useSelector(state => state.filters)
    const dispatch = useDispatch()
    const [page, setPage] = useState({
        pag: 1,
        init: 0,
        finish: 12
    })
    const [twelvePokemons, setTwelvePokemons] = useState([])

    useEffect(() => {
        dispatch(getPokemons(filtros))
    }, [])
    useEffect(() => {
        if (pokemons.lenght != 0 && Array.isArray(pokemons)) {
            setTwelvePokemons(pokemons.slice(page.init, page.finish))
        } else setTwelvePokemons(pokemons)
    }, [pokemons, page])

    const allPokemons = () => {
        dispatch(cleanPokemon())
    }


    if (Array.isArray(pokemons) && pokemons.length == 0) return <div className={style.contenedorLoading}>
        <h1 className={style.loading}>Loading...</h1>
    </div>
    return (
        <div className={style.contenedor}>
            {typeof pokemons == 'object' && !Array.isArray(pokemons) ?
                <div>
                    <p className={style.p}>Pokemons de ese tipo no encontrados</p>
                    <button onClick={() => allPokemons()} className={style.button}> Mostrar todos los pokemons </button>
                </div>
                :
                <div className={style.chico}>
                    <p className={style.p2}>
                        Haciendo click sobre la targeta de cualquier pókemon, accederas a su detalle,
                        y podras buscar mediante el buscador de la esquina superior derecha a cualquier pókemon,
                        debes de buscarlo por su nombre exacto
                    </p>
                    <FiltrosPokemon />
                    <AllPokemons twelvePokemons={twelvePokemons} />
                    <Pagination page={page} setPage={setPage} pokemons={pokemons} />
                </div>
            }
        </div>
    )
}